import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandSalesDailyModule } from './brand_sales_daily/brand_sales_daily.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".local.env"]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService : ConfigService)=> ({uri : configService.get("MONGO_URL")}),
      inject : [ConfigService]
    }),
    BrandSalesDailyModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
