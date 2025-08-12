import { Category, Coupon, User } from '@/models';
import { Address } from '@/models/address.model';
import { CartItemIngredient } from '@/models/cart-item-ingredient.model';
import { CartItem } from '@/models/cart-item.model';
import { Cart } from '@/models/cart.model';
import { Ingredient } from '@/models/ingredient.model';
import { OrderItemIngredient } from '@/models/order-item-ingredient.model';
import { OrderItem } from '@/models/order-item.model';
import { Order } from '@/models/order.model';
import { ProductIngredient } from '@/models/product-ingredient.model';
import { ProductVariant } from '@/models/product-variant.model';
import { Product } from '@/models/product.model';
import { Review } from '@/models/review.model';
import { UserCoupon } from '@/models/user-coupon.model';
import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';

export const sequelizeConfig = (
  configService: ConfigService,
): SequelizeModuleOptions => ({
  dialect: configService.get<Dialect>('DB_DIALECT') || 'postgres',
  host: configService.get<string>('DB_HOST') || 'localhost',
  port: configService.get<number>('DB_PORT') || 5432,
  username: configService.get<string>('DB_USER') || 'postgres',
  password: configService.get<string>('DB_PASSWORD') || 'postgres',
  database: configService.get<string>('DB_NAME') || 'ducdb',
  synchronize : true,
  autoLoadModels : true,
  logging : false,
  models : [
    User,
    Category,
    Product,
    Cart,
    Ingredient,
    OrderItem,
    Order,
    OrderItemIngredient,
    ProductVariant,
    ProductIngredient,
    Address,
    CartItemIngredient,
    CartItem,
    UserCoupon,
    Coupon,
    Review
  ]
});
