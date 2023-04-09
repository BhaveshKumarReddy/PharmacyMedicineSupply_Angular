import { Pipe, PipeTransform } from "@angular/core";
import { RepresentativeSchedule } from "../../Models/RepresentativeSchedule";

@Pipe({
    name:'FilterByNamesLib'
})
export class FilterByNamesLib implements PipeTransform{
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