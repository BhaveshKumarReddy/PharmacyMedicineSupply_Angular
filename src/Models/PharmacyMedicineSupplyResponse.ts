import { PharmacyMedicineSupply } from "./PharmacyMedicineSupply"

export interface PharmacyMedicineSuppliesResponse{
    pharmacyMedSupplies: PharmacyMedicineSupply[],
    pages:number,
    currentPage:number
}