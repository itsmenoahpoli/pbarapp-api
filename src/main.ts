import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from '@/app/app.module';
import { GlobalExceptionFilter } from '@/filters';
import helmet from 'helmet';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Global configuration
   */
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use(compression());
  app.enableCors({
    origin: '*',
  });
  app.use(helmet({ contentSecurityPolicy: true }));

  /**
   * Global filters
   */
  app.useGlobalFilters(new GlobalExceptionFilter());

  /**
   * Swagger configuration
   */
  const swaggerConfig = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('Automatically generated API documentation')
    .setVersion('1.0')
    .setExternalDoc(
      'Export API documentation as json file',
      'docs/api/download',
    )

    .addTag('Auth API', 'Auth account management')
    .addTag('Bus Drivers API', 'Bus drivers management')
    .addTag('Bus Conductors API', 'Bus conductors management')
    .addTag('Busses API', 'Busses management')
    .addTag('Bus Routes API', 'Bus Routes management')
    .addTag('Bus Route Tickets API', 'Bus Route Tickets management')
    .addTag(
      'Bus Route Ticket Booking Transactions API',
      'Bus Route Ticket Booking Transactions management',
    )

    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('docs/api', app, swaggerDocument, {
    customSiteTitle: 'CUL Transport API Swagger Documentation',
  });

  const port = process.env.PORT || 3000;

  await app.listen(port, '0.0.0.0');
}

bootstrap();
