import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
