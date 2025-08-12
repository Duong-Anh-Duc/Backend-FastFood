import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { CartItem } from "./cart-item.model";
import { Ingredient } from "./ingredient.model";

@Table
export class CartItemIngredient extends Model<CartItemIngredient>{
    @ForeignKey(() => CartItem)
    @Column({
        allowNull : false,
        type : DataType.INTEGER
    })
    cartItemId : number

    @ForeignKey(() => Ingredient)
    @Column({
        allowNull : false,
        type : DataType.INTEGER
    })
    ingredientId : number

    @Column({
        defaultValue : 1,
        type : DataType.INTEGER
    })
    quantity : number

    @BelongsTo(() => CartItem)
    cartItem : CartItem

    @BelongsTo(() => Ingredient)
    ingredient : Ingredient
}