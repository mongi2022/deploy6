"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyEntity = void 0;
const area_entity_1 = require("../../area/entity/area.entity");
const features_entity_1 = require("../../features/entity/features.entity");
const gallery_entity_1 = require("../../gallery/entity/gallery.entity");
const localisation_entity_1 = require("../../localisation/entity/localisation.entity");
const price_entity_1 = require("../../price/entity/price.entity");
const user_entity_1 = require("../../users/entity/user.entity");
const videos_entity_1 = require("../../videos/entity/videos.entity");
const typeorm_1 = require("typeorm");
const property_status_enum_1 = require("../enum/property.status.enum");
let PropertyEntity = class PropertyEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PropertyEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], PropertyEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], PropertyEntity.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], PropertyEntity.prototype, "propertyType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: property_status_enum_1.PropertyStatus,
        default: property_status_enum_1.PropertyStatus.sale,
    }),
    __metadata("design:type", String)
], PropertyEntity.prototype, "propertyStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], PropertyEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], PropertyEntity.prototype, "zipCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], PropertyEntity.prototype, "neighborhood", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], PropertyEntity.prototype, "adresse", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => features_entity_1.FeaturesEntity, feature => feature.property, { eager: true }),
    __metadata("design:type", Array)
], PropertyEntity.prototype, "features", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PropertyEntity.prototype, "bedrooms", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PropertyEntity.prototype, "bathrooms", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PropertyEntity.prototype, "garages", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PropertyEntity.prototype, "yearBuilt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => gallery_entity_1.GalleryEntity, gall => gall.property, { eager: true }),
    __metadata("design:type", Array)
], PropertyEntity.prototype, "gallery", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => localisation_entity_1.LocalisationEntity, location => location.property, { eager: true }),
    __metadata("design:type", localisation_entity_1.LocalisationEntity)
], PropertyEntity.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => area_entity_1.AreaEntity, area => area.property, { eager: true }),
    __metadata("design:type", area_entity_1.AreaEntity)
], PropertyEntity.prototype, "area", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => price_entity_1.PriceEntity, price => price.property, { eager: true }),
    __metadata("design:type", price_entity_1.PriceEntity)
], PropertyEntity.prototype, "priceDollar", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => videos_entity_1.VideosEntity, video => video.property, { eager: true }),
    __metadata("design:type", Array)
], PropertyEntity.prototype, "videos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.property, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    __metadata("design:type", user_entity_1.User)
], PropertyEntity.prototype, "user", void 0);
PropertyEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "property" })
], PropertyEntity);
exports.PropertyEntity = PropertyEntity;
[
    {
        "id": 2,
        "title": "Centrally located office",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam veniam sit reprehenderit deserunt ad voluptates id aperiam veritatis! Nobis saepe quos eveniet numquam vitae quis, tenetur consectetur impedit dolore.",
        "propertyType": "Office",
        "propertyStatus": ["A louer"],
        "city": "Los Angeles",
        "zipCode": "90044",
        "neighborhood": ["Hollywood", "Highland Park"],
        "street": ["Hollywood Street #2", "Highland Park Street #1"],
        "location": {
            "lat": 33.954220,
            "lng": -118.293730
        },
        "formattedAddress": "1052 W 91st St, Los Angeles, CA 90044, USA",
        "features": ["Air Conditioning", "Barbeque", "Dryer", "Microwave", "Refrigerator", "Fireplace", "Sauna", "TV Cable", "WiFi"],
        "featured": true,
        "priceDollar": {
            "sale": null,
            "rent": 6500
        },
        "priceEuro": {
            "sale": null,
            "rent": 5800
        },
        "bedrooms": 4,
        "bathrooms": 2,
        "garages": 2,
        "area": {
            "value": 1500,
            "unit": "ft²"
        },
        "yearBuilt": 2012,
        "ratingsCount": 4,
        "ratingsValue": 400,
        "additionalFeatures": [
            {
                "name": "Heat",
                "value": "Natural Gas"
            },
            {
                "name": "Roof",
                "value": "Composition/Shingle"
            },
            {
                "name": "Floors",
                "value": "Wall-to-Wall Carpet"
            },
            {
                "name": "Water",
                "value": "District/Public"
            },
            {
                "name": "Cross Streets",
                "value": "Orangethorpe-Gilbert"
            },
            {
                "name": "Windows",
                "value": "Skylights"
            },
            {
                "name": "Flat",
                "value": "5"
            },
            {
                "name": "Childroom",
                "value": "2"
            }
        ],
        "gallery": [
            {
                "small": "assets/images/props/office/1-small.jpg",
                "medium": "assets/images/props/office/1-medium.jpg",
                "big": "assets/images/props/office/1-big.jpg"
            },
            {
                "small": "assets/images/props/office/2-small.jpg",
                "medium": "assets/images/props/office/2-medium.jpg",
                "big": "assets/images/props/office/2-big.jpg"
            },
            {
                "small": "assets/images/props/office/3-small.jpg",
                "medium": "assets/images/props/office/3-medium.jpg",
                "big": "assets/images/props/office/3-big.jpg"
            },
            {
                "small": "assets/images/props/office/4-small.jpg",
                "medium": "assets/images/props/office/4-medium.jpg",
                "big": "assets/images/props/office/4-big.jpg"
            },
            {
                "small": "assets/images/props/office/5-small.jpg",
                "medium": "assets/images/props/office/5-medium.jpg",
                "big": "assets/images/props/office/5-big.jpg"
            },
            {
                "small": "assets/images/props/office/6-small.jpg",
                "medium": "assets/images/props/office/6-medium.jpg",
                "big": "assets/images/props/office/6-big.jpg"
            }
        ],
        "plans": [
            {
                "name": "First floor",
                "desc": "Plan description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam veniam sit reprehenderit deserunt ad voluptates id aperiam veritatis! Nobis saepe quos eveniet numquam vitae quis, tenetur consectetur impedit dolore.",
                "area": {
                    "value": 1180,
                    "unit": "ft²"
                },
                "rooms": 3,
                "baths": 1,
                "image": "assets/images/others/plan-1.jpg"
            },
            {
                "name": "Second floor",
                "desc": "Plan description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam veniam sit reprehenderit deserunt ad voluptates id aperiam veritatis! Nobis saepe quos eveniet numquam vitae quis, tenetur consectetur impedit dolore.",
                "area": {
                    "value": 1200,
                    "unit": "ft²"
                },
                "rooms": 5,
                "baths": 2,
                "image": "assets/images/others/plan-2.jpg"
            }
        ],
        "videos": [
            {
                "name": "Video",
                "link": "http://themeseason.com/data/videos/video-1.mp4"
            },
            {
                "name": "Video with 'ngx-embed-video' plugin",
                "link": "https://www.youtube.com/watch?v=-NInBEdSvp8"
            }
        ],
        "published": "2013-09-12 12:20:30",
        "lastUpdate": "2019-05-20 14:20:00",
        "views": 408
    }
];
//# sourceMappingURL=property.entity.js.map