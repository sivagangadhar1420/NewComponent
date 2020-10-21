import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-danger',
  templateUrl: './alert-danger.component.html',
  styleUrls: ['./alert-danger.component.css']
})
export class AlertDangerComponent implements OnInit {
  name:string="Brad";

  constructor() { 
    this.changeName('BradJohn');
  }

  ngOnInit() {
  }
  changeName(nm:string){
    this.name= nm;
  }

}

// this.empFormss = this.fba.group({
  //     fNamed :['',  [Validators.required, Validators.pattern('[a-zA-Z0-9]{6,20}'), Validators.maxLength(20)]],
  //     // lName :['',  [Validators.required, Validators.pattern('[a-zA-Z0-9]{6,20}'), Validators.maxLength(20)]],
  //     eml :['',  [Validators.required, Validators.pattern('(^[a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{3,10}).([a-z]{2,10})?$'), Validators.maxLength(20)]],
  //    pwd:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{6,20}')]],
  //     numb:['', [ Validators.required,Validators.pattern('[6-9]{10}'), Validators.maxLength(10)]],
  //     type : ['Male'],
  //     cd: ['+91-India']
  //    });
  // }
     
