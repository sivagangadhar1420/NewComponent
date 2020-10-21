import { AbstractControl, ValidatorFn, Validator, NgControl } from '@angular/forms';


// Should Not matches with Existing String  
export function cName(controls:RegExp):ValidatorFn{
return(control:AbstractControl): {[key:string]:any} | null =>{
    let forbidden=controls.test(control.value);
    return forbidden ? {'cName':{value:control.value}} : null;
     };
  }
 
// Should Matches with Existing Email
export function dmnErr(domainName:string){
    return (control:AbstractControl):{[key:string]:any } | null =>{
    let eml=control.value;
    if(eml === "" || eml.toLowerCase() === domainName.toLowerCase()){
        return null; 
    }
    else{
        return {'dmnErr':true};
        }
      }
}

                
// Should Matches with Existing Email

//     export function dmnErr(forbiddenName:RegExp):ValidatorFn{
//       return (control:AbstractControl):{[key:string]:any} | null =>{
//             let eml=control.get('id').value;
//          if(eml === 'pl123@gmail.com'){
//              return null;
//          }
//          else{
//              return {'dmnErr' : true};
//     }
// }
 
    // }