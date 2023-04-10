import { Pipe, PipeTransform } from "@angular/core";
import { PharmacyMedicineSupply } from "src/Models/PharmacyMedicineSupply";

@Pipe({
    name:'FilterByPharmacy'
})
export class FilterByPharmacy implements PipeTransform{
    transform(supply: PharmacyMedicineSupply[], name:string): PharmacyMedicineSupply[] {
        var transformed_array = supply.filter(x => x.pharmacyName.startsWith(name));
        return transformed_array;
    }
}