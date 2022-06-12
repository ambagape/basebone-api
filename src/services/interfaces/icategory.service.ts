import { ICategory } from "../../database/categories/category.types";

export interface ICategoryService {
    create(item: ICategory): Promise<ICategory>
    put(id: string, item: ICategory): Promise<ICategory>;
    patch(id: string, item: ICategory): Promise<ICategory>;
    show(id: string): Promise<ICategory>;
    getAll(page: number, pageSize: number): Promise<Array<ICategory>>;
    delete(id: string): void;
}