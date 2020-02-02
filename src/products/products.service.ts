import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as fs from 'fs';
import { Product } from './product';
import { throwError, from } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(title: string, description: string, price: number, picture: string) {
    try {
      const newProduct = new this.productModel({
        title,
        description,
        price,
        picture,
      });
      const result = await newProduct.save();
      return result.id as string;
    } catch (error) {
      throwError(error);
    }
  }

  async getProducts() {
    const products = await this.productModel.find().exec();
    return products.map(prod => ({
      id: prod.id,
      title: prod.title,
      description: prod.description,
      price: prod.price,
      picture: prod.picture,
    }));
  }

  async getSingleProduct(productId: string) {
    const product = await this.findProduct(productId);
    return product;
  }

  async updateProduct(
    productId: string,
    title: string,
    desc: string,
    price: number,
    picture: string,
  ) {
    const updatedProduct = await this.findProduct(productId);
    if (title) {
      updatedProduct.title = title;
    }
    if (desc) {
      updatedProduct.description = desc;
    }
    if (price) {
      updatedProduct.price = price;
    }
    if (picture) {
      updatedProduct.picture = picture;
    }
    updatedProduct.save();
  }

  async deleteProduct(prodId: string) {
    const product = await this.findProduct(prodId);
    if (!product) {
      return 'Product not found';
    }
    fs.unlink(product.picture, err => {
      if (err) {
        throw err;
      }
    });
    await this.productModel.findByIdAndRemove(prodId);
  }

  private async findProduct(id: string): Promise<Product> {
    let product;
    try {
      product = await this.productModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }
}
