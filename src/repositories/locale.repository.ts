

import RepositoryBase from "./repository.base";
import { inject, injectable } from "inversify";
import { PaginateModel } from "mongoose";
import { TYPES } from "../di/types";
import { ILocale } from "../database/locale/locale.types";
import { ILocaleRepository } from "./interfaces/I-locale.repository";

@injectable()
export class LocaleRepository extends RepositoryBase<ILocale>  implements ILocaleRepository{

    constructor(@inject(TYPES.PaginatedLocaleModel) model: PaginateModel<ILocale>) {
        super(model);        
    }
}