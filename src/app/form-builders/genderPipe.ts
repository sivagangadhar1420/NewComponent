import{Pipe, PipeTransform} from '@angular/core'
import { Employee } from '../employee';
// import { min } from 'rxjs/operators';
// import {EmpServices} from './emp.service'; 
// import { from } from 'rxjs';
@Pipe({
    name:'gpipe'
})

export class genderPipe  implements PipeTransform{
 
        transform(value:any, mins:number, maxs:number ):any{
        // console.log(value);
        // console.log("Mins",mins);
        // console.log("Maxs",maxs);

    //    return  value.filter((emp)=>{return  emp.salary > mins })
    //    .filter((emp1)=>{return  emp1.salary <= maxs})


    return value.filter((emp)=>{
        if(emp.salary > mins){
            return emp.salary;
        }
        else{
            return null;
        }
    })
}

    



   
             
    }

