"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:1977',
        methods: 'GET,POST,HEAD,PATCH,PUT,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Accept, Authorization',
        credentials: true,
    });
    await app.listen(3000);
    console.log(`Server running on http://localhost:3000`);
}
bootstrap();
//# sourceMappingURL=main.js.map