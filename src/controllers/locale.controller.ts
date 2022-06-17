import express = require("express");
import { ILocale } from "../models/locale/locale.types";
import { container } from "../di/inversify.config";
import { TYPES } from "../di/types";
import { ILocaleService } from "../services/interfaces/ilocale.service";

export class LocaleController {

    static async create(req: express.Request, res: express.Response, next: any): Promise<void> {
        try {
            const service = container.get<ILocaleService>(TYPES.LocaleServiceDefault);
            const locale: ILocale = <ILocale>req.body;
            const result = await service.create(locale);
            res.send(result);
        } catch (e) {
            next(e);
        }
    }

    static async show(req: express.Request, res: express.Response, next: any): Promise<void> {
        try {
            const service = container.get<ILocaleService>(TYPES.LocaleServiceDefault);
            const result = await service.show(req.params.id);
            res.send(result);
        } catch (e) {
            next(e);
        }
    }

    static async update(req: express.Request, res: express.Response, next: any): Promise<void> {
        try {
            const service = container.get<ILocaleService>(TYPES.LocaleServiceDefault);
            const locale: ILocale = <ILocale>req.body;
            const result = await service.update(req.params.id, locale);
            res.send(result);
        } catch (e) {
            next(e);
        }
    }

    static async updatePartially(req: express.Request, res: express.Response, next: any): Promise<void> {
        try {
            const service = container.get<ILocaleService>(TYPES.LocaleServiceDefault);
            const locale: ILocale = <ILocale>req.body;
            const result = await service.updatePartially(req.params.id, locale);
            res.send(result);
        } catch (e) {
            next(e);
        }
    }

    static async delete(req: express.Request, res: express.Response, next: any): Promise<void> {
        try {
            const service = container.get<ILocaleService>(TYPES.LocaleServiceDefault);
            await service.delete(req.params.id);
            res.status(200).send('Ok');
        } catch (e) {
            next(e);
        }
    }

    static async showAll(req: express.Request, res: express.Response, next: any): Promise<void> {
        try {
            const service = container.get<ILocaleService>(TYPES.LocaleServiceDefault);
            const page = req.query.page ? req.query.page as unknown as number : 1;
            const limit = req.query.limit ? req.query.limit as unknown as number : 20;
            const result = await service.getAll(page, limit);
            res.send(result);
        } catch (e) {
            next(e);
        }
    }
}