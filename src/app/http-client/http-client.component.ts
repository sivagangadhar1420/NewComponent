import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { HttpEmployee } from '../http-employee';
import { HttpEmployeeService } from '../http-employee.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-http-client',
  providers:[HttpEmployeeService],
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  
  httpEmployee:HttpEmployee=new HttpEmployee();
  public stroingData:any;
  

  constructor(private http:HttpEmployeeService) {}
 

// empservices:EmpServices;
@Input() fname:string;

moviesData:any= [];
public movies:any;
public error:string;
hemp:HttpEmployee[]= [];

ngOnInit() {
  this.getDetails()
  this.getDDetails()
  // this.addEmployeeToWeb();
}
  



getDetails(){
 this.http.getEmpoyees().subscribe((res)=>{
  console.log("Data  - - - - - - >", res);
  this.moviesData = res;
  this.movies = this.moviesData.Search;
  // this.movies = this.moviesData.data;
  ((err)=> this.error = err);
  
  // console.log(this.error);
  
})
}
moviename:any
movieyear:any;
id:any;
index:any;



addMovies(){
  this.moviename="",
  this.movieyear = "",
  this.id="";

}
onSubmit(){
  this.movies.push({Title:this.moviename,Year:this.movieyear,imdbID:this.id})
}

deleteMovies(id:number){
  this.movies.splice(id,1);
}

editMovies(moviename,movieyear,movieid,index){
  this.moviename= moviename;
  this.movieyear = movieyear; 
  this.id  = movieid;
  this.index = index;
  
}

updateMovies(){
  for(let i=0;i< this.movies.length;i++){
    if(i=== this.index){
      this.movies[i].Title = this.moviename
      this.movies[i].Year = this.movieyear
      this.movies[i].imdbID = this.id
    }
 }
}


sp:any=[];
public fres:any;

getDDetails(){
  this.http.getStudentDetails().subscribe((res)=>{
    console.log(res);
    this.sp = res;
    this.fres = this.sp.data;
    })
 }


public Title:any;
public Year:any;
public ID:any;

addEmployees(){
  this.movies.push({Title:this.Title,Year:this.Year,imdbID:this.ID});
  // window.location.reload()
}
  
}


// addEmployeeToWeb(){
  // var req=this.http.addEmployees(this.hemp);
//       req.subscribe(emp =>
//     this.moviesData(emp), 
//     err=>this.error = err
//   )
// } 
// updateEmployeeToWeb(){
//   var req=this.http.updateEmployess(this.hemp);
//   req.subscribe(emp =>
// this.moviesData(emp), 
// err=>this.error = err
// )


// }


  

  

  

