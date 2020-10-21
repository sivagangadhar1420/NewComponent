import { Component, OnInit } from '@angular/core';
import { Department } from '../res-employee/head-department';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  dList:Department[]=[];

  constructor(private ar:ActivatedRoute, private route:Router) { }
deptId:any=[];
  ngOnInit() {
    // let id=parseInt(this.ar.snapshot.paramMap.get('id'))
    // this.deptId = id;

      this.ar.paramMap.subscribe((res:ParamMap)=>{
        let id=parseInt(res.get('id'));
          this.deptId = id;
      })
      
      this.dList= [{departmentId:1, departmentName:"GTA"}]
    }

  goPrevious(){
    let pr = this.deptId --;
    this.route.navigate(['/pd', pr]);
  }
  goNext(){
    let nxt=this.deptId ++;
    this.route.navigate(['/pd', nxt]);
  }


}
