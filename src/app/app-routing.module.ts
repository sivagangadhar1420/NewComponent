import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PraticeRoutingComponent } from './employee-routing/employee-routing.component';
import { DepartmentComponent } from './res-employee/depart.component';
import { FileNotFoundComponent } from './filenotfound.component';
import { HomeComponent } from './home.component';
import { FormBuildersComponent } from './form-builders/form-builders.component';
import { ResEmployeeComponent } from './res-employee/res-employee.component';
import { FormBuilder } from '@angular/forms';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { Z_FULL_FLUSH } from 'zlib';
import { DepartmentListComponent } from './department-list/department-list.component';
import { VishawasSenaComponent } from './vishawas-sena/vishawas-sena.component';
import { BsComponent } from './bs/bs.component';
import { RNComponent } from './rn/rn.component';
import { RN1Component } from './rn1/rn1.component';
import { CNComponent } from './cn/cn.component';
import { CN1Component } from './cn1/cn1.component';
import { ServerFormsComponent } from './server-forms/server-forms.component';
import { PipesFolderComponent } from './pipes-folder/pipes-folder.component';
import { ClickEmployeesComponent } from './click-employees/click-employees.component';
import { SelectedEmployeeComponent } from './selected-employee/selected-employee.component';
import { combineAll } from 'rxjs/operators';
import { FormBiluder12Component } from './form-biluder12.component';
import { PopUpComponent } from './pop-up.component';

// import { PraticeRoutingComponent } from './employee-routing/employee-routing.component';

const routes: Routes = [


  // {path:"", redirectTo: "home" , pathMatch:"full"},
  // {path:'home',component:HomeComponent},
  

  // {path:'emp',component:PraticeRoutingComponent},
  // {path:'emp/:empId/:deptId',component:PraticeRoutingComponent},
  

  // {path:'dept', component:DepartmentComponent},
  // {path:'dept/:DeptID', component:DepartmentComponent},

  // // Empty Component
  // // {path:"", redirectTo:'', pathMatch:'full'},

  // // FileNotFound component
  // {path:"**", component:FileNotFoundComponent},


  
  {path:'home', component:HomeComponent},
  
  {path:'',component:HomeComponent,
  children:
  [
    {path:'emp',component:PraticeRoutingComponent},
    {path:'emp/:empId/:deptId',component:PraticeRoutingComponent},
    {path:'dept', component:DepartmentComponent},
    {path:'dept/:DeptID', component:DepartmentComponent},
    {path:'fb', component:FormBuildersComponent},
    {path:'fb123', component:FormBiluder12Component},
    {path:'sf', component:ServerFormsComponent},
    {path:'res', component:ResEmployeeComponent},
    {path:'pd', component:PersonalDetailsComponent},
    {path:'pf', component:PipesFolderComponent},
    
    {path:'bs', component:BsComponent,
    
    children:[{path:'cn', component:CNComponent},
              {path:'cn1', component:CN1Component}
          ]},
          //  {path:'pd/:id ', component:DepartmentListComponent},

    {path:'pd/:vs', component:VishawasSenaComponent,
         children:[{path:'cn', component:CNComponent},{path:'cn1', component:CN1Component}]},
    // {path:'vs', component:VishawasSenaComponent},
    {path:'rn', component:RNComponent},
    {path:'rn/:ind', component:RN1Component}
 
      ]
    },
    {path:'cEmployee', component:ClickEmployeesComponent},
    {path:'cEmployee/:sEmployee', component:SelectedEmployeeComponent},
    {path:'popup', component:PopUpComponent},
    
// FileNotFound component
  {path:"**", component:FileNotFoundComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
  
export class AppRoutingModule { 
  constructor(private route:Router){ }
}

export const routingComponents=[HomeComponent,PraticeRoutingComponent, 
  DepartmentComponent, FormBuildersComponent,ResEmployeeComponent, 
  PersonalDetailsComponent, DepartmentListComponent, VishawasSenaComponent]
  
  // export const materialComponents = []
