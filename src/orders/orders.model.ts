import * as mongoose from 'mongoose';
export const OrdersSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
        default: 0,
        auto: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    order_date: {
        type: Date,
        default: Date.now()
    }
});

export interface Order extends mongoose.Document {
    number: number;
    user_id: string;
    product_id: string;
    order_date: Date;
}
