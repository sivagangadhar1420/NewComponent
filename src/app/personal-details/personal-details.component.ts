import { Component, OnInit , ViewChild, Input, Output, EventEmitter} from '@angular/core';
import { literalMap } from '@angular/compiler';

import {FormGroup, FormControl,FormBuilder,  Validators, NgForm} from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { PersonalService } from '../personal.service';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  @ViewChild('fnForm', {static:false}) fnForm:any;
  
  ar=["M.Tech", "B.Tech", "PG", "MCS","MS", "BSC"];

  show1: boolean = true;
  checked12:any=false;

  selectedList:any=false;
  selectList(){
    this.selectedList = !this.selectedList

  }

   data:any=[{'id':1, 'course':"Angular"}, {'id':2, 'course':'Saap'},
             {'id':3, 'course':"Jira"}, {'id':4, 'course':"Agile"}];
            

  onClick(){
    this.checked12 = !this.checked12
    }

    FixingLists(dept12:any){
      return dept12.id ===  this.deptId;
    }

  selectList1(eve:any){
    this.router.navigate(['/pd', eve.id]);
    }


  studentsToggle:boolean=false;
  onStudentsClick(){
    this.studentsToggle = ! this.studentsToggle

  }

  
 emptyArray:any=[];
 cleanArray:any=[];
 jsonArray:any=[];
 errorMessage:any="";
 deptId:any;
  ngOnInit():void{
    
    this.aRoute.paramMap.subscribe((params:ParamMap)=>{
      let pr=parseInt(params.get('id'));
      this.deptId = pr;

    })
  


      this.emptyArray= this.ps.getData();
      this.cleanArray = this.ps.getList();
     this.ps.getJsonList().subscribe((res)=>{
       this.jsonArray = res;
       ((error)=>{
         this.errorMessage = error;
            })

        });
    } 
      
  
  
  err:any=false;
  red1="red";
  font:any=30
  bl:any=false;
  ping:boolean=false;
  ping1:boolean=false;
  
  
  role='teacher';
  roleId:any="";
  constructor (private fba: FormBuilder, private ps:PersonalService, private aRoute:ActivatedRoute, private router:Router){
                                            // Using Switch-Case Condition
    // switch(this.role){
    //    case 'superAdmin':
    //     this.roleId=0;
    //     break;
    //   case 'admin':
    //     this.roleId=1;
    //     break;
    //   case 'teacher':
    //     this.roleId=2;
    //     break;
    //   case 'student':
    //     this.roleId=3;
    //     break;
    //   case 'data-entry-op':
    //     this.roleId=4;
    //     break;
    //   default:
    //     this.roleId=4;
    // }
    
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                      // Using If-Else Condition
      // if(this.role === 'superAdmin'){
      //   this.roleId = 0;
      // }
      // else if(this.role === "admins"){
      
      //   this.roleId = 1;
      // }
      // else if(this.role === "teacher"){
      //   this.roleId = 2;
      // }
      // else if(this.role === "students"){
      //   this.roleId = 3;
      // }
      // else{
      //  this.roleId = 4;
      //   }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
}

                                          // Toggling Button
                                          toggleBtn(){
                                            this.ping = !this.ping
                                          }

                                          // toggling Radio Button 
                                          rToggle(){
                                            this.ping1 = !this.ping1
                                          }

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                                    // Set classes and Set Styles
// message:string = "";
//   err1:any=true;
//   setClass(){
//     let cls={cs1:true, 'is-clr' :  this.err, 'is-clr1': this.err1};
//     return cls;
//   }
//   setStyles(){
//     let stls={"padding" : !this.err1 ? '2rem': '0px', 
//               'color' : this.err1 ? 'blue' : ""};
//             return stls;
//   }
//   str:any="";
//   image:any="";
//   fp:any="assets/images/spy.png"
//   fp1:any="assets/images/dice1.png";
  
//   onClickBtn(){
//     let pl=document.getElementById('cl1');
//     document.getElementById('cl').classList.toggle('ml');
//    if(pl.style.display === "none"){
//      pl.style.display = "block"
//    }
//    else{
//        pl.style.display = "none";
//    }
//     this.str="Hey Corona";
//   }
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        
                                                                  // Toggleing Image and Div
  //  tgImg(){
    
  //   let lm:any=document.getElementById('ig1');
  //   // let lm2:any=document.getElementById('ig2');
  // if(lm.src != ""){
  //   document.getElementById('ig1').removeAttribute('src');  
    
  // }
  // else if(lm.src == ""){
  //   document.getElementById('ig1').setAttribute('src', this.fp1); 
    
  //    }
  //   } 
  //   val:any=""
  //   refI(val1:any){
  //     this.val = val1
  //   } 
  message:string = "";
  err1:any=true;
  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              

    storingData=[{name:"Raju", age:27, gender:"Male", 'isAged':true},
    {name:"plink", age:23, gender:"Male", 'isAged':true},
    {name:"Queen", age:25, gender:"FeMale", 'isAged':false},
    {name:"Rocky", age:29, gender:"Male", 'isAged':true}];

      display:any= false;
      show=true;
      togText(){
        if(this.show){
          this.show =false;
        }
        else{
          this.show = true;
        }
      }
      Duration:number=7;
      public cl:any='red';
      public result:any='teacher';

      

      lm:any=["Ar1rtyui","Ar1xcvfgh", "Ar1mnbc", "Ar1plaqw", "Ar1qwer"]

      @Input('parent') public parent; 
      @Output() public ChildData1 = new EventEmitter<any>();
      
      fireEvent(){
        this.ChildData1.emit("Hey Hi CVandana");
      }
      pp:any="thwlowerletter"

      public emps:any=[{name:"Raju", id:10},
                      {name:"Rajini", id:11},
                      {name:"Rani", id:12}];

              
                    
       
    }
     
        




