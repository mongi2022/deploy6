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
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const testimonial_module_1 = require("./modules/testimonial/testimonial.module");
const users_module_1 = require("./modules/users/users.module");
const typeorm_config_1 = require("./config/typeorm.config");
const auth_module_1 = require("./modules/auth/auth.module");
const comment_module_1 = require("./modules/comment/comment.module");
const social_module_1 = require("./modules/social/social.module");
const property_module_1 = require("./modules/property/property.module");
const client_module_1 = require("./modules/client/client.module");
const house_module_1 = require("./modules/house/house.module");
const localisation_module_1 = require("./modules/localisation/localisation.module");
const config_1 = require("@nestjs/config");
const features_module_1 = require("./modules/features/features.module");
const gallery_module_1 = require("./modules/gallery/gallery.module");
const price_module_1 = require("./modules/price/price.module");
const area_module_1 = require("./modules/area/area.module");
const videos_module_1 = require("./modules/videos/videos.module");
const featuresList_module_1 = require("./modules/featuresList/featuresList.module");
const neighborhood_module_1 = require("./modules/neighborhood/neighborhood.module");
const ville_module_1 = require("./modules/Ville/ville.module");
const featuresListTerrain_module_1 = require("./modules/featuresListTerrain/featuresListTerrain.module");
const mailer_1 = require("@nestjs-modules/mailer");
const email_controller_1 = require("./modules/sendMail/email.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeormConfig), config_1.ConfigModule.forRoot({ isGlobal: true }), users_module_1.UsersModule, featuresList_module_1.FeaturelistModule, featuresListTerrain_module_1.FeaturelistTerrainModule, neighborhood_module_1.NeighborhoodModule, ville_module_1.VilleModule, comment_module_1.CommentModule, social_module_1.SocialModule, videos_module_1.VideosModule, area_module_1.AreaModule, price_module_1.PriceModule, auth_module_1.AuthModule, comment_module_1.CommentModule, gallery_module_1.GalleryModule, property_module_1.PropertyModule, social_module_1.SocialModule, client_module_1.ClientModule, house_module_1.HouseModule, testimonial_module_1.TestimonialModule, localisation_module_1.LocalisationModule, features_module_1.FeaturesModule,
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.sendgrid.net',
                    secure: false,
                    auth: {
                        user: 'apikey',
                        pass: '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'
                    }
                }
            })],
        controllers: [app_controller_1.AppController, email_controller_1.EmailController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map