import { Pipe, PipeTransform } from "@angular/core";
import { DatesSchedule } from "src/Models/DatesSchedule";

@Pipe({
    name:'FilterByStatus'
})
export class FilterByStatus implements PipeTransform{
    transform(schedule:DatesSchedule[], status:string):DatesSchedule[] {
        var transformed_array;
        if(status == "Supplied"){
            transformed_array = schedule.filter(x =>  x.supplied == true);
        }
        else if(status == "Pending"){
            transformed_array = schedule.filter(x =>  x.supplied == false);
        }
        else{
            transformed_array = schedule;
        }
        console.log(transformed_array);
        return transformed_array;
    }
}