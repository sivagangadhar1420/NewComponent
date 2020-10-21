import { Injectable } from '@angular/core';
import {HttpEmployee} from './http-employee';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpEmployeeService {

  httpOptions={
           headers:new HttpHeaders({
           'content-type':'application/json'
                        })
              }
  // fUrl= "http://dummy.restapiexample.com/api/v1/employees"; 

    empUrl= "http://www.omdbapi.com/?i=tt3896198&apikey=a9e6f133&s=jurassic&page=1";

    
  constructor(private http:HttpClient) { }

  // Normal
  getStudentDetails(){
    return this.http.get(this.empUrl);
  }

  // Asynchrous
    getEmpoyees():Observable<HttpEmployee[]>{
     return this.http.get<HttpEmployee[]>(this.empUrl).pipe(
       retry(3),
       catchError(this.handleError));
      }


          

  // addEmployees(empData:HttpEmployee):Observable<HttpEmployee>{
  //   return this.http.post<HttpEmployee>(this.empUrl, empData, this.httpOptions)
  //   .pipe(
  //     retry(3), 
  //     catchError(this.handleError)
  //     );
  //   }
  //   updateEmployess(empdtata:HttpEmployee):Observable<HttpEmployee>{
  //     return this.http.put<HttpEmployee>(this.empUrl, empdtata, this.httpOptions)
  //     .pipe(
  //       retry(3),
  //       catchError(this.handleError)
  //     );
  //   }
      
    handleError(err:HttpErrorResponse){
    return throwError("SomeThing went wrong plz try again later... it will work.... :))")
    }

 }
