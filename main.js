"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.enableCors({
        origin: '*',
        credentials: true
    });
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Real Estate Application')
        .setDescription('The real estate API description')
        .setVersion('1.0')
        .addTag('real estate')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT_API || 3000, () => console.log(`server online at http://localhost:3000`));
}
bootstrap();
//# sourceMappingURL=main.js.map