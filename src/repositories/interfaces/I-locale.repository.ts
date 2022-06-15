import { ILocale } from "../../database/locale/locale.types";
import IRead from "./read";
import IWrite from "./write";

export interface ILocaleRepository extends IRead<ILocale>, IWrite<ILocale>{

}