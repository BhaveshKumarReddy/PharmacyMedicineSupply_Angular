import { Pipe, PipeTransform } from "@angular/core";
import { DatesSchedule } from "src/Models/DatesSchedule";
import { RepresentativeSchedule } from "src/Models/RepresentativeSchedule";

@Pipe({
    name:'FilterByNames'
})
export class FilterByNames implements PipeTransform{
    transform(schedules: RepresentativeSchedule[], name:string, type:string): RepresentativeSchedule[] {
        console.log(name + "-  "+ type);
        var transformed_array;
        if(type == "Ailment"){
            transformed_array = schedules.filter(x => x.treatingAilment.startsWith(name));
        }
        else if(type == "Doctor"){
            transformed_array = schedules.filter(x =>  x.doctorName.startsWith(name));
        }
        else{
            transformed_array = schedules.filter(x =>  x.representativeName.startsWith(name));
        }
        console.log(transformed_array);
        return transformed_array;
    }
}