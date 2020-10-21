import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-radio-files',
  templateUrl: './radio-files.component.html',
  styleUrls: ['./radio-files.component.css']
})
export class RadioFilesComponent implements OnInit {
  @Input()all:any;
  @Input()male:any;
  @Input()female:any;
  @Output()radioFileoutPut:EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }
  
  radioFileInputValue = 'All';
   
  radioFileMethod(){
    this.radioFileoutPut.emit(this.radioFileInputValue);
  console.log(this.radioFileInputValue);
  }

  ngOnInit() {
    this.radioFileMethod();

  }

}
