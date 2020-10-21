import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { dmnErr } from './server-forms/manual-validations';

@Component({
  selector: 'app-form-biluder12',
  templateUrl: './form-biluder12.component.html',
  styleUrls: ['./form-biluder12.component.css']
})
export class FormBiluder12Component implements OnInit {
    empFormss:FormGroup;
  constructor(private fb:FormBuilder) { }
    lengths:any='';

    onFileHandle1(event){
      console.log(event.target.files);
    
    }
    onFileHandle2(eve){
      console.log(eve);
    }

    onFileHandle3(eve:FileList){
      console.log(eve);
    }

    onFileHandle4(eve:FileList){
      console.log(eve);
    }
      
    
    onFileHandle5(eve:FileList){
      console.log(eve.item(0).type);
    }

    
      
    onFileHandle6(event:FileList){
      console.log(event);
    }
      
    
    typedd:any=[];

    onFileHandle7(event:FileList){

      let json:any={'fileName':"", 'fileType':"", "fileSize":"","fileModifiedDate":"" };

  for(var i=0; i<event.length; i++)
  {
        json.fileName=event[i].name;
        json.fileType=event[i].type; 
        json.fileSize=event[i].size;
        json.fileModifiedDate=event[i].lastModified;
  }
  console.log("Data is " + json);
  

  this.typedd.push(json);

      console.log ('Name: ' +  + "\n" + 
                 'Type: ' + json.fileType + "\n" +
                 'Last-Modified-Date: ' + json.fileModifiedDate + "\n" +
                 'Size: ' + Math.round(json.fileSize / 1024) + " KB");

    }
      
        
  ngOnInit() {

    this.empFormss = new FormGroup({
      fullName: new FormControl('RCB', [Validators.required ]),
      id:       new FormControl('RCB', [Validators.required])
    })

    this.empFormss.get('fullName').valueChanges.subscribe((res)=>{
      this.lengths = res.length;
      console.log(JSON.stringify(res));
      

    })
  }
  loadKeyValuePairs(empFormss:FormGroup){
    // console.log(Object.keys(kvp.controls));
    Object.keys(empFormss.controls).forEach((vals)=>{
      let actrl=this.empFormss.get(vals).value;
      if(actrl instanceof FormGroup){
        this.loadKeyValuePairs(actrl)
      }
      else{
        
        console.log("Key is " + vals + "  Value is : " + actrl);

      }

      

    })
  }
    
loadData(){
    this.loadKeyValuePairs(this.empFormss)
  }
  get counterId(){
    return this.empFormss.get('id');
  }

  
  onSubmit(val:any){
    alert(val.fullName + val.id);
  console.log(this.empFormss.get('id').touched);
  
  }

}
