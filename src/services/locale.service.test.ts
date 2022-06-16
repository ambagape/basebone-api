import { PaginateModel, Types } from "mongoose";
import { ILocale } from '../models/locale/locale.types';
import { LocaleRepository } from "../repositories/locale.repository";
import { ILocaleService } from "./interfaces/ilocale.service";
import { LocaleService } from "./locale.service";

describe('create test', () => {
  let model: jasmine.SpyObj<PaginateModel<ILocale>>;
  let service: ILocaleService;

  const locale: ILocale = {
    _id: new Types.ObjectId,
    languageIso: '',
    title: '',
    seoTitle: '',
    summary: '',
    seoSummary: '',
    description: '',
    seoDescription: '',
    specifySeoValues: false
  };

  beforeEach(() => {
    model = jasmine.createSpyObj('PaginateModel<ILocale>', ['create', 'paginate', 'findByIdAndUpdate', 'deleteOne', 'findById']);
    const repo = new LocaleRepository(model);
    service = new LocaleService(repo);
  });


  it('should create locale', async () => {
    model.create.and.returnValue(locale);
    const result = await service.create(locale);
    expect(result).toEqual(locale)
  })

  it('should delete locale', async () => {
    const id = 'ererer';
    model.deleteOne.and.returnValue(locale);
    await service.delete(id);
    expect(model.deleteOne.wasCalled).toBeTrue();
  })

  it('should updates locale', async () => {
    model.findByIdAndUpdate.and.returnValue(locale);
    const result = await service.update('id', locale);
    expect(result).toEqual(locale)
  })

  it('should get the categories', async () => {
    const options = {
      page: 1,
      limit: 10,
      collation: {
        locale: 'en',
      },
    };
    const arr = [locale, locale, locale];
    model.paginate.withArgs({}, options).and.returnValue(arr);
    await service.getAll(options.page, options.limit);
    expect(model.paginate.wasCalled).toBeTrue();
  });


})