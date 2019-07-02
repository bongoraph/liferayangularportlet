import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';

@Pipe({
    name: 'filterUnique',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        // Remove the duplicate elements
   /*
        var art= value.map(x=>{
            return x.ArticleTags.map(y=>{ return y.value;});;
        }).reduce((acc,ele,i)=>{
            acc = acc.concat(ele);
            return acc;
        });
        
        return new Set(art);
        */
    }
}
