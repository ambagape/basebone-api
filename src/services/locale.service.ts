import { PaginateResult } from "mongoose";
import { NotFoundError } from "./errors/not-found.error";
import { injectable, inject } from "inversify";
import { TYPES } from "../di/types";
import { LocaleRepository } from "../repositories/locale.repository";
import { ILocaleService } from "./interfaces/ilocale.service";
import { ILocale } from "../models/locale/locale.types";


@injectable()
export class LocaleService implements ILocaleService {

    constructor(@inject(TYPES.LocaleRepositoryDefault) private repository: LocaleRepository) {

    }

    async create(item: ILocale): Promise<ILocale> {
        const created = await this.repository.create(item);
        return created;
    }

    async update(id: string, item: ILocale): Promise<ILocale> {
        const result = await this.repository.update(id, item, { overwrite: true, new: true });
        if (!result) {
            throw new NotFoundError("Could not update locale");
        }
        return result as unknown as ILocale;
    }

    async updatePartially(id: string, item: any): Promise<ILocale> {
        const result = await this.repository.update(id, item);
        if (!result) {
            throw new NotFoundError("Could not update locale");
        }
        return result as unknown as ILocale;
    }

    async show(id: string): Promise<ILocale> {
        const result = await this.repository.findById(id);
        if (!result)
            throw new NotFoundError('locale does not exist');
        return result;
    }
    async getAll(page: number, pageSize: number): Promise<PaginateResult<ILocale>> {
        const result = await this.repository.getAll(page, pageSize);
        return result;
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

}