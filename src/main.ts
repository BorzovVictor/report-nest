import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './configs';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix('api');
	const swaggerOptions = new DocumentBuilder()
		.setTitle(swaggerConfig.title)
		.setDescription(swaggerConfig.description || '')
		.setVersion(swaggerConfig.version || '1.0')
		.build();

	const document = SwaggerModule.createDocument(app, swaggerOptions);
	SwaggerModule.setup(swaggerConfig.path, app, document);

	await app.listen(3100);
}

bootstrap();
