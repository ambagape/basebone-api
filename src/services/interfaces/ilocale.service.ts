import { PaginateResult } from "mongoose";
import { ILocale } from "../../database/locale/locale.types";

export interface ILocaleService {
    create(item: ILocale): Promise<ILocale>    
    update(id: string, item: ILocale): Promise<ILocale> 
    updatePartially(id: string, item: ILocale): Promise<ILocale>;
    show(id: string): Promise<ILocale>;    
    getAll(page: number, pageSize: number): Promise<PaginateResult<ILocale>> 
    delete(id: string): void;
}