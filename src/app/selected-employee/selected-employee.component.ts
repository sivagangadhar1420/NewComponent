import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClickSelectedService } from '../click-employees/click-selected.service';

@Component({
  selector: 'app-selected-employee',
  templateUrl: './selected-employee.component.html',
  styleUrls: ['./selected-employee.component.css']
})
export class SelectedEmployeeComponent implements OnInit {
  mId:any=[];

  constructor(private ar:ActivatedRoute, private route:Router, private cs:ClickSelectedService) { }

  ngOnInit() {
    this.ar.paramMap.subscribe((reslt)=>{
      let id1=parseInt(reslt.get('sEmployee'));
      this.mId= id1;
    })
  }

}
