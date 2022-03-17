import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({}));

    //swagger configuration
    const config = new DocumentBuilder()
    .setTitle('Language Service by Meitar Shalom')
    .setDescription('Language Service by Meitar Shalom')
    .setVersion('1.0')
    .addTag('Language Service by Meitar Shalom')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //enable all cors
  app.enableCors();

  await app.listen(3004);
}
bootstrap();
