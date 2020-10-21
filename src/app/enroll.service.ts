import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import{catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  url:any='http://localhost:3000/enroll';
  httpOptions={
    headers:new HttpHeaders({
    'content-type':'application/json'
                 })
       }
// fUrl= "http://dummy.restapiexample.com/api/v1/employees"; 



  constructor(private http:HttpClient) { }

  getBsEmployees(emps){
    return this.http.post<any>( this.url, emps,this.httpOptions)
    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }

}