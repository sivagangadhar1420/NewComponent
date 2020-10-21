import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickSelectedService {
  color:any="red";
  
  
  httpOptions={
    headers:new HttpHeaders({
    'content-type':'application/json'
           })
        }
  
empUrl= "http://www.omdbapi.com/?i=tt3896198&apikey=a9e6f133&s=jurassic&page=1";

constructor(private httpclient:HttpClient) { }


      }