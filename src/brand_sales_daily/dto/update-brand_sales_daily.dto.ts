import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandSalesDailyDto } from './create-brand_sales_daily.dto';

export class UpdateBrandSalesDailyDto extends PartialType(CreateBrandSalesDailyDto) {}
