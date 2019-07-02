export class BizAppDetail {
    category: string;
    title: string;
    image: string;
    url: string

    constructor(obj?: any){
        this.category = obj && obj.category || null;
        this.title = obj && obj.title || null;
        this.image = obj && obj.image || null;
        this.url = obj && obj.url || null;
    }
}