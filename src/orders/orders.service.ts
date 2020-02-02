import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './orders.model';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>
  ) {}

  async findAll(): Promise<Order[]> {
    const orders = await this.orderModel.find().exec();
    return orders;
  }
  async findOne(orderId: string): Promise<Order> {
    const order = await this.orderModel.findById(orderId).exec();
    return order;
  }
  async makeOrder(product_id: string, user_id: string): Promise<Order> {
    const order = new this.orderModel({
      product_id,
      user_id,
    });
    const result = await order.save();
    return result;
  }

}
