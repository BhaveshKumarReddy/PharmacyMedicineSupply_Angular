import { MedicineStock } from "./MedicineStock"

export interface MedicineStockResponse{
    medicineStocks: MedicineStock[],
    pages:number,
    currentPage:number
}