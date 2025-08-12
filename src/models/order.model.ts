
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Address } from "./address.model";
import { OrderItem } from "./order-item.model";
import { Review } from "./review.model";
import { User } from "./user.model";

export enum OrderStatus{
    PENDING = "Đang chờ",
    COMFIRMED = "Đã xác nhận",
    CANCELLED = "Đã huỷ",
    PREPARING = "Đang chuẩn bị",
    READY = "Sẵn sàng",
    DELIVERED = "Đã giao hàng",
}
export enum PaymentMethod{
    CASH = 'Thanh toán khi nhận hàng',
    ONLINE = 'Thanh toán online'
}
export enum PaymentStatus{
    PENDING = 'Đang chờ thanh toán',
    REFUNDED = 'Hoàn Tiền'
}
@Table
export class Order extends Model<Order>{
    @Column({
        allowNull : false,
        unique : true,
        type : DataType.STRING
    })
    orderNumber : string

    @Column({
        allowNull : false,
        type : DataType.ENUM(...Object.values(OrderStatus))
    })
    status : OrderStatus

    @Column({
        allowNull : false,
        type : DataType.ENUM(...Object.values(PaymentMethod))
    })
    paymentMethod : PaymentMethod

    @Column({
        allowNull : false,
        type : DataType.ENUM(...Object.values(PaymentStatus))
    })
    paymentStatus : PaymentStatus

    @Column({
        allowNull : false,
        type : DataType.INTEGER
    })
    subTotal : number

    @Column({
        defaultValue : 0,
        type : DataType.INTEGER
    })
    deliveryFee : number

    @Column({
        defaultValue : 0,
        type : DataType.INTEGER
    })
    discount : number

    @Column({
        allowNull : false,
        type : DataType.INTEGER
    })
    total : number

     @Column({
        type : DataType.TEXT
    })
    notes : string

    @ForeignKey(() => User)
    @Column({
        allowNull : false,
        type : DataType.INTEGER
    })
    userId : number

    @BelongsTo(() => User)
    user: User

     @ForeignKey(() => Address)
    @Column({
        allowNull : false,
        type : DataType.INTEGER
    })
    addressId : number

    @BelongsTo(() => Address)
    address: Address

    @HasMany(() => OrderItem)
    orderItems: OrderItem[]

    @HasMany(() => Review)
    reviews: Review[]
}