import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  @ViewChild('emp1', {static:false}) emp1:any;
  constructor(private fb:FormBuilder){}

  empFormss:FormGroup;
ngOnInit(): void {

  this.empFormss = this.fb.group({
    id:[''],
    fName:[''],
    lName:[''],
    courses:['private'],
    selectbox:['Selected'],
    fileType:[]
    
  });
}


res11:any=[];
typedd:any=[];


lm1:any="";
lm2:any=''
lm3:any=''
lm4:any=''


handleFileInput(event:FileList){
  console.log("Data is " + event.item(0).type);
  
  let json:any={
                "fileName" :event.item(0).name, 
                "fileType" :event.item(0).type,
                "fileSize" :event.item(0).size, 
         "fileModifiedDate":event.item(0).lastModified
               };
this.typedd.push(json);


//   for(var i=0; i<event.target.files.length; i++)
//   {
//         json.fileName=event.target.files[i].name;
//         json.fileType=event.target.files[i].type; 
//         json.fileSize=event.target.files[i].size;
// json.fileModifiedDate=event.target.files[i].lastModifiedDate;
//   }
//   console.log("Data is " + json);
  

//   this.typedd.push(json);

    //   console.log ('Name: ' +  + "\n" + 
    //  'Type: ' + type + "\n" +
    //  'Last-Modified-Date: ' + modifiedDate + "\n" +
    //  'Size: ' + Math.round(size / 1024) + " KB");
  }
  
onFormSubmit(vl){
  let ft={"id":vl.id, "firstName":vl.fName, "lastName":vl.lName, "courses":vl.courses, 
          "selectBox":vl.selectbox, "fileType":vl.fileType};
  this.res11.push(ft);
    this.emp1.reset();
}


id:any=""; 
fName:any= "";
lName:any="";
Gender:any=""
sel:any="";

disp:any=45;
checked:any=false;



index:any="";

}
