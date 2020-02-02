import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // the entry point of the application.
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
