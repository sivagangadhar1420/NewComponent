import { Component, OnInit,  } from '@angular/core';
import { Router, ActivatedRoute,  ParamMap} from '@angular/router';

@Component({
  selector: 'app-rn1',
  templateUrl: './rn1.component.html',
  styleUrls: ['./rn1.component.css']
})
export class RN1Component implements OnInit {

  constructor(private router:Router, private aRoute:ActivatedRoute) { }
  mId:any="";

  ngOnInit() {
  this.aRoute.paramMap.subscribe((reslt)=>{
      let id1=parseInt(reslt.get('ind'));
      this.mId= id1;
  })
  }





}
