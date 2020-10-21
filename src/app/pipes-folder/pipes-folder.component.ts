import { Component, OnInit} from '@angular/core';
import { Employee, EmpType } from '../employee';

import {EmpServices} from '../emp.service'; 
import { LoggerService } from '../checking-emp/loggerservice';

@Component({
  selector: 'app-pipes-folder',
  templateUrl: './pipes-folder.component.html',
  styleUrls: ['./pipes-folder.component.css']
})
export class PipesFolderComponent implements OnInit{
  
  crmsn:string="crimson";
  stringConvert:string=" stringConvertChars";
  dateofbirth:Date = new Date();
  pbirth:Date = new Date(2004, 10, 10);
  firstValue:number=null;
  secondvalue:number=null;
  result:number=null;
  employees : Employee[] =[];
  // femp:[] = [];
  // femp=[];

      
  constructor(private empServices:EmpServices, ls:LoggerService) { 
 
   this.employees[0] = new Employee (1,"Raju",23,35000,"Retired",new Date('09/24/2018'));
   this.employees[1] = new Employee (2,"Nikil",20,20000,"PrtTime",new Date('08/23/2021'));
   this.employees[2] = new Employee (3,"Kumar",22,7000,"Permenent",new Date('12/22/2020'));
   
   ls.logFunn1("Msg i am getting")
 
  }
  

//   add(){
//     this.result = this.firstValue + this.secondvalue;

//   }

//   dev(){
//     this.result = this.firstValue / this.secondvalue;

//   }

//   sub(){
//     this.result = this.firstValue - this.secondvalue;

//   }
//   multiple(){
//     this.result = this.firstValue * this.secondvalue;

//   }
//   mod(){
//     this.result = this.firstValue % this.secondvalue;

//   }
//   inp1:number=null;
//   inp2:number=null;
//   dollars:number = null;
//   paisa:number=null;


//   f1(){
//     this.inp2=this.inp1 / 70;
//   }

//   f2(){
//       this.inp1 =   this.inp2 * 70;
    
//     }

// f3(){
// this.inp1=this.inp2 * 70;

// }

// f4(){
//   this.inp2=this.inp1 / 70;

// }
// res(){
//   this.paisa = this.dollars * 70;

// }
// res1(){
//   this.dollars=  this.paisa / 70  ;
// }

// // Number Pipes:
// numbs:number = 123456.65432;

// // Currency Converter
// salary:number = 10000;
// // PerCenage
// myPercentage:number = 0.12123340;

// // Slice pipe
// schars:number[]= [1,2,3,4,5,6,7,8,9];

// // Object
// obj1:object = {"name":"Raju", "age":30};
// arobj1:object = [{"name":"Rajkumar", "age":3},{"name":"Rajini", "age":35}, {"name":"Rajesh", "age":34}]

ngOnInit():void {
  this.getDetails();

 

  
}
// empservices:EmpServices;
moviesData:any= [];
public movies:any;
public searchItem:any;

getDetails(){
  this.empServices.getData().subscribe((res)=>{
  console.log("Data  - - - - - - >", res);
  this.moviesData = res;
  this.movies = this.moviesData.Search;
  // console.log("Otp of page",this.moviesData.Search);
  // console.log(this.movies);
  
  })
}


// iMPURE pIPE
imp1:any = ["Ar1", "Ar2"];
arp1:any=[];
inPipe:string;
exmp:string;
res:any = [];
fData:any=["Br1", "Br2"];
fpipe:any;





garData:any=["fr1","fr2"];
gData:any="";
finalres:any = [];

addpipeData(){
  this.fData.push(this.fpipe);
  this.finalres = this.fData;
}



// getpData(val:any){
//   this.garData.push(val);
//   this.fpipe = this.garData
//   console.log(this.garData);
// }

// getpData(){
//   this.garData.push(this.gData);
//   this.fpipe = this.garData
//   console.log(this.garData);
// }

   

// addData(){
//   this.res= this.imp1;
//    this.imp1.push(this.arp1);
//    console.log(this.res);
   
//   }





// addPipe(){
//   this.exmp=this.inPipe
//   console.log(this.inPipe);
// }

// addPipe1(val:string){
// this.exmp = val;

//   console.log(val);
//   // console.log(this.inPipe);
// }


  
  

}

