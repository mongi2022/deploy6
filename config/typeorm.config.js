"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormConfig = void 0;
const comment_entity_1 = require("../modules/comment/entity/comment.entity");
const property_entity_1 = require("../modules/property/entity/property.entity");
const social_entity_1 = require("../modules/social/entity/social.entity");
const client_entity_1 = require("../modules/client/entity/client.entity");
const features_entity_1 = require("../modules/features/entity/features.entity");
const house_entity_1 = require("../modules/house/entity/house.entity");
const localisation_entity_1 = require("../modules/localisation/entity/localisation.entity");
const testimonial_entity_1 = require("../modules/testimonial/entity/testimonial.entity");
const user_entity_1 = require("../modules/users/entity/user.entity");
const gallery_entity_1 = require("../modules/gallery/entity/gallery.entity");
const price_entity_1 = require("../modules/price/entity/price.entity");
const area_entity_1 = require("../modules/area/entity/area.entity");
const videos_entity_1 = require("../modules/videos/entity/videos.entity");
const featuresList_entity_1 = require("../modules/featuresList/entity/featuresList.entity");
const neighborhood_entity_1 = require("../modules/neighborhood/entity/neighborhood.entity");
const ville_entity_1 = require("../modules/Ville/entity/ville.entity");
const featuresListTerrain_entity_1 = require("../modules/featuresListTerrain/entity/featuresListTerrain.entity");
exports.typeormConfig = {
    type: 'mysql',
    host: 'sql.freedb.tech',
    port: 3306,
    username: 'freedb_mongithabet1234',
    password: '?zWs&G#3K?@3jxF',
    database: 'freedb_realestate2',
    entities: [user_entity_1.User, neighborhood_entity_1.NeighborhoodEntity, featuresListTerrain_entity_1.FeaturelistTerrainEntity, ville_entity_1.VilleEntity, price_entity_1.PriceEntity, featuresList_entity_1.FeaturelistEntity, area_entity_1.AreaEntity, videos_entity_1.VideosEntity, comment_entity_1.CommentEntity, localisation_entity_1.LocalisationEntity, social_entity_1.SocialEntity, property_entity_1.PropertyEntity, gallery_entity_1.GalleryEntity, client_entity_1.ClientEntity, house_entity_1.HouseEntity, testimonial_entity_1.TestimonialEntity, comment_entity_1.CommentEntity, features_entity_1.FeaturesEntity],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map