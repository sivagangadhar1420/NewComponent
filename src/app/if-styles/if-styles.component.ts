import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-styles',
  templateUrl: './if-styles.component.html',
  styleUrls: ['./if-styles.component.css']
})
export class IfSTYlesComponent implements OnInit {
  selected:any="";
  gender:any=""
ping:any=false;
  constructor() { }
  toggleBtn(){
    this.ping = !this.ping;
  }

  res:any=""
  toFunn1(e:any){
    this.res=e;
  }
  ar=[1,2,3,4,5,6];

  ngOnInit() {
  }

}
