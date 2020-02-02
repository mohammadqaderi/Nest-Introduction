import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

export interface User extends mongoose.Document {
  id: string;
  name: string;
  age: number;
  email: string;
  phone: number;

}