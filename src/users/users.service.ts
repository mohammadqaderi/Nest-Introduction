import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.model';
import { Model } from 'mongoose';
import { CreateUserDto } from './create-user-dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    try {
      return this.userModel.find().exec();
    } catch (err) {
      throw new Error(err);
    }
  }
  async findOne(id: string): Promise<User> {
    try {
      return await this.userModel.findOne({ _id: id });
    } catch (err) {
      throw new Error(err);
    }
  }
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
     const createdUser = new this.userModel(createUserDto);
     return await createdUser.save();
    } catch (err) {
      throw new Error(err);
    }
  }
}
