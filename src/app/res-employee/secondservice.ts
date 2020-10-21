import { Injectable } from "@angular/core";
import {SecondClass} from './secondclass';
import { LoggerService } from '../checking-emp/loggerservice';
@Injectable()
export class SecondService{
    emp1:SecondClass[]=[];

    getEmployees():SecondClass[]{
        this.ls.logFunn1("WE have Fetched the all employees");

        let restEmp=[new SecondClass( 1,"Raju", 30000, new Date('01/01/2020'), "PartTime"),
                    new SecondClass(11, "Raju1", 30000, new Date('02/02/201'), "PartTime"),
                    new SecondClass(111, "Raju2", 30000, new Date('03/03/2022'), "FullTime")];
        return restEmp;
      }
        


    

    constructor(private ls:LoggerService){
    }      
//     getEmployees():SecondClass[]{
//         this.ls.logFunn1("We Have Fetched the All Employees here");

//     this.emp1[0] = new SecondClass(1,"Raju0", 300000,new Date('09/5/2011'), "PartTime" );
//     this.emp1[1] = new SecondClass(11,"Raju1", 3000000,new Date('09/2/2016'), "FullTime" );
//     this.emp1[2] = new SecondClass(111,"Raju2", 30000000,new Date('09/29/2017'), "PartTime" );
//     return this.emp1;
// }


}
    
    