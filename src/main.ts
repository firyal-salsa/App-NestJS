import 'dotenv/config'

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port = process.env.PORT

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder().setTitle('Conduit Blog API').setDescription('Conduit Blog API').setVersion('0.7.5').build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port)

  Logger.log(`Running on port ${port}`, 'Running PORT')
}
bootstrap();
