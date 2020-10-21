import { Injectable } from '@angular/core';
import { BluePrintEmp } from './BluePrintEmp';
import { Employee } from './employee';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {retry,catchError}from 'rxjs/operators';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  httpOptions={
    headers:new HttpHeaders({
    'content-type':'application/json'
                 })
                }


  result:BluePrintEmp[]=[];
  output:Employee[]=[];

  getData(){
    // let otp=[{startingName:"Karthick", finalName:"Kumar", gender:"Male", education:"B.Tech"},
    //          {startingName:"Karthick", finalName:"Kumar", gender:"Male", education:"B.Tech"}];
    //          return otp;
    this.result = [{startingName:"Karthick", finalName:"Kumar", gender:"Male", education:"B.Tech"}]
     return this.result   
    }

    getList(){
      // this.output = [new Employee(1,"Raj",30, 200000000,"Permenent",new Date('1-2-1997')),
      //                new Employee(1,"Raj",30, 200000000,"Permenent",new Date('1-2-1997')),
      //                new Employee(1,"Raj",30, 200000000,"Permenent",new Date('1-2-1997'))];
      // return this.output;

                                    // OR
      this.output[0]= new Employee(1,"Raj",30, 200000000,"Permenent",new Date('1-2-1997'));
      this.output[1]= new Employee(1,"Raj",30, 200000000,"Permenent",new Date('1-2-1997'));
      return this.output;
    }
      
     public url:any='/assets/employees.json';

    getJsonList():Observable<any>{
      return this.http.get(this.url).pipe(
                  catchError(this.errorHandler))
    }
    errorHandler(error:HttpErrorResponse){
      return throwError( error.message ||"Server Error");
    }
    
    constructor(private http:HttpClient) { }
    
  }
    

