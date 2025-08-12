import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { CartItem } from "./cart-item.model";
import { Category } from "./category.model";
import { OrderItem } from "./order-item.model";
import { ProductIngredient } from "./product-ingredient.model";
import { ProductVariant } from "./product-variant.model";
import { Review } from "./review.model";

@Table
export class Product extends Model<Product> {
    @Column({
        allowNull : false,
        type : DataType.STRING
    })
    name : string

    @Column({
        allowNull : false,
        type : DataType.STRING,
        unique : true
    })
    slug : string

    @Column({
        allowNull : true,
        type : DataType.TEXT,
    })
    description : string
    @Column({
        allowNull : false,
        type : DataType.INTEGER
    })
    basePrice : number
    @Column({
        allowNull : false,
        type : DataType.BOOLEAN
    })
    isActive : boolean
    @Column({
        allowNull : false,
        type : DataType.BOOLEAN
    })
    isFeatured : boolean

    @ForeignKey(() => Category)
    @Column({
        allowNull : false,
        type : DataType.INTEGER
    })
    categoryId : number
    
    @BelongsTo(() => Category)
    category : Category

    @HasMany(() => ProductVariant)
    productVariants: ProductVariant[]

    @HasMany(() => ProductIngredient)
    productIngredients: ProductIngredient[]

    @HasMany(() => OrderItem)
    orderItems: OrderItem[]

    @HasMany(() => CartItem)
    cartItem : CartItem[]
    
    @HasMany(() => Review)
    reviews: Review[]
}