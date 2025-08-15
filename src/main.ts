import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('bootstrap');

  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe({
    whitelist : true, // xoá các thuộc tính không được định nghĩa trong DTO
    forbidNonWhitelisted : true, // trả về lỗi nếu có thuộc tính không được định nghĩa trong DTO
    transform : true, // tự động chuyển đổi kiểu dữ liệu
    // transformOptions:{
    //   enableImplicitConversion : true // cho phép chuyển đổi kiểu dữ liệu ngầm định
    // }
  }))
  app.useGlobalInterceptors(new TransformInterceptor());

  const port = configService.get('PORT') || 3000;
  logger.log(`Server is running on http://localhost:${port}`);

  await app.listen(port);
}

bootstrap();
