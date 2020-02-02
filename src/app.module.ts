import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { UsersModule } from './users/users.module';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { OrdersModule } from './orders/orders.module';
import config from './configs/config';
@Module({
  imports: [
    MongooseModule.forRoot(config.url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),

    MulterModule.register({
      dest: './files',
    }),
    OrdersModule,
    ProductsModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
