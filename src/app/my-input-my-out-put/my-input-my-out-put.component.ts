import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-my-input-my-out-put',
  templateUrl: './my-input-my-out-put.component.html',
  styleUrls: ['./my-input-my-out-put.component.css']
})
export class MyInputMyOutPutComponent implements OnInit {
  @Input('parentHere') public parentHere:any;
  @Output('childHere') public childHere =  new EventEmitter<any>();  

  ChildEvent(){
    this.childHere.emit("HitME strong::!!!!");
  }
  value1:any="Value1";
  
checkMethod(){
  this.childHere.emit("HitME strong::!!!!");
  }

inputChildData(gdp:any){
   this.parentHere = gdp;
   this.childHere.emit(gdp);
 }

  constructor() { }

  ngOnInit() {
    this.checkMethod();
  }

}
