
export enum typeofemployee{
    Daily = 0,Permenent,PrtTime, Retired
}

export class SecondClass{
    id:number;
    name:string;
    sal:number;
    dataofjoining:Date;
    typeofemployee:string;
    constructor(Id:number, Name:string, Salary:number, DOJ:Date, TOE:string){
        this.id=Id;
        this.name=Name;
        this.sal=Salary;
        this.dataofjoining = DOJ;
        this.typeofemployee = TOE;

    }
}