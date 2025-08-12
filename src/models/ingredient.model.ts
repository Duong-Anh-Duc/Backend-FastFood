
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { CartItemIngredient } from "./cart-item-ingredient.model";
import { Category } from "./category.model";
import { OrderItemIngredient } from "./order-item-ingredient.model";
import { ProductIngredient } from "./product-ingredient.model";

@Table
export class Ingredient extends Model<Ingredient> {   
    @Column({
        allowNull : false,
        unique : true,
        type : DataType.STRING
    })
    name : string

    @Column({
        allowNull : false,
        type : DataType.STRING
    })
    imageUrl : string

    @Column({
        type : DataType.TEXT
    })
    description : string

    @Column({
        defaultValue : 0,
        type : DataType.INTEGER
    })
    price : number

    @Column({
        defaultValue : true,
        type : DataType.BOOLEAN
    })
    isActive : boolean

    @Column({
        defaultValue : true,
        type : DataType.BOOLEAN
    })
    isRequired : boolean
    
    @ForeignKey(() => Category)
    @Column({
        allowNull : false,
        type : DataType.INTEGER
    })
    categoryId : number

    @BelongsTo(() => Category)
    category : Category

    @HasMany(() => ProductIngredient)
    productIngredients: ProductIngredient[]

    @HasMany(() => OrderItemIngredient)
    orderItemIngredients: OrderItemIngredient[]

    @HasMany(() => CartItemIngredient)
    cartItemIngredients: CartItemIngredient[]
}