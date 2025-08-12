import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Order } from "./order.model";
import { Product } from "./product.model";
import { User } from "./user.model";

@Table

export class Review extends Model<Review>{
    @Column({
        allowNull : false,
        type : DataType.INTEGER,
        validate : {
            min : 1,
            max : 5
        }
    })
    rating : number;

    @Column({
        allowNull : false,
        type : DataType.TEXT
    })
    comment : string;

    @ForeignKey(() => User)
    @Column({
        allowNull : false,
        type : DataType.INTEGER
    })
    userId : number;

    @BelongsTo(() => User)
    user : User;

    @ForeignKey(() => Product)
    @Column({
        allowNull : false,
        type : DataType.INTEGER
    })
    productId : number;

    @BelongsTo(() => Product)
    product : Product;

    @ForeignKey(() => Order)
    @Column({
        allowNull : false,
        type : DataType.INTEGER
    })
    orderId : number;

    @BelongsTo(() => Order)
    order : Order
}