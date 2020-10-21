import { Component, OnInit,ViewChild } from '@angular/core';
import { StudentDetail  } from './StudentDetails';
import { SizerComponent } from '../sizer.component';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-bs',
  templateUrl: './bs.component.html',
  styleUrls: ['./bs.component.css']
})
export class BsComponent implements OnInit {
  
  
  @ViewChild('formName',{static:false}) formName:any;
  public hasError=!false;

  public rsData:any={
    'cli':
           {'id':1,'name':'Raju'},
   'dli':
          {'id':2,'name':'Raju12'},
  'vli':[{'id':3,'name':"Vishwas"},{id:4,name:"Kumar"}]
  }
  

  opts =['Ang1', "Ang2", 'Ang3', 'Ang4', 'Ang5',  'Ang6', 'Ang7',  'Ang8',  'Ang9']
  
  std: StudentDetail = new StudentDetail(1,"Raju",30, 1000000, "Ang7");

  public styl1=true;
  public styl2=true;
  public styl3=true;
  
  
  settingClasses(){
let cls={"stl1": this.styl1, "stl2": this.styl2, "stl3": this.styl3};
return cls;
  }

  istr=true;
  istr1=true;
  istr2=true;
  
  
    hasError12(){
      let cls={'rest1':this.istr,'rest2':this.istr1, 'rest3':this.istr2};
      return cls;
    }
  
  ang1:string = "Ang7";
  get res122() {
  return JSON.stringify(this.std)};

    newEmployee(){
      // this.std = new StudentDetail(1,"Virat",0,1,"Like");
      alert("Updated");
    }
  
    private cl2:any = "cl1";
   
    //(1) onSubmit(fm:any){
    //   alert(fm.controls.id.value + " " + fm.controls.name.value)
    //   fm.form.reset();
    //   this.std = new StudentDetail(1,"Virat",20,10000,"");
    // }


   
    // onSubmit(){
    //   alert(this.formName.controls.id.value + " " + this.formName.controls.name.value)
    //   this.formName.form.reset();
    //   this.std = new StudentDetail(1,"Virat",20,10000,"");
  
    // }

    
    //   submitForm(){
    //   alert(this.formName.controls.id.value + " " + this.formName.controls.name.value);
    //   this.formName.reset();
    //   this.std = new StudentDetail(1,"Virat",0,1,"Like");
    // }

    constructor(private es:EnrollService) { }
    errorMessage:any="";
    onSubmit(){
      this.es.getBsEmployees(this.std)
          .subscribe(
            (res)=>{
              console.log("Result is ", res); },
            (err)=>{
              this.errorMessage = err.statusText;
              console.log("Erros is ", err); 
              
            }
                );
                
                this.formName.reset();
      
      }

  ngOnInit() {
  }

}
