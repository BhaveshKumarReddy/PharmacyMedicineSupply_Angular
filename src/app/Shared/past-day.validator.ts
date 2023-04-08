import { ValidatorFn,AbstractControl } from "@angular/forms";

export function dateValidator(): ValidatorFn {

    return (control: AbstractControl): {[key: string]: any} | null => {
      const today = new Date().getTime();

      if(!(control && control.value)) {
        return null;
      }
  
      return new Date(control.value).getTime() < today 
        ? {invalidDate: 'You cannot use past dates' } 
        : null;
    }
  }

  export function DaydateValidator(): ValidatorFn {

    return (control: AbstractControl): {[key: string]: any} | null => {
      
      if(!(control && control.value)) {
        return null;
      }
      return new Date(control.value).getDay()==0
        ? {invalidDay: 'You cannot use Sundays to enter' } 
        : null;
    }
  }