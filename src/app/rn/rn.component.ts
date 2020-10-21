import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rn',
  templateUrl: './rn.component.html',
  styleUrls: ['./rn.component.css']
})
export class RNComponent implements OnInit {

  constructor(private router:Router, private aRoute:ActivatedRoute) { }

  public reData:any=[{id:1,name:"Raj"}, {id:2,name:"Raju"}]

  onSelectLists(reData){
    this.router.navigate(['/rn', reData.id]);
  }

  ngOnInit() {
  }

}
