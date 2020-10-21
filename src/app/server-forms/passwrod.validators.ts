import { AbstractControl } from '@angular/forms';

export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if (password.pristine || confirmPassword.pristine) {
    return null;
}
return password && confirmPassword && password.value !== confirmPassword.value ? { 'misMatch': true } : null;
}


// export function emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
//   const password1 = control.get('fEmail');
//   const confirmPassword2 = control.get('cEmail');
//   if (password1.pristine || confirmPassword2.pristine) {
//     return null;
// }
// return password1 && confirmPassword2 && password1.value !== confirmPassword2.value ? { 'misMatch1': true } : null;
// }