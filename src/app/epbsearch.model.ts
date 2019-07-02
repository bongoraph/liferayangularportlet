export class EpbDetail {
    name: string;
    objectType: string;
    summary: string;
    url: string

    constructor(obj?: any){
        this.name = obj && obj.name || null;
        this.objectType = obj && obj.objectType || null;
        this.summary = obj && obj.summary || null;
        this.url = obj && obj.url || null;
    }
}