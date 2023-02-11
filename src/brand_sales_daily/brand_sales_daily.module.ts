import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandSalesDailyService } from './brand_sales_daily.service';
import { BrandSalesDailyController } from './brand_sales_daily.controller';
import { brandSalesDailySchema, brand_sales_daily } from './schema/brand_sales_daily';

@Module({
  imports : [MongooseModule.forFeature([{name: brand_sales_daily.name, schema : brandSalesDailySchema}])],
  controllers: [BrandSalesDailyController],
  providers: [BrandSalesDailyService]
})
export class BrandSalesDailyModule {}
