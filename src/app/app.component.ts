import { Component } from '@angular/core';
import { MenuService } from '../app/services/menu-endpoint';
import LiferayParams from '../types/LiferayParams'
import {MenuList} from '../app/menulist.model';

declare const Liferay: any;
  
@Component({
	template: 
	`<div>
	<div class="accordion" id="accordionExample">
		<div class="card"  *ngFor="let result of distinctList">
			<div class="card-header" id="headingOne">
					<h2 class="mb-0">
						<button class="btn btn-link" type="button" data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
								{{result}}
						</button>
					</h2>
			</div>
				<div class="row" style="margin-top:20px">
			<div *ngFor="let nestResult of nestResults" class="col-sm-6 col-md-3">
				<div id="{{nestResult.modelValues.Category}}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample" *ngIf="result == nestResult.modelValues.Category">
					<div>
						<div class="thumbnail">
								<a href="{{nestResult.modelValues.URL}}" target="_blank">
										<img [src]="returnImageUrl(nestResult.modelValues.Image)">
										<p>{{nestResult.modelValues.Title}}<p> 
										</a>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</div>
</div>`
})
export class AppComponent {
	params: LiferayParams;
	labels: any;
	results: MenuList[];
	nestResults: MenuList[];
	catList: any;
	arrayIndex: number;
	distinctList: any;

	constructor(private menuService: MenuService) {
		this.arrayIndex = 0;
		this.labels = {        
			
			portletNamespace: 'Porlet Namespace',
        	contextPath: 'Context Path',
			portletElementId: 'Portlet Element Id'
		}

		//console.log(this.menuService.getUsers());

		this.menuService.getMenuItems().subscribe(data => {
			this.results = data;			
			this.catList = new Array(this.results.length);

			this.results.forEach(rs => {
				//remove last 2 characters
				rs['modelValues'].Category = rs['modelValues'].Category.substring(0, rs['modelValues'].Category.length-2);

				//remove first 2 characters
				rs['modelValues'].Category=rs['modelValues'].Category.substr(2,rs['modelValues'].Category.length);

				//extract image name
				rs['modelValues'].Image = this.returnImageName(rs['modelValues'].Image);

				this.catList[this.arrayIndex] = rs['modelValues'].Category;

				this.arrayIndex = this.arrayIndex + 1;
			});

			this.nestResults = this.results;
			
			//get only distinct values
			this.distinctList = new Set(this.catList);
			});

	}

	get configurationJSON() {
		return JSON.stringify(this.params.configuration, null, 2);
	}

	returnImageName(str: string) {
		var obj = JSON.parse(str);
		return obj.title;
	}

	returnImageUrl(str: string) {
		//console.log(str);
		return "http://10.206.40.20:8080/documents/20126/0/" + str;
	}

	returnTargetName(str: string) {
		return '#' + str;
	}

	returnNestedMenu(str: string, str2: string) {
		//console.log(str==str2);
		return str==str2;
	}

	onSelect(log: any) {
		var obj = JSON.parse(log);
		//console.log(obj.title);
		return obj.title;
	  }

	  onToggle(log: any) {
		//console.log("#" + log);
		return "#" + log;
	  }
}
