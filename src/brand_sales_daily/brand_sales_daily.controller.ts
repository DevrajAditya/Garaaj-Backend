import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrandSalesDailyService } from './brand_sales_daily.service';
import { CreateBrandSalesDailyDto } from './dto/create-brand_sales_daily.dto';
import { UpdateBrandSalesDailyDto } from './dto/update-brand_sales_daily.dto';

@Controller('brand-sales-daily')
export class BrandSalesDailyController {
  constructor(private readonly brandSalesDailyService: BrandSalesDailyService) {}

  @Post()
  create(@Body() createBrandSalesDailyDto: CreateBrandSalesDailyDto) {
    return this.brandSalesDailyService.create(createBrandSalesDailyDto);
  }

  @Get()
  findAll() {
    return this.brandSalesDailyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandSalesDailyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrandSalesDailyDto: UpdateBrandSalesDailyDto) {
    return this.brandSalesDailyService.update(id, updateBrandSalesDailyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandSalesDailyService.remove(id);
  }
}
