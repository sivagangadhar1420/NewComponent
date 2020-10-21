import {Department} from './head-department';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl:'./depart.html', 

})
export class DepartmentComponent implements OnInit, OnDestroy{
    dptcmpnt:Department[] = [];
    constructor( private ar:ActivatedRoute){
        var dpts:Department[]=[
                                {departmentId:1,departmentName:"Dept1"}, 
                               {departmentId:2,departmentName:"Dept2"}
                              ];
                               this.dptcmpnt = dpts;
                    }

    paramSub:any;
  // selectedEmployee:Department=new Department();
  selectedEmployee:any="";

  ngOnInit() {
    this.paramSub = this.ar.params.subscribe((emp)=>{
      if(emp['DeptID'] != null){
        let pr=  this.dptcmpnt.filter(e => e.departmentId == emp['DeptID'])[0];
        this.selectedEmployee = pr;
       }
    })
  }

  ngOnDestroy(){
    this.paramSub.unsubscribe();
    }

}
    