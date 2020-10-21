import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';
import { EmployesComponent } from './employes/employes.component';
import { ResEmployeeComponent } from './res-employee/res-employee.component';
import {PersonDetailsComponent} from './PersonDetails.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { InpComponent } from './inp/inp.component';
import { InpOtpComponent } from './inp-otp/inp-otp.component';
import { SecondSizerComponent } from './second-sizer/second-sizer.component';
import {ThirdSizerComponent} from './ThirdSizer.component';
import{SizerComponent} from './sizer.component';
import { BsComponent } from './bs/bs.component';
import {EmpFormComponent} from './emp.form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ServerFormsComponent } from './server-forms/server-forms.component';
import { FormBuildersComponent } from './form-builders/form-builders.component';
import { PipesFolderComponent } from './pipes-folder/pipes-folder.component';
import { AngResponsiveComponent } from './ang-responsive/ang-responsive.component';
import {AgePipe} from '../../age.pipe';
import{EmpPipe} from './emp-pipe';
import {EmpServices} from './emp.service';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ImPure} from './impure.pipe';
import {ShowAlert} from './server-forms/custom.directive';
import {Student, StudentChild, StudentAddress, StudentSubjects} from './studentdi';
import { CheckingEmpComponent } from './checking-emp/checking-emp.component';
import { LoggerService } from './checking-emp/loggerservice';
import { HttpClientComponent } from './http-client/http-client.component';
import { HttpAuthentication } from './bs/httpInterceptors';
import { DepartmentComponent } from './res-employee/depart.component';
import { FileNotFoundComponent } from './filenotfound.component';
import { PraticeRoutingComponent } from './employee-routing/employee-routing.component';
import { HomeComponent } from './home.component';
import { IfSTYlesComponent } from './if-styles/if-styles.component';
import { PersonalService } from './personal.service';
import { DepartmentListComponent } from './department-list/department-list.component';
import { VishawasSenaComponent } from './vishawas-sena/vishawas-sena.component';
import { RNComponent } from './rn/rn.component';
import { RN1Component } from './rn1/rn1.component';
import { CN1Component } from './cn1/cn1.component';
import { CNComponent } from './cn/cn.component';
import { genderPipe } from './form-builders/genderPipe';
import { RadioFilesComponent } from './form-builders/radio-files/radio-files.component';
import { ClickEmployeesComponent } from './click-employees/click-employees.component';
import { SelectedEmployeeComponent } from './selected-employee/selected-employee.component';
import { FormBiluder12Component } from './form-biluder12.component';
import { PopUpComponent } from './pop-up.component';
import { MatButtonModule } from '@angular/material';
import { MyInputMyOutPutComponent } from './my-input-my-out-put/my-input-my-out-put.component';


@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    AlertSuccessComponent,
    AlertDangerComponent,
    EmployesComponent,
    // ResEmployeeComponent,
    PersonDetailsComponent,
    PersonalDetailsComponent,
    InpComponent,
    InpOtpComponent,
    SecondSizerComponent,
    ThirdSizerComponent,
    SizerComponent,
    BsComponent,
    EmpFormComponent,
    ServerFormsComponent,
    // FormBuildersComponent,
    PipesFolderComponent,
    AngResponsiveComponent,
    AgePipe,
    EmpPipe,
    genderPipe,
    ImPure,
    ShowAlert,
    CheckingEmpComponent,
    HttpClientComponent,
    // PraticeRoutingComponent,
    // DepartmentComponent,
    FileNotFoundComponent,
    // HomeComponent,
    IfSTYlesComponent, 
    routingComponents, 
    DepartmentListComponent,VishawasSenaComponent, RNComponent, RN1Component, 
    CN1Component, CNComponent, RadioFilesComponent, ClickEmployeesComponent, 
    SelectedEmployeeComponent, FormBiluder12Component, PopUpComponent, MyInputMyOutPutComponent
  ],
  entryComponents : [AlertSuccessComponent, AlertDangerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
    
    
  ],
  providers: [EmpServices, {provide:Student,useClass:StudentChild}, StudentSubjects, StudentAddress, LoggerService, 
            // {provide:HTTP_INTERCEPTORS, useClass:HttpAuthentication, multi:true},
             PersonalService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
