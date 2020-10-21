import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../res-employee/head-department';

@Component({
  selector: 'app-vishawas-sena',
  templateUrl: './vishawas-sena.component.html',
  styleUrls: ['./vishawas-sena.component.css']
})
export class VishawasSenaComponent implements OnInit, OnDestroy{
  
dList:Department[]=[{departmentId:1, departmentName:"GTA"}]

  constructor(private ar:ActivatedRoute, private route:Router) { }
 deptId:any="";
 paramsSub:any;
 changeValue(val){
   alert(val)
 }
  ngOnInit() {
    
    this.ar.paramMap.subscribe((res)=>{
        let id=parseInt(res.get('vs'));
          this.deptId = id;
      })
    }
     
  goPrevious(){
    let pr = this.deptId --;
    this.route.navigate(['/pd', pr]);
  }
  goNext(){
    let nxt=this.deptId ++;
    this.route.navigate(['/pd', nxt]);
  }
  goBack(){
    let sId=this.deptId ? this.deptId : null;
    this.route.navigate(['/pd',{id:sId,test:'texValue'}]);
  }



  ngOnDestroy(){
  }
}
