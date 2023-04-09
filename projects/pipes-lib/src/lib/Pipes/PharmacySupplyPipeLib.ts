import { Pipe, PipeTransform } from "@angular/core";
import { PharmacyMedicineSupply } from "../../Models/PharmacyMedicineSupply";

@Pipe({
    name:'FilterByPharmacyLib'
})
export class FilterByPharmacyLib implements PipeTransform{
    transform(supply: PharmacyMedicineSupply[], name:string): PharmacyMedicineSupply[] {
        var transformed_array = supply.filter(x => x.pharmacyName.startsWith(name));
        console.log(transformed_array);
        return transformed_array;
    }
}