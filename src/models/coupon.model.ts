import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { UserCoupon } from "./user-coupon.model";

export enum CouponType {
    PERCENTAGE = 'PERCENTAGE',
    FIXED = 'FIXED',
}

@Table
export class Coupon extends Model<Coupon> {
  @Column({
    allowNull: false,
    type: DataType.STRING,
    unique: true
  })
  code : string

  @Column({
    allowNull : false,
    type : DataType.STRING
  })
  name : string

  @Column({
    allowNull : true,
    type : DataType.TEXT,
  })
  description : string

  @Column({
    type : DataType.ENUM(CouponType.PERCENTAGE, CouponType.FIXED),
    allowNull : false,
  })
  type : CouponType

  @Column({
    allowNull : false,
    type : DataType.INTEGER
  })
  value : number

  @Column({
    defaultValue : 0,
    type : DataType.INTEGER
  })
  minOrderAmount : number

  @Column({
    defaultValue : 1,
    type : DataType.INTEGER
  })
  maxUsers : number

  @Column({
    defaultValue : 0,
    type : DataType.INTEGER
  })
  currentUsers : number

  @Column({
    allowNull : false,
    type : DataType.DATE
  })
  validFrom : Date
  
  @Column({
    allowNull : false,
    type : DataType.DATE
  })
  validTo : Date

  @Column({
    defaultValue: true,
    type: DataType.BOOLEAN
  })
  isActive : boolean

  @HasMany(() => UserCoupon)
  userCoupons: UserCoupon[]    
}