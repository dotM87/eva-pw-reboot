"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const codeforces_service_1 = require("./codeforces/codeforces.service");
const codeforces_controller_1 = require("./codeforces/codeforces.controller");
const chatlog_module_1 = require("./chatLog/chatlog.module");
const images_module_1 = require("./images/images.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'tourist',
                password: 'tourist',
                database: 'p2plearning',
                entities: ['dist/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            auth_module_1.AuthModule,
            chatlog_module_1.ChatLogModule,
            images_module_1.ImagesModule
        ],
        controllers: [codeforces_controller_1.CodeforcesController],
        providers: [codeforces_service_1.CodeforcesService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map