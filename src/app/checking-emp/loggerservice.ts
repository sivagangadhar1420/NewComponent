import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService{
     logArray:any[]=[];

       logFunn1(msg:string){
        this.logArray.push(msg);
        console.log("Msg is " , msg);
        
    }
    
        printLog(){
        i:Number;
        for(var i=0; i< this.logArray.length; i++ ){
            console.log( "Result is "+ this.logArray[i]);
            
        }
    }
}
