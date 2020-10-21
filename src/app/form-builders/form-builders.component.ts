import{Component, OnInit, ViewChild} from '@angular/core';
import {BluePrintEmp} from '../BluePrintEmp';
import {FormGroup, FormControl,FormBuilder,  Validators, FormArray} from '@angular/forms';
// import 'rxjs/add/operator/debounceTime';
import { debounceTime } from 'rxjs/operators';
import {distinctUntilChanged} from 'rxjs/operators'
import { cName, dmnErr } from '../server-forms/manual-validations';
import {PasswordValidator} from '../server-forms/passwrod.validators';
import { EnrollService } from '../enroll.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-form-builders',
  templateUrl: './form-builders.component.html',
  styleUrls: ['./form-builders.component.css']
})
export class FormBuildersComponent implements OnInit {
  
  @ViewChild('fnForm', {static:false}) fnForm:any;
  blueprintEmp:BluePrintEmp;
  empFormss:FormGroup;
  public changer:string[] = [];
  firstName:any="GangaDhar";
  lastname:any="k";
name:any="Rajole";
All:any=5;
Male:any=3;
Female:any=2
 
naming(lm){
    return this.name = lm.target.value;
  }
   getFullName(){
    return this.firstName + " " + this.lastname;
  }
  
  ar=["M.Tech", "B.Tech", "PG", "MCS","MS", "BSC"];
  ngOnInit():void{
    this.getFullName();
    this.getAllPlayers();
  this.getMalePlayers();
  this.getFeMalePlayers();
    // this.blueprintEmp = new BluePrintEmp();
    // this.blueprintEmp.startingName = "Raju";
    // this.blueprintEmp.finalName = "King";
    // this.blueprintEmp.gender = "Male";
    // this.blueprintEmp.education = "B.Tech";
    
  this.empFormss = this.formBuilder.group(
  {
    fNamed :['vamsi',  [Validators.required, Validators.pattern(/[a-zA-Z0-9]{6,20}/), Validators.maxLength(20)]],
    lName :['',  [Validators.required, Validators.pattern(/[a-zA-Z0-9]{6,20}/), Validators.maxLength(20)]],
    finalName:['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]/), Validators.maxLength(20),
     Validators.minLength(2), cName(/finalName/)]],
    password:['', [Validators.required, Validators.maxLength(6), Validators.minLength(2)]],
    confirmPassword:['', [Validators.required]],
    id:['', [Validators.required, dmnErr('dell.com')]],
    emailGroup:this.formBuilder.group({
        fEmail1:[],
        cEmail:[],
     },
    //  {validators:emailValidator}
     ),

     email:['',[Validators.required]],
    cBox:[false],
    type : ['Male'],
    degrees: ['B.Tech'],
    alternateEmails: this.formBuilder.array([]),
    tempEmailing:[''],
    gl1:['']
  },

  {
    validators:PasswordValidator
  },
  
  
 );

  this.empFormss.get('cBox').valueChanges.subscribe((checked)=>{
    const eml=this.empFormss.get('email');
    if(checked){
        eml.setValidators(Validators.required);
    }
    else{
      eml.clearValidators();
    }
    eml.updateValueAndValidity();
  })

}


message:string = "";
onSubmit(fn:any){   
  if(this.fnForm.valid){
    this.es.getBsEmployees(fn).subscribe((res)=>{
                  console.log("response is ", res)}), 
                  ((err)=>{console.log("Erros is ", err);
    })
    
    

    // alert("valid" + " " +  fn.fNamed+ " " + fn.lName);
    // this.message = "Form is Valid";
    // this.fnForm.reset();
    // this.empFormss.reset();
  }
  
  else{
    this.message = "Form is InValid";
    
  }
}

get finalname(){
  return this.empFormss.get('finalName');
}


get email(){
  return this.empFormss.get('email');
}


get alternateEmails(){
  return this.empFormss.get('alternateEmails') as FormArray;
}

addAlternateEmails(){
  return this.alternateEmails.push(this.formBuilder.control(' '))
 
}
  

  
price:any=""; 
quantity:any= "";
age:any="";
res11:any=[];

onSubmit1(){
  let ft={price:this.price, quantity:this.quantity, age:this.age};
  this.res11.push(ft);
  // this.fnForm.reset();
}
restArray:any=[];
gll:any="";
addGll(){
  let gObj={g1:this.gll};
  this.restArray.push(gObj);
}


storeArray:any=[];
tempEml:any="";


addTempEmail(){
  let pl={tempEml:this.tempEml};
  this.storeArray.push(pl);
}

public fls: File = null;

inpFiles(st){
  console.log(" st ", st)
  this.fls = st.target.files;
  console.log(" after selected ", this.fls);
}
image = "";
imgUpload(fm:any){
  fm.target.src="assets/images/spy1.jpg";
  this.image = fm.target.src;
  //   console.log(fm.target.src);
}


constructor(public formBuilder: FormBuilder, private es:EnrollService){}


objArray:any=[{id:45, name:"Rohith",gender:"Male", salary:1000}, 
              {id:45, name:"Ritwika", gender:"Female", salary:500},
              {id:18, name:"Virat", gender:"Male", salary:1000},
              {id:18, name:"ASharma", gender:"Female", salary:500},
              {id:7, name:"Dhoni", gender:"Male", salary:1000},
              {id:7, name:"Sakshi", gender:"Female", salary:500}];
              
 
  plo:any="";
 getAllPlayers(){
  //  this.objArray.length;
  this.objArray.filter((res)=>{
    this.plo =res.gender.length;
  })
}
getMalePlayers(){
  return this.objArray.filter((gm)=>{return gm.gender.toLowerCase() === 'male'}).length;
}

getFeMalePlayers(){
  
  return this.objArray.filter((gm)=>{return gm.gender.toLowerCase() === 'female'}).length;
}
    
  
  

arrArray:any=  [new Employee(1,"Raj",30, 200000000,"Permenent",new Date('1-2-1997')),
               new Employee(1,"Raj",30, 200000000,"Permenent",new Date('1-2-1997'))];



selectedEmployeeRadioButton:any='All';
onEmployeCountRadioButtonChange(selButtonValue:any):void{
  this.selectedEmployeeRadioButton = selButtonValue;
}

  
        }
            

