import { Controller, Get, Param, Post } from '@nestjs/common';
import { Order } from './orders.model';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getAllOrders(): Promise<Order[]> {
    return this.ordersService.findAll();
  }
  @Get(':id')
  getOrder(@Param() param): Promise<Order> {
    return this.ordersService.findOne(param.id);
  }
  @Post(':product_id/:user_id')
  makeOrder(@Param() param): Promise<Order> {
    return this.ordersService.makeOrder(param.product_id, param.user_id);
  }
}
