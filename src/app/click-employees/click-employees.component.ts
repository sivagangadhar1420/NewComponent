import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClickSelectedService } from './click-selected.service';

@Component({
  selector: 'app-click-employees',
  templateUrl: './click-employees.component.html',
  styleUrls: ['./click-employees.component.css']
})
export class ClickEmployeesComponent implements OnInit {
ar:any=[];
colour1:any=""
  constructor(private ar1:ActivatedRoute, private router:Router, private ss:ClickSelectedService ) { }

  ngOnInit() {
    this.ar = [{Id:1, name:'Tom'}, {Id:2, name:'Jhon'}];
    this.colour1 = this.ss.color;



  }
  colour21(){
    let stls={'background-color' : 'red'};
    return stls;
  }



  
}
