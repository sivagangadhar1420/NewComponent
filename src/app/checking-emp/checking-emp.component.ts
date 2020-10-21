import { Component, OnInit } from '@angular/core';
import { SecondClass , typeofemployee} from '../res-employee/secondclass';
import { SecondService } from '../res-employee/secondservice';
import { LoggerService } from './loggerservice';
import { interval, of, Observable } from 'rxjs';
import { take, filter, map } from 'rxjs/operators';
import { element } from 'protractor';


@Component({
  selector: 'app-checking-emp',
  providers:[SecondService, LoggerService],
  templateUrl: './checking-emp.component.html',
  styleUrls: ['./checking-emp.component.css']
})
export class CheckingEmpComponent implements OnInit {
 

  // resofemp:SecondClass[] = [];
  resofemp:SecondClass[];
  data:any= "";
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  streamObservable(obs){
    let ar=[1,2,3,4,5,6,7,8];
   ar.forEach(ele =>{
     obs.next(ele);
    //  console.log(ele);
    //  console.log(obs);
     
     
    })
    // obs.complete();

  }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  

  constructor(private sservice:SecondService, ls:LoggerService) {
    
    // let obs=interval(1000).pipe(take(5))
    // // let obs=interval(1000);
    // obs.subscribe((val)=>{console.log("Msg is ", val);
    // })

    // // let obsrble= of(1,2,3,4,5,6).pipe();
    // // let obsrble = interval(500).pipe(take(10));
    
    // // let obsrble = interval(500);
    // // let obsrble = interval(500).pipe();
    
    // let obsrble = interval(500).pipe(filter((res)=> res%2 == 0), map((res1)=> {return    res1 + 1 }));
    // let resobsrble= {
    //   next: (val)=>{
    //     console.log("val is", val );
    //     this.data += val  + " , ";
    //   },
    //   error:(err)=>{
    //     console.log("Errors is ", err);
    //     this.data += err + " , ";
    //   },
    //   complete:()=>{
    //     console.log("Completed");
    //     this.data += "Completed";
    //   }
    // }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      // obsrble.subscribe(resobsrble);
      // obsrble.subscribe(resobsrble.next, resobsrble.error, resobsrble.complete);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

      
      let obsl =new Observable(this.streamObservable);
      obsl.subscribe(ele =>{
        // console.log(ele);
        this.data +=  ele + " , ";
      })
      
        
    
      
   
     this.resofemp = sservice.getEmployees();
      console.log(this.resofemp);
    

   }


  ngOnInit() {
  }

}
