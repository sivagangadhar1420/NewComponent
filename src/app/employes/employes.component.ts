import { Component, OnInit, Input } from '@angular/core';
import { Employee, EmpType } from '../employee';
import{FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',

                  //Simple Print 
  // template:`<app-res-employee></app-res-employee>`,
                  //Simple Print

  styleUrls: ['./employes.component.css']
})
export class EmployesComponent{
  
    @Input() emp:Employee;
    // constructor() { 
    // this.emp= new Employee(1,"Raju",30,30000,EmpType.Permenent,new Date('08/20/2020'));
      // }
      @Input() selected:Boolean;


      // Add course

      
  // ping:boolean=true;
  // gender:boolean;
  // gender1:any="male"

  // // toggleBtn(){
  // //   this.ping = !this.ping;
  // // }
  // // ping1:boolean=false;
  // // rToggle(){
  // //   this.ping1= !this.ping1;

  // // }

  // ping:any=false;
  // toggle1(){
  //   this.ping=!this.ping;
  // }
    


  // toggle2(){
  //   this.ping =!this.ping;
  // }

  // toggleItems:any=true;
  // toggleList(){
  //   this.toggleItems = !this.toggleItems;
  // }

  // toggleSwitch:any=false;
  // studentsToggle:any=false;
  // err:any=false;
  
  // setStyles(){
  //   // let stls={is:true, 'display' : this.err ? 'block' : 'none'}
  //   // return stls;
  //   let stls={'display' : this.err ? 'block' : 'none'};
  //   return stls;
  //   }

  // onStudentsClick(){
  //   this.studentsToggle = ! this.studentsToggle;
  // }
    

  // // onStudentsClick1(){
  // //   this.toggleSwitch = !this.toggleSwitch;

  // // }



  // // toggle3(){
  // //   this.ping = !this.ping;
    
  // //   this.ping = !this.ping;
    
  // // }


  //                        // Add Teachers

  //                        empFormss:FormGroup;
  //                        response;
  //                        // reqBody:any;
  //                        ar=["IND(+91)", "UAE(+572)"];
  //                        constructor(private formBuilder:FormBuilder,private router:Router, private authService:AuthService) { }
                       
  //                        ngOnInit(): void {
  //                          this.empFormss = this.formBuilder.group({
  //                            // creating a model for this form
  //                            // sEmail: [this.sEmail],
                             
  //                        userName : ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]{6,20}'), Validators.maxLength(20)]],
  //                        email :['',  [Validators.required, Validators.pattern('(^[a-zA-Z0-9 \ +]{5,40})@([a-zA-Z0-9]+).[a-zA-Z]{3,10}'), Validators.maxLength(30)]],
  //                        countryCode: ['Country Code', Validators.pattern('^[0-9]{0,3}$')],
  //                        phoneNumber:['',[Validators.required, Validators.pattern('^[0-9]{5,10}$')]],
  //                        password:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{6,20}'), Validators.minLength(5)]],
                         
  //                            });
  //                        }
                           
  //                        onSubmit(fn:any){
                       
  //                          const reqBody={
  //                            "role": "tutor",
  //                            "admin": {
  //                              "roomCap": 0,
  //                              "studentCap": 0
  //                            },
  //                            "subadmin": {
  //                              "branch": "string",
  //                              "teacherCap": 0,
  //                              "refEmail": "string"
  //                            },
  //                            "teacher": {
  //                              "refRole": "admin",
  //                              "refEmail": "string"
  //                            },
  //                            "student": {
  //                              "refRole": "admin",
  //                              "refEmail": "string"
  //                            },
  //                            "userName": fn.userName,
  //                            "email": fn.email,
  //                            "countryCode": fn.countryCode,
  //                            "phoneNumber": fn.phoneNumber,
  //                            "password": fn.password, 
                             
  //                          }
  //                          console.log(this.empFormss);
  //                          console.log(reqBody);
                           
  //                          this.authService.registerSuperAdmin(reqBody).subscribe(res=>{
  //                            console.log(reqBody);
                             
  //                            console.log(res);      
  //                            this.response=res;
  //                            if (this.response.success){
  //                              alert("Student Registration Successful!");
  //                            }else{
  //                              alert("Student Registration Unsuccessful!");
  //                            }
  //                          });
  //                          this.empFormss.reset();
  //                      }
                       
                      }
   

  