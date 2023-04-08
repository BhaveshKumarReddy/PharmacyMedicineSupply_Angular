import { ValidatorFn,AbstractControl,AsyncValidatorFn } from "@angular/forms";
import { ProvideScheduleDateService } from "../Services/ProvideScheduleDate/provide-schedule-date.service";
import { formatDate } from '@angular/common';
import { map } from 'rxjs/operators';
export function PastdateValidator(): ValidatorFn {

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

  return (control: AbstractControl): { [key: string]: any } | null => {

    if (!(control && control.value)) {
      return null;
    }

    return new Date(control.value).getDay() == 6
      ? { invalidDay: 'You cannot use Sundays to enter' }
      : null;
  }
}






export function uniqueDateValidator(datescheduleService: ProvideScheduleDateService): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | any => {
    let scheduledate = formatDate((c.value), 'dd-MM-yyyy', 'en-US').toString();//c.value
    console.log(scheduledate)
    return datescheduleService.checkAvailability(scheduledate).pipe(map(data => {
      return !data ? { 'uniqueDate': false}:null;
    }
    ));
  }

}