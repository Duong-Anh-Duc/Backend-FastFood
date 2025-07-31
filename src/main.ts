import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap');
  const port = process.env.PORT || 3000;
  Logger.log(`Server is running on http://localhost:${port}`);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
