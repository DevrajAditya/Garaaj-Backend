import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type brandSalesDailyDocument = brand_sales_daily & Document;

@Schema({timestamps : true})
export class brand_sales_daily{

        @Prop({ required: true })
        date : Date;
       
        @Prop({ required: true })
        brand : string;
       
        @Prop({ required: true }) 
        transectionType : string[];
       
        @Prop({ required: true })
        totalOrder : number;
       
        @Prop({ required: true })
        totalOrderValue : number;
       
        @Prop({ required: true })
        grossMargin : number;

        @Prop()
        timestamps : true;


}

export const brandSalesDailySchema = SchemaFactory.createForClass(brand_sales_daily);