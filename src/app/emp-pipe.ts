import{Pipe, PipeTransform} from '@angular/core'
import { Employee } from './employee'
import { JsonPipe } from '@angular/common';
// import { min } from 'rxjs/operators';
// import {EmpServices} from './emp.service'; 
// import { from } from 'rxjs';
@Pipe({
    name:'spipe'
})

export class EmpPipe  implements PipeTransform{

    employees : Employee[] =[];
    filterData:any = [];


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    // transform(value:Date, format:string) : string{
    //     var r=new Date()
    //             let dto=new Date().getTime();
    //             let dts = value.getTime();
    //             let dtt = dto - dts;  
    //             let odi =1000 * 60 * 60 * 24;
    //             let ys = Math.floor(dtt / (odi * 365));
    //             // return   r + " Yrs";

    //             if(format == null || format.toLowerCase() == 'y' ){
    //                 return Math.floor(dtt / (odi * 365)) + " years ";
    //             }
    //             else if(format.toLowerCase() == 'm'){
    //                 return Math.floor(dtt / (odi * 31)) + " Months "
    //             }
    //             else {
    //                 return Math.floor(dtt / (odi)) +  " Days ";
    //             }

        
        
    //         }
    //     }

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

                        // Getting The Minimum And Maximum salary mployees

        // transform(allEmps:Employee[], mins:number, maxs:number ){
//         transform(allEmps:Employee[], mins:number, maxs:number ):Employee[]{
//         console.log(allEmps);
//         console.log("Mins",mins);
//         console.log("Maxs",maxs);
//        return  allEmps.filter((emp)=>{return  emp.sal > mins })
//        .filter((emp1)=>{return  emp1.sal <= maxs})

// // return allEmps;

//     }

  
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                          // Search Filter

transform(value:any, search:any){

    
    if(search == undefined){
        return value;
    }

    else
    {

        this.filterData=[];
        for(let k of value){
            // console.log(k);
            if(k.Title.toLowerCase().indexOf(search) !== -1){
                this.filterData.push(k)
                // this.employees.push(k);
            }
        }
    }
            
    return this.filterData;
    // return this.employees;

}

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                        // Fetching Data Employess offf

            // transform(value:any, searchingItems:any){
            //     console.log("value is ", value);
            //     console.log("Searc Item i s:" , searchingItems);
                
                
            //         if(searchingItems === undefined){
            //             return value;
            //         }
            //         else{
            //             this.filterData=[];
            //             for(let k of value){
            //                 // console.log(k);
            //                 if(k.Title.toLowerCase().indexOf(searchingItems) >= 0){
            //                     this.filterData.push(k)
            //                     // this.employees.push(k);
            //                 }
                            
            //             }
            //         }
            //         return this.filterData;
            //         console.log("Result is ", this.filterData);
                    
            //         // return this.employees;
            // }            
         
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   
            
        }