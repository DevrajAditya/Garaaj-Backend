import { Injectable } from '@nestjs/common';
import { CreateBrandSalesDailyDto } from './dto/create-brand_sales_daily.dto';
import { UpdateBrandSalesDailyDto } from './dto/update-brand_sales_daily.dto';
import { InjectModel } from '@nestjs/mongoose';
import { brand_sales_daily, brandSalesDailyDocument} from './schema/brand_sales_daily'
import { Model } from 'mongoose';
import { exec } from 'child_process';

@Injectable()
export class BrandSalesDailyService {

  constructor(@InjectModel(brand_sales_daily.name) private brandSalesDailyModel : Model<brandSalesDailyDocument>){

  }

  create(createBrandSalesDailyDto: CreateBrandSalesDailyDto) : Promise<brand_sales_daily> {
    const model = new this.brandSalesDailyModel();
    model.date = new Date();
    model.brand = createBrandSalesDailyDto.brand;
    model.transectionType = createBrandSalesDailyDto.transectionType;
    model.totalOrder = createBrandSalesDailyDto.totalOrder;
    model.totalOrderValue = createBrandSalesDailyDto.totalOrderValue;
    model.grossMargin = createBrandSalesDailyDto.grossMargin;
    
    return model.save();
  }

  findAll() : Promise<brand_sales_daily[]> {
    return this.brandSalesDailyModel.find().exec();
  }

  findOne(id: string) : Promise<brand_sales_daily> {
    return this.brandSalesDailyModel.findById(id).exec();
  }

  update(id: string, updateBrandSalesDailyDto: UpdateBrandSalesDailyDto) {
    return this.brandSalesDailyModel.updateOne({_id : id}, {
        brand : updateBrandSalesDailyDto.brand,
        transectionType : updateBrandSalesDailyDto.transectionType,
        totalOrder : updateBrandSalesDailyDto.totalOrder,
        totalOrderValue : updateBrandSalesDailyDto.totalOrderValue,
        grossMargin : updateBrandSalesDailyDto.grossMargin,
    }).exec();
  }

  remove(id: string) {
    return this.brandSalesDailyModel.deleteOne({_id: id}).exec();
  }
}
