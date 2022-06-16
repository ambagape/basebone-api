import { ICategory } from '../models/categories/category.types';
import { CategoryRepository } from '../repositories/category.repository';
import { CategoryService } from './category.service';
import mongoose, { PaginateModel, Types } from "mongoose";
import { ICategoryService } from './interfaces/icategory.service';
import { IMedia } from '../models/media/media.types';
import { ILocale } from '../models/locale/locale.types';
import { ISetting } from '../models/setting/setting.types';
import { ILocks } from '../models/locks/lock.types';

describe('create test', () => {
  let model: jasmine.SpyObj<PaginateModel<ICategory>>;
  let service: ICategoryService;

  const media: IMedia = {};
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

  const setting: ISetting = {
    isPremium: false,
    excludedDomains: [],
    excludedCountriesIso: [],
    ageRating: ''
  };

  const lock: ILocks = {
    isLockedForEditing: '',
    currentEditor: '',
    isLockedForModerationProcess: '',
    isLockedForBackendProcess: '',
    currentBackendProcess: ''
  }

  const cat: ICategory = {
    _id: new Types.ObjectId,
    slug: '',
    media: media,
    locale: new Types.Array(locale),
    settings: setting,
    locks: lock,
    isIndexed: false
  };

  beforeEach(() => {
    model = jasmine.createSpyObj('PaginateModel<ICategory>', ['create', 'paginate', 'findByIdAndUpdate', 'deleteOne', 'findById']);
    const repo = new CategoryRepository(model);
    service = new CategoryService(repo);
  });


  it('should create category', async () => {
    model.create.and.returnValue(cat);
    const result = await service.create(cat);
    expect(result).toEqual(cat)
  })

  it('should delete category', async () => {
    const id = 'ererer';
    model.deleteOne.and.returnValue(cat);
    await service.delete(id);
    expect(model.deleteOne.wasCalled).toBeTrue();
  })

  it('should updates category', async () => {
    model.findByIdAndUpdate.and.returnValue(cat);
    const result = await service.update('id', cat);
    expect(result).toEqual(cat)
  })

  it('should get the categories', async () => {
    const options = {
      page: 1,
      limit: 10,
      collation: {
        locale: 'en',
      },
    };
    const arr = [cat, cat, cat];
    model.paginate.withArgs({}, options).and.returnValue(arr);
    await service.getAll(options.page, options.limit);
    expect(model.paginate.wasCalled).toBeTrue();
  });


})