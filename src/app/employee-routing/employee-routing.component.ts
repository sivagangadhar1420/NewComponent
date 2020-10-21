import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateDepratments } from '../res-employee/routing-department';
import { Department } from '../res-employee/head-department';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-routing',
  templateUrl: './employee-routing.component.html',
  styleUrls: ['./employee-routing.component.css']
})
export class PraticeRoutingComponent implements OnInit , OnDestroy{
  remp:StateDepratments[] = [];



  constructor(private ar:ActivatedRoute) { 
    // constructor
    // this.remp[0] = new RoutingDepratment(1,"Raju", 20000, {key:"Value"})
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
    var res:StateDepratments[]= [
    {id:1,name:"Raju", salary:200000, department:{departmentId:1,departmentName:"Dept1"}},
    {id:2,name:"Ramu1", salary:201000, department:{departmentId:2,departmentName:"Dept2"}},
    {id:3,name:"Ramu2", salary:20000, department:{departmentId:3,departmentName:"Dept3"}},
    {id:4,name:"Kumar", salary:2002000, department:{departmentId:4,departmentName:"Dept4"}
  }];

   this.remp = res; 
   console.log(this.remp); 
   
  }
  paramSub:any;
  selectedEmployee:StateDepratments=new StateDepratments();
  
  ngOnInit() {
    this.paramSub = this.ar.params.subscribe((emp)=>{
      if(emp['empId'] != null){
        this.selectedEmployee = this.remp.filter(e => e.id == emp["empId"])[0]
      }
    })
  }

  ngOnDestroy(){
    this.paramSub.unsubscribe();
  }
  }


