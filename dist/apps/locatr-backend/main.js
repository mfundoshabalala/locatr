/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: external "tslib"
const external_tslib_namespaceObject = require("tslib");
;// CONCATENATED MODULE: external "@sentry/nestjs"
const nestjs_namespaceObject = require("@sentry/nestjs");
;// CONCATENATED MODULE: external "@sentry/profiling-node"
const profiling_node_namespaceObject = require("@sentry/profiling-node");
;// CONCATENATED MODULE: ./src/instrument.ts
// Import with `const Sentry = require("@sentry/nestjs");` if you are using CJS


nestjs_namespaceObject.init({
    dsn: "https://f1da28664ab04fc090048c059c09e6fe@o4504668388065280.ingest.us.sentry.io/4504668390621184",
    integrations: [
        (0,profiling_node_namespaceObject.nodeProfilingIntegration)(),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set sampling rate for profiling - this is relative to tracesSampleRate
    profilesSampleRate: 1.0,
});

;// CONCATENATED MODULE: external "@nestjs/common"
const common_namespaceObject = require("@nestjs/common");
;// CONCATENATED MODULE: external "@nestjs/core"
const core_namespaceObject = require("@nestjs/core");
;// CONCATENATED MODULE: external "@sentry/nestjs/setup"
const setup_namespaceObject = require("@sentry/nestjs/setup");
;// CONCATENATED MODULE: external "@nestjs/config"
const config_namespaceObject = require("@nestjs/config");
;// CONCATENATED MODULE: external "@nestjs/typeorm"
const typeorm_namespaceObject = require("@nestjs/typeorm");
;// CONCATENATED MODULE: ./src/app/app.service.ts


let AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
AppService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)()
], AppService);


;// CONCATENATED MODULE: ./src/app/app.controller.ts
var _a;



let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getError() {
        throw new Error("My first Sentry error!");
    }
    // @UseGuards(AuthGuard('jwt'), RolesGuard)
    getApp() {
        return 'Protected Route Accessed Successfully!';
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)("/debug-sentry"),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AppController.prototype, "getError", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)()
    // @UseGuards(AuthGuard('jwt'), RolesGuard)
    ,
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", String)
], AppController.prototype, "getApp", null);
AppController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)(),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (_a = typeof AppService !== "undefined" && AppService) === "function" ? _a : Object])
], AppController);


;// CONCATENATED MODULE: external "typeorm"
const external_typeorm_namespaceObject = require("typeorm");
;// CONCATENATED MODULE: ./src/modules/contact/entities/contact.entity.ts
var contact_entity_a, _b;


let Contact = class Contact {
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.PrimaryGeneratedColumn)('uuid', { name: 'contactID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Contact.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ unique: true, type: 'varchar', length: 255 }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Contact.prototype, "name", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ unique: true, type: 'varchar', nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Contact.prototype, "phone", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ unique: true, type: 'varchar', length: 255 }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Contact.prototype, "email", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.CreateDateColumn)({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (contact_entity_a = typeof Date !== "undefined" && Date) === "function" ? contact_entity_a : Object)
], Contact.prototype, "createdAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Contact.prototype, "createdBy", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Contact.prototype, "updatedAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true, length: 255, type: 'varchar', default: 'system' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Contact.prototype, "updatedBy", void 0);
Contact = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], Contact);


;// CONCATENATED MODULE: ./src/modules/industry/entities/industry.entity.ts
var industry_entity_a, industry_entity_b;


let Industry = class Industry {
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.PrimaryGeneratedColumn)('uuid', { name: 'industryID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Industry.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ unique: true, type: 'varchar', length: 255 }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Industry.prototype, "name", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)('text'),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Industry.prototype, "description", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.CreateDateColumn)({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (industry_entity_a = typeof Date !== "undefined" && Date) === "function" ? industry_entity_a : Object)
], Industry.prototype, "createdAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Industry.prototype, "createdBy", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (industry_entity_b = typeof Date !== "undefined" && Date) === "function" ? industry_entity_b : Object)
], Industry.prototype, "updatedAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true, length: 255, type: 'varchar', default: 'system' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Industry.prototype, "updatedBy", void 0);
Industry = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], Industry);


;// CONCATENATED MODULE: ./src/common/enums/index.ts
var Days;
(function (Days) {
    Days[Days["SUNDAY"] = 0] = "SUNDAY";
    Days[Days["MONDAY"] = 1] = "MONDAY";
    Days[Days["TUESDAY"] = 2] = "TUESDAY";
    Days[Days["WEDNESDAY"] = 3] = "WEDNESDAY";
    Days[Days["THURSDAY"] = 4] = "THURSDAY";
    Days[Days["FRIDAY"] = 5] = "FRIDAY";
    Days[Days["SATURDAY"] = 6] = "SATURDAY";
    Days[Days["UNALLOCATED"] = 7] = "UNALLOCATED";
})(Days || (Days = {}));
var UserNotification;
(function (UserNotification) {
    UserNotification["INFO"] = "info";
    UserNotification["WARNING"] = "warning";
    UserNotification["ERROR"] = "error";
})(UserNotification || (UserNotification = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType["USER"] = "user";
    NotificationType["ORDER"] = "order";
})(NotificationType || (NotificationType = {}));
var OrderNotification;
(function (OrderNotification) {
    OrderNotification["SENT"] = "sent";
    OrderNotification["DELIVERED"] = "delivered";
    OrderNotification["READ"] = "read";
})(OrderNotification || (OrderNotification = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "pending";
    OrderStatus["IN_PROGRESS"] = "in_progress";
    OrderStatus["DELIVERED"] = "delivered";
    OrderStatus["CANCELLED"] = "cancelled";
})(OrderStatus || (OrderStatus = {}));
var OrderType;
(function (OrderType) {
    OrderType["DELIVERY"] = "delivery";
    OrderType["PICKUP"] = "pickup";
    OrderType["TRANSFER"] = "transfer";
})(OrderType || (OrderType = {}));
var OrderPriority;
(function (OrderPriority) {
    OrderPriority["LOW"] = "low";
    OrderPriority["MEDIUM"] = "medium";
    OrderPriority["HIGH"] = "high";
})(OrderPriority || (OrderPriority = {}));
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["DISPATCHER"] = "dispatcher";
    UserRole["DRIVER"] = "driver";
    UserRole["CUSTOMER"] = "customer";
})(UserRole || (UserRole = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "active";
    UserStatus["INACTIVE"] = "inactive";
    UserStatus["SUSPENDED"] = "suspended";
    UserStatus["DELETED"] = "deleted";
})(UserStatus || (UserStatus = {}));
var VehicleType;
(function (VehicleType) {
    VehicleType["CAR"] = "car";
    VehicleType["TRUCK"] = "truck";
    VehicleType["BIKE"] = "bike";
    VehicleType["SCOOTER"] = "scooter";
    VehicleType["BUS"] = "bus";
    VehicleType["TRAIN"] = "train";
    VehicleType["SHIP"] = "ship";
    VehicleType["PLANE"] = "plane";
    VehicleType["HELICOPTER"] = "helicopter";
    VehicleType["OTHER"] = "other";
})(VehicleType || (VehicleType = {}));

;// CONCATENATED MODULE: ./src/modules/order/entities/order.entity.ts
var order_entity_a, order_entity_b, _c, _d, _e, _f;




let Order = class Order {
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.PrimaryGeneratedColumn)('uuid', { name: 'orderID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Order.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Unique)(['orderNumber']),
    (0,external_typeorm_namespaceObject.Column)({ type: 'bigint', generated: 'identity', name: 'orderNumber' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], Order.prototype, "orderNumber", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.ManyToOne)(() => Client, (client) => client.orders, { eager: true }),
    (0,external_typeorm_namespaceObject.JoinColumn)({ name: 'clientID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (order_entity_a = typeof external_typeorm_namespaceObject.Relation !== "undefined" && external_typeorm_namespaceObject.Relation) === "function" ? order_entity_a : Object)
], Order.prototype, "client", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Order.prototype, "pickupAddress", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Order.prototype, "deliveryAddress", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'enum', enum: OrderType }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (order_entity_b = typeof OrderType !== "undefined" && OrderType) === "function" ? order_entity_b : Object)
], Order.prototype, "type", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (_c = typeof OrderStatus !== "undefined" && OrderStatus) === "function" ? _c : Object)
], Order.prototype, "status", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'enum', enum: OrderPriority, default: OrderPriority.MEDIUM }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (_d = typeof OrderPriority !== "undefined" && OrderPriority) === "function" ? _d : Object)
], Order.prototype, "priority", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.CreateDateColumn)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Order.prototype, "createdAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Order.prototype, "createdBy", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.UpdateDateColumn)({ onUpdate: 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], Order.prototype, "updatedAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Order.prototype, "updatedBy", void 0);
Order = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], Order);


;// CONCATENATED MODULE: ./src/modules/site/entities/site.entity.ts
var site_entity_a, site_entity_b;


let Site = class Site {
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.PrimaryGeneratedColumn)('uuid', { name: 'siteID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Site.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ unique: true, type: 'varchar', length: 255 }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Site.prototype, "name", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)('text', { nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Site.prototype, "description", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ default: true, type: 'boolean' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Boolean)
], Site.prototype, "active", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'varchar', length: 255, comment: 'Formatted address of the site from the Google Place API' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Site.prototype, "address", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)('decimal', { precision: 9, scale: 6, comment: 'Latitude of the site from the Google Place API' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], Site.prototype, "latitude", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)('decimal', { precision: 9, scale: 6, comment: 'Longitude of the site from the Google Place API' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], Site.prototype, "longitude", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.CreateDateColumn)({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (site_entity_a = typeof Date !== "undefined" && Date) === "function" ? site_entity_a : Object)
], Site.prototype, "createdAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Site.prototype, "createdBy", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (site_entity_b = typeof Date !== "undefined" && Date) === "function" ? site_entity_b : Object)
], Site.prototype, "updatedAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true, length: 255, type: 'varchar', default: 'system' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Site.prototype, "updatedBy", void 0);
Site = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], Site);


;// CONCATENATED MODULE: ./src/modules/client/entities/client.entity.ts
var client_entity_a, client_entity_b, client_entity_c, client_entity_d, client_entity_e;






let Client = class Client {
    constructor() {
        this.businessHours = [];
        this.services = [];
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.PrimaryGeneratedColumn)('uuid', { name: 'clientID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Client.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Unique)('clientName', ['name']),
    (0,external_typeorm_namespaceObject.Column)({ name: 'clientName', unique: true, type: 'varchar', length: 255 }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Client.prototype, "name", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'simple-array', nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Array)
], Client.prototype, "businessHours", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ length: 255, nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Client.prototype, "website", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'text', nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Client.prototype, "notes", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'simple-array', nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Array)
], Client.prototype, "services", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ default: true, type: 'boolean' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Boolean)
], Client.prototype, "isActive", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.OneToOne)(() => Contact, { cascade: true, eager: true }),
    (0,external_typeorm_namespaceObject.JoinColumn)({ name: 'contactID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (client_entity_a = typeof Contact !== "undefined" && Contact) === "function" ? client_entity_a : Object)
], Client.prototype, "contact", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.OneToOne)(() => Site, { cascade: true, eager: true }),
    (0,external_typeorm_namespaceObject.JoinColumn)({ name: 'siteID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (client_entity_b = typeof Site !== "undefined" && Site) === "function" ? client_entity_b : Object)
], Client.prototype, "site", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.OneToMany)(() => Order, (order) => order.client, { nullable: true, orphanedRowAction: 'delete' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Array)
], Client.prototype, "orders", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.ManyToOne)(() => Industry, { eager: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (client_entity_c = typeof Industry !== "undefined" && Industry) === "function" ? client_entity_c : Object)
], Client.prototype, "industry", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.CreateDateColumn)({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (client_entity_d = typeof Date !== "undefined" && Date) === "function" ? client_entity_d : Object)
], Client.prototype, "createdAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Client.prototype, "createdBy", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (client_entity_e = typeof Date !== "undefined" && Date) === "function" ? client_entity_e : Object)
], Client.prototype, "updatedAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true, length: 255, type: 'varchar', default: 'system' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Client.prototype, "updatedBy", void 0);
Client = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], Client);


;// CONCATENATED MODULE: ./src/modules/depot/entities/depot.entity.ts


let Depot = class Depot {
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.PrimaryGeneratedColumn)('uuid'),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Depot.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ unique: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Depot.prototype, "name", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Depot.prototype, "address", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Depot.prototype, "latitude", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Depot.prototype, "longitude", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], Depot.prototype, "capacity", void 0);
Depot = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], Depot);


;// CONCATENATED MODULE: ./src/modules/employee/entities/employee.entity.ts
var employee_entity_a, employee_entity_b, employee_entity_c;



let Employee = class Employee {
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.PrimaryGeneratedColumn)('uuid', { name: 'employeeID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Employee.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'varchar', length: 255 }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Employee.prototype, "firstName", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'varchar', length: 255 }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Employee.prototype, "lastName", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ length: 255 }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Employee.prototype, "position", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ length: 255, nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Employee.prototype, "department", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.OneToOne)(() => Contact, { cascade: true }),
    (0,external_typeorm_namespaceObject.JoinColumn)({ name: 'contactID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (employee_entity_a = typeof Contact !== "undefined" && Contact) === "function" ? employee_entity_a : Object)
], Employee.prototype, "contact", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.CreateDateColumn)({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (employee_entity_b = typeof Date !== "undefined" && Date) === "function" ? employee_entity_b : Object)
], Employee.prototype, "createdAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Employee.prototype, "createdBy", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (employee_entity_c = typeof Date !== "undefined" && Date) === "function" ? employee_entity_c : Object)
], Employee.prototype, "updatedAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true, length: 255, type: 'varchar', default: 'system' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Employee.prototype, "updatedBy", void 0);
Employee = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], Employee);


;// CONCATENATED MODULE: ./src/modules/role/entities/role.entity.ts
var role_entity_a, role_entity_b;


let Role = class Role {
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.PrimaryGeneratedColumn)('uuid', { name: 'roleID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Role.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ unique: true, type: 'varchar', length: 255 }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Role.prototype, "name", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true, type: 'text' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Role.prototype, "description", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.CreateDateColumn)({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (role_entity_a = typeof Date !== "undefined" && Date) === "function" ? role_entity_a : Object)
], Role.prototype, "createdAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Role.prototype, "createdBy", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (role_entity_b = typeof Date !== "undefined" && Date) === "function" ? role_entity_b : Object)
], Role.prototype, "updatedAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true, length: 255, type: 'varchar', default: 'system' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Role.prototype, "updatedBy", void 0);
Role = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], Role);


;// CONCATENATED MODULE: ./src/modules/user/entities/user.entity.ts
var user_entity_a, user_entity_b, user_entity_c, user_entity_d, user_entity_e, user_entity_f;





let User = class User {
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.PrimaryGeneratedColumn)('uuid', { name: 'userID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], User.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ unique: true, type: 'varchar', length: 255 }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], User.prototype, "username", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ unique: true, type: 'varchar', length: 255 }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'varchar', length: 255 }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], User.prototype, "password", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'boolean', default: false }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Boolean)
], User.prototype, "isVerified", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.OneToOne)(() => Employee, { cascade: true, eager: true }),
    (0,external_typeorm_namespaceObject.JoinColumn)({ name: 'employeeID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (user_entity_a = typeof Employee !== "undefined" && Employee) === "function" ? user_entity_a : Object)
], User.prototype, "employee", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.OneToOne)(() => Contact, { cascade: true, eager: true }),
    (0,external_typeorm_namespaceObject.JoinColumn)({ name: 'contactID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (user_entity_b = typeof Contact !== "undefined" && Contact) === "function" ? user_entity_b : Object)
], User.prototype, "contact", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'enum', enum: UserStatus, default: UserStatus.ACTIVE }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (user_entity_c = typeof UserStatus !== "undefined" && UserStatus) === "function" ? user_entity_c : Object)
], User.prototype, "status", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'enum', enum: UserRole, default: UserRole.CUSTOMER }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (user_entity_d = typeof UserRole !== "undefined" && UserRole) === "function" ? user_entity_d : Object)
], User.prototype, "role", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.CreateDateColumn)({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (user_entity_e = typeof Date !== "undefined" && Date) === "function" ? user_entity_e : Object)
], User.prototype, "createdAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], User.prototype, "createdBy", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (user_entity_f = typeof Date !== "undefined" && Date) === "function" ? user_entity_f : Object)
], User.prototype, "updatedAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true, length: 255, type: 'varchar', default: 'system' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], User.prototype, "updatedBy", void 0);
User = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], User);


;// CONCATENATED MODULE: ./src/modules/vehicle/entities/vehicle.entity.ts
var vehicle_entity_a, vehicle_entity_b, vehicle_entity_c;

// src/vehicle/vehicle.entity.ts


let Vehicle = class Vehicle {
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.PrimaryGeneratedColumn)('uuid', { name: 'vehicleID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Vehicle.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Vehicle.prototype, "make", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Vehicle.prototype, "model", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'enum', enum: VehicleType }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (vehicle_entity_a = typeof VehicleType !== "undefined" && VehicleType) === "function" ? vehicle_entity_a : Object)
], Vehicle.prototype, "type", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], Vehicle.prototype, "year", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Vehicle.prototype, "licensePlate", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], Vehicle.prototype, "capacity", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Vehicle.prototype, "currentLocation", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.CreateDateColumn)({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (vehicle_entity_b = typeof Date !== "undefined" && Date) === "function" ? vehicle_entity_b : Object)
], Vehicle.prototype, "createdAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Vehicle.prototype, "createdBy", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (vehicle_entity_c = typeof Date !== "undefined" && Date) === "function" ? vehicle_entity_c : Object)
], Vehicle.prototype, "updatedAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true, length: 255, type: 'varchar', default: 'system' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Vehicle.prototype, "updatedBy", void 0);
Vehicle = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], Vehicle);


;// CONCATENATED MODULE: ./src/modules/route/entities/route.entity.ts
var route_entity_a, route_entity_b, route_entity_c, route_entity_d, route_entity_e, route_entity_f, _g;





let Route = class Route {
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.PrimaryGeneratedColumn)({ type: 'bigint' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], Route.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.ManyToOne)(() => Order, { eager: true }),
    (0,external_typeorm_namespaceObject.JoinColumn)({ name: 'orderID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (route_entity_a = typeof Order !== "undefined" && Order) === "function" ? route_entity_a : Object)
], Route.prototype, "order", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.ManyToOne)(() => User, { eager: true }),
    (0,external_typeorm_namespaceObject.JoinColumn)({ name: 'driverID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (route_entity_b = typeof User !== "undefined" && User) === "function" ? route_entity_b : Object)
], Route.prototype, "driver", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.ManyToOne)(() => Vehicle, { eager: true }),
    (0,external_typeorm_namespaceObject.JoinColumn)({ name: 'vehicleID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (route_entity_c = typeof Vehicle !== "undefined" && Vehicle) === "function" ? route_entity_c : Object)
], Route.prototype, "vehicle", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (route_entity_d = typeof Date !== "undefined" && Date) === "function" ? route_entity_d : Object)
], Route.prototype, "startTime", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (route_entity_e = typeof Date !== "undefined" && Date) === "function" ? route_entity_e : Object)
], Route.prototype, "endTime", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)('jsonb'),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Object)
], Route.prototype, "routePath", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.CreateDateColumn)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (route_entity_f = typeof Date !== "undefined" && Date) === "function" ? route_entity_f : Object)
], Route.prototype, "createdAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Route.prototype, "createdBy", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.UpdateDateColumn)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], Route.prototype, "updatedAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Route.prototype, "updatedBy", void 0);
Route = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], Route);


;// CONCATENATED MODULE: ./src/modules/trip/entities/trip.entity.ts
var trip_entity_a, trip_entity_b;

// src/trip/trip.entity.ts

let Trip = class Trip {
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.PrimaryGeneratedColumn)('uuid', { name: 'tripID' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Trip.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Trip.prototype, "destination", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)('timestamp'),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (trip_entity_a = typeof Date !== "undefined" && Date) === "function" ? trip_entity_a : Object)
], Trip.prototype, "startTime", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)('timestamp'),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (trip_entity_b = typeof Date !== "undefined" && Date) === "function" ? trip_entity_b : Object)
], Trip.prototype, "endTime", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Trip.prototype, "status", void 0);
Trip = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], Trip);


;// CONCATENATED MODULE: ./src/modules/notification/entities/notification.entity.ts
var notification_entity_a, notification_entity_b, notification_entity_c, notification_entity_d;




let Notification = class Notification {
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.PrimaryGeneratedColumn)('uuid'),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Notification.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.ManyToOne)(() => User),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (notification_entity_a = typeof User !== "undefined" && User) === "function" ? notification_entity_a : Object)
], Notification.prototype, "user", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Notification.prototype, "message", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({
        type: 'enum',
        enum: UserNotification,
        default: UserNotification.INFO
    }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (notification_entity_b = typeof UserNotification !== "undefined" && UserNotification) === "function" ? notification_entity_b : Object)
], Notification.prototype, "type", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ default: false }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Boolean)
], Notification.prototype, "isRead", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (notification_entity_c = typeof Date !== "undefined" && Date) === "function" ? notification_entity_c : Object)
], Notification.prototype, "readAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.CreateDateColumn)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (notification_entity_d = typeof Date !== "undefined" && Date) === "function" ? notification_entity_d : Object)
], Notification.prototype, "createdAt", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Notification.prototype, "createdBy", void 0);
Notification = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], Notification);


;// CONCATENATED MODULE: ./src/configs/database/config.service.ts
var config_service_a;
















let DBConfigService = class DBConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    createTypeOrmOptions() {
        const isProduction = process.env.NODE_ENV === 'production';
        const sourcePath = isProduction ? 'dist' : 'apps/locatr-backend/src';
        return {
            type: 'postgres',
            url: process.env.POSTGRES_URL,
            host: process.env.POSTGRES_HOST,
            port: 5432,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            // migrations: [join(__dirname, `../../../${sourcePath}/migrations/*{.ts,.js}`)],
            // entities: [join(__dirname, `../../../${sourcePath}/modules/**/*.entity{.ts,.js}`)],
            entities: [User, Vehicle, Client, Contact, Employee, Industry, Role, Site, Trip, Notification, Order, Route, Depot],
            synchronize: !isProduction,
            // synchronize: true,
            migrationsRun: true,
            autoLoadEntities: true,
            logging: !isProduction,
            ssl: {
                rejectUnauthorized: false,
            },
        };
    }
};
DBConfigService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (config_service_a = typeof config_namespaceObject.ConfigService !== "undefined" && config_namespaceObject.ConfigService) === "function" ? config_service_a : Object])
], DBConfigService);


;// CONCATENATED MODULE: ./src/configs/database/config.module.ts



let DBConfigModule = class DBConfigModule {
};
DBConfigModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [],
        providers: [DBConfigService],
    })
], DBConfigModule);


;// CONCATENATED MODULE: ./src/configs/index.ts



;// CONCATENATED MODULE: external "bcrypt"
const external_bcrypt_namespaceObject = require("bcrypt");
;// CONCATENATED MODULE: external "@nestjs/jwt"
const jwt_namespaceObject = require("@nestjs/jwt");
;// CONCATENATED MODULE: ./src/modules/user/user.service.ts
var user_service_a, user_service_b;







let UserService = class UserService {
    constructor(userRepository, roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }
    getUserDefaultRole() {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            const headCount = yield this.userRepository.count();
            if (headCount === 0) {
                return yield this.roleRepository.findOne({ where: { name: 'owner' } });
            }
            return yield this.roleRepository.findOne({ where: { name: 'user' } });
        });
    }
    create(createUserDto) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            if (yield this.hasActiveUsers())
                createUserDto.role = UserRole.CUSTOMER;
            else
                createUserDto.role = UserRole.ADMIN;
            return this.userRepository.save(createUserDto);
        });
    }
    findAll() {
        return this.userRepository.find();
    }
    findOneBy(username) {
        return this.userRepository.findOne({ where: { username } });
    }
    findById(id) {
        return this.userRepository.findOne({ where: { id } });
    }
    update(id, updateUserDto) {
        return this.userRepository.update(id, updateUserDto);
    }
    remove(id) {
        return this.userRepository.delete(id);
    }
    hasActiveUsers() {
        return this.userRepository.count();
    }
};
UserService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(User)),
    (0,external_tslib_namespaceObject.__param)(1, (0,typeorm_namespaceObject.InjectRepository)(Role)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (user_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? user_service_a : Object, typeof (user_service_b = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? user_service_b : Object])
], UserService);


;// CONCATENATED MODULE: ./src/modules/auth/auth.service.ts
var auth_service_a, auth_service_b;





let AuthService = class AuthService {
    constructor(jwtService, userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }
    hashPassword(password) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return yield external_bcrypt_namespaceObject.hash(password, 10);
        });
    }
    comparePasswords(plainPassword, hashedPassword) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return yield external_bcrypt_namespaceObject.compare(plainPassword, hashedPassword);
        });
    }
    signIn(username, password) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.userService.findOneBy(username);
            if (!user || !user.password) {
                throw new common_namespaceObject.UnauthorizedException("User doesn't exist");
            }
            if (!(yield this.comparePasswords(password, user.password))) {
                throw new common_namespaceObject.UnauthorizedException('Invalid password');
            }
            const payload = { sub: user.id, username: user.username };
            return {
                access_token: yield this.jwtService.signAsync(payload, { secret: process.env.JWT_SECRET }),
            };
        });
    }
    signUp(payload) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            try {
                payload = Object.assign(Object.assign({}, payload), { password: yield this.hashPassword(payload.password) });
                return yield this.userService.create(payload);
            }
            catch (error) {
                throw new common_namespaceObject.UnauthorizedException(error.message);
            }
        });
    }
    forgotPassword(username) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.userService.findOneBy(username);
            if (!user) {
                throw new common_namespaceObject.UnauthorizedException();
            }
            return 'Password reset link sent to your email';
        });
    }
    validateToken(token) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            try {
                return this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
            }
            catch (error) {
                throw new Error('Invalid token');
            }
        });
    }
};
AuthService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (auth_service_a = typeof jwt_namespaceObject.JwtService !== "undefined" && jwt_namespaceObject.JwtService) === "function" ? auth_service_a : Object, typeof (auth_service_b = typeof UserService !== "undefined" && UserService) === "function" ? auth_service_b : Object])
], AuthService);


;// CONCATENATED MODULE: ./src/middleware/auth/auth.middleware.ts
var auth_middleware_a;



let AuthMiddleware = class AuthMiddleware {
    constructor(authService) {
        this.authService = authService;
        this.use = (req, _res, next) => (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            const authHeader = req.headers['x-authorisation'];
            if (authHeader && !req.user) {
                const token = Array.isArray(authHeader) ? authHeader[0] : authHeader;
                if (token) {
                    try {
                        const user = yield this.authService.validateToken(token);
                        if (user)
                            req.user = user;
                    }
                    catch (err) {
                        throw new common_namespaceObject.UnauthorizedException(err.message);
                    }
                }
            }
            next();
        });
    }
};
AuthMiddleware = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (auth_middleware_a = typeof AuthService !== "undefined" && AuthService) === "function" ? auth_middleware_a : Object])
], AuthMiddleware);


;// CONCATENATED MODULE: ./src/middleware/current-user/current-user.interceptor.ts


let CurrentUserInterceptor = class CurrentUserInterceptor {
    intercept(context, next) {
        var _a;
        const request = context.switchToHttp().getRequest();
        const username = (_a = request.user) === null || _a === void 0 ? void 0 : _a.username;
        if (!username) {
            return next.handle();
        }
        if (request.method === 'POST') {
            request.body.createdBy = username;
            request.body.updatedBy = username;
        }
        else if (request.method === 'PUT' || request.method === 'PATCH') {
            request.body.updatedBy = username;
        }
        return next.handle();
    }
};
CurrentUserInterceptor = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)()
], CurrentUserInterceptor);


;// CONCATENATED MODULE: ./src/middleware/index.ts



;// CONCATENATED MODULE: ./src/modules/role/role.service.ts
var role_service_a;




// entities

let RoleService = class RoleService {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    create(createRoleDto) {
        return this.roleRepository.save(createRoleDto);
    }
    findAll() {
        return this.roleRepository.find();
    }
    findOne(id) {
        return this.roleRepository.findOne({ where: { id } });
    }
    update(id, updateRoleDto) {
        return this.roleRepository.update(id, updateRoleDto);
    }
    remove(id) {
        return this.roleRepository.delete(id);
    }
};
RoleService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(Role)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (role_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? role_service_a : Object])
], RoleService);


;// CONCATENATED MODULE: external "class-validator"
const external_class_validator_namespaceObject = require("class-validator");
;// CONCATENATED MODULE: ./src/modules/contact/dto/create-contact.dto.ts


class CreateContactDto {
}
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateContactDto.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateContactDto.prototype, "name", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateContactDto.prototype, "phone", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsEmail)(),
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateContactDto.prototype, "email", void 0);

;// CONCATENATED MODULE: ./src/modules/employee/dto/create-employee.dto.ts


class CreateEmployeeDto {
}
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateEmployeeDto.prototype, "firstName", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateEmployeeDto.prototype, "lastName", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_class_validator_namespaceObject.IsEmail)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateEmployeeDto.prototype, "email", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateEmployeeDto.prototype, "phone", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateEmployeeDto.prototype, "position", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateEmployeeDto.prototype, "department", void 0);

;// CONCATENATED MODULE: ./src/modules/user/dto/create-user.dto.ts
var create_user_dto_a, create_user_dto_b, create_user_dto_c;






class CreateUserDto {
}
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.MinLength)(8),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_typeorm_namespaceObject.Unique)(['username']),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateUserDto.prototype, "username", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsEmail)(),
    (0,external_typeorm_namespaceObject.Unique)(['email']),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateUserDto.prototype, "email", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_class_validator_namespaceObject.MinLength)(8),
    (0,external_class_validator_namespaceObject.IsAlphanumeric)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateUserDto.prototype, "password", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsNotEmptyObject)(),
    (0,external_class_validator_namespaceObject.IsObject)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (create_user_dto_a = typeof CreateEmployeeDto !== "undefined" && CreateEmployeeDto) === "function" ? create_user_dto_a : Object)
], CreateUserDto.prototype, "employee", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsNotEmptyObject)(),
    (0,external_class_validator_namespaceObject.IsObject)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (create_user_dto_b = typeof CreateContactDto !== "undefined" && CreateContactDto) === "function" ? create_user_dto_b : Object)
], CreateUserDto.prototype, "contact", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsEnum)(UserRole),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (create_user_dto_c = typeof UserRole !== "undefined" && UserRole) === "function" ? create_user_dto_c : Object)
], CreateUserDto.prototype, "role", void 0);

;// CONCATENATED MODULE: ./src/modules/auth/strategy/public-strategy.ts

const IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0,common_namespaceObject.SetMetadata)(IS_PUBLIC_KEY, true);

;// CONCATENATED MODULE: ./src/modules/auth/auth.controller.ts
var auth_controller_a, auth_controller_b, auth_controller_c, auth_controller_d;






let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signIn(signInDto) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }
    signUp(signUpDto) {
        const payload = {
            username: signUpDto.username,
            password: signUpDto.password,
            email: signUpDto.email,
            employee: signUpDto.employee,
            contact: signUpDto.contact,
            role: signUpDto.role,
        };
        return this.authService.signUp(payload);
    }
    forgotPassword(forgotPasswordDto) {
        return this.authService.forgotPassword(forgotPasswordDto.username);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    Public(),
    (0,common_namespaceObject.HttpCode)(common_namespaceObject.HttpStatus.OK),
    (0,common_namespaceObject.Post)('login'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (auth_controller_b = typeof User !== "undefined" && User) === "function" ? auth_controller_b : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AuthController.prototype, "signIn", null);
(0,external_tslib_namespaceObject.__decorate)([
    Public(),
    (0,common_namespaceObject.HttpCode)(common_namespaceObject.HttpStatus.CREATED),
    (0,common_namespaceObject.Post)('register'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (auth_controller_c = typeof CreateUserDto !== "undefined" && CreateUserDto) === "function" ? auth_controller_c : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AuthController.prototype, "signUp", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.HttpCode)(common_namespaceObject.HttpStatus.OK),
    (0,common_namespaceObject.Post)('forgot-password'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (auth_controller_d = typeof User !== "undefined" && User) === "function" ? auth_controller_d : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AuthController.prototype, "forgotPassword", null);
AuthController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('auth'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (auth_controller_a = typeof AuthService !== "undefined" && AuthService) === "function" ? auth_controller_a : Object])
], AuthController);


;// CONCATENATED MODULE: external "@nestjs/passport"
const passport_namespaceObject = require("@nestjs/passport");
;// CONCATENATED MODULE: external "passport-jwt"
const external_passport_jwt_namespaceObject = require("passport-jwt");
;// CONCATENATED MODULE: ./src/modules/auth/strategy/jwt-strategy.ts




let JwtStrategy = class JwtStrategy extends (0,passport_namespaceObject.PassportStrategy)(external_passport_jwt_namespaceObject.Strategy) {
    constructor() {
        super({
            jwtFromRequest: external_passport_jwt_namespaceObject.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET
        });
    }
    validate(payload) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return { userId: payload.sub, username: payload.username };
        });
    }
};
JwtStrategy = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [])
], JwtStrategy);


;// CONCATENATED MODULE: ./src/modules/auth/auth.module.ts












let AuthModule = class AuthModule {
    configure(consumer) {
        consumer.apply(AuthMiddleware).forRoutes({ path: '*', method: common_namespaceObject.RequestMethod.ALL });
    }
};
AuthModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [
            jwt_namespaceObject.JwtModule.register({
                global: true,
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '1d' },
            }),
            typeorm_namespaceObject.TypeOrmModule.forFeature([User, Role]),
        ],
        controllers: [AuthController],
        providers: [AuthService, JwtStrategy, UserService, RoleService],
        exports: [AuthService],
    })
], AuthModule);


;// CONCATENATED MODULE: ./src/modules/client/client.service.ts
var client_service_a, client_service_b, client_service_c;







let ClientService = class ClientService {
    constructor(clientRepository, contactRepository, siteRepository) {
        this.clientRepository = clientRepository;
        this.contactRepository = contactRepository;
        this.siteRepository = siteRepository;
    }
    create(createClientDto) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.clientRepository.save(createClientDto);
        });
    }
    findAll() {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.clientRepository.find();
        });
    }
    findOne(id) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.clientRepository.findOne({ where: { id } });
        });
    }
    remove(id) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.clientRepository.delete(id);
        });
    }
    update(id, updateClientDto) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            var _a, _b;
            const client = yield this.clientRepository.findOne({ where: { id } });
            if (!client) {
                throw new common_namespaceObject.NotFoundException(`Client with ID ${id} not found`);
            }
            if ((_a = updateClientDto.contact) === null || _a === void 0 ? void 0 : _a.name) {
                const existingContact = yield this.contactRepository.findOne({ where: { name: updateClientDto.contact.name } });
                if (existingContact && existingContact.id !== client.contact.id) {
                    throw new common_namespaceObject.ConflictException(`Contact name "${updateClientDto.contact.name}" already exists`);
                }
            }
            if ((_b = updateClientDto.site) === null || _b === void 0 ? void 0 : _b.name) {
                const existingSite = yield this.siteRepository.findOne({ where: { name: updateClientDto.site.name } });
                if (existingSite && existingSite.id !== client.site.id) {
                    throw new common_namespaceObject.ConflictException(`Site name "${updateClientDto.site.name}" already exists`);
                }
            }
            Object.assign(client, updateClientDto);
            try {
                return yield this.clientRepository.save(client, { reload: true, transaction: true });
            }
            catch (error) {
                if (error.code === '23505') { // PostgreSQL unique violation error code
                    throw new common_namespaceObject.ConflictException('Duplicate key value violates unique constraint');
                }
                throw new Error(error.message);
            }
        });
    }
};
ClientService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(Client)),
    (0,external_tslib_namespaceObject.__param)(1, (0,typeorm_namespaceObject.InjectRepository)(Contact)),
    (0,external_tslib_namespaceObject.__param)(2, (0,typeorm_namespaceObject.InjectRepository)(Site)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (client_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? client_service_a : Object, typeof (client_service_b = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? client_service_b : Object, typeof (client_service_c = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? client_service_c : Object])
], ClientService);


;// CONCATENATED MODULE: external "class-transformer"
const external_class_transformer_namespaceObject = require("class-transformer");
;// CONCATENATED MODULE: ./src/modules/site/dto/create-site.dto.ts
var create_site_dto_a;




class CreateSiteDto {
}
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateSiteDto.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.MinLength)(4),
    (0,external_class_validator_namespaceObject.MaxLength)(100),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_typeorm_namespaceObject.Unique)(['name']),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateSiteDto.prototype, "name", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateSiteDto.prototype, "address", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], CreateSiteDto.prototype, "latitude", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], CreateSiteDto.prototype, "longitude", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateSiteDto.prototype, "type", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsBoolean)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Boolean)
], CreateSiteDto.prototype, "active", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateSiteDto.prototype, "description", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsNotEmptyObject)(),
    (0,external_class_validator_namespaceObject.IsObject)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (create_site_dto_a = typeof Client !== "undefined" && Client) === "function" ? create_site_dto_a : Object)
], CreateSiteDto.prototype, "client", void 0);

;// CONCATENATED MODULE: ./src/modules/client/dto/create-client.dto.ts
var create_client_dto_a, create_client_dto_b;





class CreateClientDto {
}
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateClientDto.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateClientDto.prototype, "name", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsArray)(),
    (0,external_class_validator_namespaceObject.IsString)({ each: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Array)
], CreateClientDto.prototype, "businessHours", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsUrl)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateClientDto.prototype, "website", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateClientDto.prototype, "notes", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsArray)(),
    (0,external_class_validator_namespaceObject.IsString)({ each: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Array)
], CreateClientDto.prototype, "services", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateClientDto.prototype, "status", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsUUID)(),
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateClientDto.prototype, "industryID", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.ValidateNested)(),
    (0,external_class_transformer_namespaceObject.Type)(() => CreateContactDto),
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (create_client_dto_a = typeof CreateContactDto !== "undefined" && CreateContactDto) === "function" ? create_client_dto_a : Object)
], CreateClientDto.prototype, "contact", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.ValidateNested)(),
    (0,external_class_transformer_namespaceObject.Type)(() => CreateSiteDto),
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (create_client_dto_b = typeof CreateSiteDto !== "undefined" && CreateSiteDto) === "function" ? create_client_dto_b : Object)
], CreateClientDto.prototype, "site", void 0);

;// CONCATENATED MODULE: external "@nestjs/mapped-types"
const mapped_types_namespaceObject = require("@nestjs/mapped-types");
;// CONCATENATED MODULE: ./src/modules/client/dto/update-client.dto.ts


class UpdateClientDto extends (0,mapped_types_namespaceObject.PartialType)(CreateClientDto) {
}

;// CONCATENATED MODULE: ./src/modules/client/client.controller.ts
var client_controller_a, client_controller_b, client_controller_c, client_controller_d, client_controller_e, client_controller_f, client_controller_g, _h;






let ClientController = class ClientController {
    constructor(clientService) {
        this.clientService = clientService;
    }
    create(createClientDto) {
        return this.clientService.create(createClientDto);
    }
    findAll() {
        return this.clientService.findAll();
    }
    findOne(id) {
        return this.clientService.findOne(id);
    }
    update(id, updateClientDto) {
        return this.clientService.update(id, updateClientDto);
    }
    remove(id) {
        return this.clientService.remove(id);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)(),
    (0,common_namespaceObject.UseInterceptors)(CurrentUserInterceptor),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (client_controller_b = typeof CreateClientDto !== "undefined" && CreateClientDto) === "function" ? client_controller_b : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (client_controller_c = typeof Promise !== "undefined" && Promise) === "function" ? client_controller_c : Object)
], ClientController.prototype, "create", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (client_controller_d = typeof Promise !== "undefined" && Promise) === "function" ? client_controller_d : Object)
], ClientController.prototype, "findAll", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (client_controller_e = typeof Promise !== "undefined" && Promise) === "function" ? client_controller_e : Object)
], ClientController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Patch)(':id'),
    (0,common_namespaceObject.UseInterceptors)(CurrentUserInterceptor),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, typeof (client_controller_f = typeof UpdateClientDto !== "undefined" && UpdateClientDto) === "function" ? client_controller_f : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (client_controller_g = typeof Promise !== "undefined" && Promise) === "function" ? client_controller_g : Object)
], ClientController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ClientController.prototype, "remove", null);
ClientController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('client'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (client_controller_a = typeof ClientService !== "undefined" && ClientService) === "function" ? client_controller_a : Object])
], ClientController);


;// CONCATENATED MODULE: ./src/modules/client/client.module.ts









let ClientModule = class ClientModule {
};
ClientModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([Client, Industry, Contact, Site])],
        controllers: [ClientController],
        providers: [ClientService],
        exports: [ClientService],
    })
], ClientModule);


;// CONCATENATED MODULE: ./src/modules/employee/employee.service.ts
var employee_service_a;





let EmployeeService = class EmployeeService {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    create(createEmployeeDto) {
        return this.employeeRepository.save(createEmployeeDto);
    }
    findAll() {
        return this.employeeRepository.find();
    }
    findOne(id) {
        return this.employeeRepository.findOne({ where: { id } });
    }
    update(id, updateEmployeeDto) {
        return this.employeeRepository.update(id, updateEmployeeDto);
    }
    remove(id) {
        return this.employeeRepository.delete(id);
    }
};
EmployeeService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(Employee)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (employee_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? employee_service_a : Object])
], EmployeeService);


;// CONCATENATED MODULE: ./src/modules/employee/dto/update-employee.dto.ts


class UpdateEmployeeDto extends (0,mapped_types_namespaceObject.PartialType)(CreateEmployeeDto) {
}

;// CONCATENATED MODULE: ./src/modules/employee/employee.controller.ts
var employee_controller_a, employee_controller_b, employee_controller_c, employee_controller_d, employee_controller_e, employee_controller_f, employee_controller_g, employee_controller_h;





let EmployeeController = class EmployeeController {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    create(createEmployeeDto) {
        return this.employeeService.create(createEmployeeDto);
    }
    findAll() {
        return this.employeeService.findAll();
    }
    findOne(id) {
        return this.employeeService.findOne(id);
    }
    update(id, updateEmployeeDto) {
        return this.employeeService.update(id, updateEmployeeDto);
    }
    remove(id) {
        return this.employeeService.remove(id);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (employee_controller_b = typeof CreateEmployeeDto !== "undefined" && CreateEmployeeDto) === "function" ? employee_controller_b : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (employee_controller_c = typeof Promise !== "undefined" && Promise) === "function" ? employee_controller_c : Object)
], EmployeeController.prototype, "create", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (employee_controller_d = typeof Promise !== "undefined" && Promise) === "function" ? employee_controller_d : Object)
], EmployeeController.prototype, "findAll", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (employee_controller_e = typeof Promise !== "undefined" && Promise) === "function" ? employee_controller_e : Object)
], EmployeeController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Patch)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, typeof (employee_controller_f = typeof UpdateEmployeeDto !== "undefined" && UpdateEmployeeDto) === "function" ? employee_controller_f : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (employee_controller_g = typeof Promise !== "undefined" && Promise) === "function" ? employee_controller_g : Object)
], EmployeeController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (employee_controller_h = typeof Promise !== "undefined" && Promise) === "function" ? employee_controller_h : Object)
], EmployeeController.prototype, "remove", null);
EmployeeController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('employee'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (employee_controller_a = typeof EmployeeService !== "undefined" && EmployeeService) === "function" ? employee_controller_a : Object])
], EmployeeController);


;// CONCATENATED MODULE: ./src/modules/employee/employee.module.ts






let EmployeeModule = class EmployeeModule {
};
EmployeeModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([Employee])],
        controllers: [EmployeeController],
        providers: [EmployeeService],
        exports: [EmployeeService],
    })
], EmployeeModule);


;// CONCATENATED MODULE: ./src/modules/role/dto/create-role.dto.ts


class CreateRoleDto {
}
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateRoleDto.prototype, "name", void 0);

;// CONCATENATED MODULE: ./src/modules/role/dto/update-role.dto.ts


class UpdateRoleDto extends (0,mapped_types_namespaceObject.PartialType)(CreateRoleDto) {
}

;// CONCATENATED MODULE: ./src/modules/role/role.controller.ts
var role_controller_a, role_controller_b, role_controller_c, role_controller_d, role_controller_e, role_controller_f, role_controller_g, role_controller_h;





let RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    create(createRoleDto) {
        return this.roleService.create(createRoleDto);
    }
    findAll() {
        return this.roleService.findAll();
    }
    findOne(id) {
        return this.roleService.findOne(id);
    }
    update(id, updateRoleDto) {
        return this.roleService.update(id, updateRoleDto);
    }
    remove(id) {
        return this.roleService.remove(id);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (role_controller_b = typeof CreateRoleDto !== "undefined" && CreateRoleDto) === "function" ? role_controller_b : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (role_controller_c = typeof Promise !== "undefined" && Promise) === "function" ? role_controller_c : Object)
], RoleController.prototype, "create", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (role_controller_d = typeof Promise !== "undefined" && Promise) === "function" ? role_controller_d : Object)
], RoleController.prototype, "findAll", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (role_controller_e = typeof Promise !== "undefined" && Promise) === "function" ? role_controller_e : Object)
], RoleController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Patch)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, typeof (role_controller_f = typeof UpdateRoleDto !== "undefined" && UpdateRoleDto) === "function" ? role_controller_f : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (role_controller_g = typeof Promise !== "undefined" && Promise) === "function" ? role_controller_g : Object)
], RoleController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (role_controller_h = typeof Promise !== "undefined" && Promise) === "function" ? role_controller_h : Object)
], RoleController.prototype, "remove", null);
RoleController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('role'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (role_controller_a = typeof RoleService !== "undefined" && RoleService) === "function" ? role_controller_a : Object])
], RoleController);


;// CONCATENATED MODULE: ./src/modules/role/role.module.ts






let RoleModule = class RoleModule {
};
RoleModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([Role])],
        controllers: [RoleController],
        providers: [RoleService],
        exports: [RoleService],
    })
], RoleModule);


;// CONCATENATED MODULE: ./src/modules/user/dto/update-user.dto.ts


class UpdateUserDto extends (0,mapped_types_namespaceObject.PartialType)(CreateUserDto) {
}

;// CONCATENATED MODULE: ./src/modules/user/user.controller.ts
var user_controller_a, user_controller_b, user_controller_c, user_controller_d, user_controller_e, user_controller_f, user_controller_g, user_controller_h;





let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create(createUserDto) {
        return this.userService.create(createUserDto);
    }
    findAll() {
        return this.userService.findAll();
    }
    findOne(id) {
        return this.userService.findOneBy(id);
    }
    update(id, updateUserDto) {
        return this.userService.update(id, updateUserDto);
    }
    remove(id) {
        return this.userService.remove(id);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (user_controller_b = typeof CreateUserDto !== "undefined" && CreateUserDto) === "function" ? user_controller_b : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (user_controller_c = typeof Promise !== "undefined" && Promise) === "function" ? user_controller_c : Object)
], UserController.prototype, "create", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (user_controller_d = typeof Promise !== "undefined" && Promise) === "function" ? user_controller_d : Object)
], UserController.prototype, "findAll", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (user_controller_e = typeof Promise !== "undefined" && Promise) === "function" ? user_controller_e : Object)
], UserController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Patch)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, typeof (user_controller_f = typeof UpdateUserDto !== "undefined" && UpdateUserDto) === "function" ? user_controller_f : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (user_controller_g = typeof Promise !== "undefined" && Promise) === "function" ? user_controller_g : Object)
], UserController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (user_controller_h = typeof Promise !== "undefined" && Promise) === "function" ? user_controller_h : Object)
], UserController.prototype, "remove", null);
UserController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('user'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (user_controller_a = typeof UserService !== "undefined" && UserService) === "function" ? user_controller_a : Object])
], UserController);


;// CONCATENATED MODULE: ./src/modules/user/user.module.ts








let UserModule = class UserModule {
};
UserModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([User, Employee, Role])],
        controllers: [UserController],
        providers: [UserService],
        exports: [UserService],
    })
], UserModule);


;// CONCATENATED MODULE: ./src/modules/site/site.service.ts
var site_service_a;





let SiteService = class SiteService {
    constructor(siteRepository) {
        this.siteRepository = siteRepository;
    }
    create(createSiteDto) {
        return this.siteRepository.save(createSiteDto);
    }
    findAll() {
        return this.siteRepository.find();
    }
    findOne(id) {
        return this.siteRepository.findOne({ where: { id } });
    }
    update(id, updateSiteDto) {
        return this.siteRepository.update(id, updateSiteDto);
    }
    remove(id) {
        return this.siteRepository.delete(id);
    }
};
SiteService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(Site)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (site_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? site_service_a : Object])
], SiteService);


;// CONCATENATED MODULE: ./src/modules/site/dto/update-site.dto.ts


class UpdateSiteDto extends (0,mapped_types_namespaceObject.PartialType)(CreateSiteDto) {
}

;// CONCATENATED MODULE: ./src/modules/site/site.controller.ts
var site_controller_a, site_controller_b, site_controller_c;





let SiteController = class SiteController {
    constructor(siteService) {
        this.siteService = siteService;
    }
    create(createSiteDto) {
        return this.siteService.create(createSiteDto);
    }
    findAll() {
        return this.siteService.findAll();
    }
    findOne(id) {
        return this.siteService.findOne(id);
    }
    update(id, updateSiteDto) {
        return this.siteService.update(id, updateSiteDto);
    }
    remove(id) {
        return this.siteService.remove(id);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (site_controller_b = typeof CreateSiteDto !== "undefined" && CreateSiteDto) === "function" ? site_controller_b : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], SiteController.prototype, "create", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], SiteController.prototype, "findAll", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], SiteController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Patch)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, typeof (site_controller_c = typeof UpdateSiteDto !== "undefined" && UpdateSiteDto) === "function" ? site_controller_c : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], SiteController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], SiteController.prototype, "remove", null);
SiteController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('site'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (site_controller_a = typeof SiteService !== "undefined" && SiteService) === "function" ? site_controller_a : Object])
], SiteController);


;// CONCATENATED MODULE: ./src/modules/site/site.module.ts







let SiteModule = class SiteModule {
};
SiteModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([Site, Client])],
        controllers: [SiteController],
        providers: [SiteService],
        exports: [SiteService],
    })
], SiteModule);


;// CONCATENATED MODULE: ./src/modules/contact/contact.service.ts
var contact_service_a;





let ContactService = class ContactService {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    create(createContactDto) {
        return this.contactRepository.save(createContactDto);
    }
    findAll() {
        return this.contactRepository.find();
    }
    findOne(id) {
        return this.contactRepository.findOne({ where: { id } });
    }
    update(id, updateContactDto) {
        return this.contactRepository.update(id, updateContactDto);
    }
    remove(id) {
        return this.contactRepository.delete(id);
    }
};
ContactService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(Contact)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (contact_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? contact_service_a : Object])
], ContactService);


;// CONCATENATED MODULE: ./src/modules/contact/dto/update-contact.dto.ts


class UpdateContactDto extends (0,mapped_types_namespaceObject.PartialType)(CreateContactDto) {
}

;// CONCATENATED MODULE: ./src/modules/contact/contact.controller.ts
var contact_controller_a, contact_controller_b, contact_controller_c;





let ContactController = class ContactController {
    constructor(contactService) {
        this.contactService = contactService;
    }
    create(createContactDto) {
        return this.contactService.create(createContactDto);
    }
    findAll() {
        return this.contactService.findAll();
    }
    findOne(id) {
        return this.contactService.findOne(id);
    }
    update(id, updateContactDto) {
        return this.contactService.update(id, updateContactDto);
    }
    remove(id) {
        return this.contactService.remove(id);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (contact_controller_b = typeof CreateContactDto !== "undefined" && CreateContactDto) === "function" ? contact_controller_b : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], ContactController.prototype, "create", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], ContactController.prototype, "findAll", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], ContactController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Patch)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, typeof (contact_controller_c = typeof UpdateContactDto !== "undefined" && UpdateContactDto) === "function" ? contact_controller_c : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], ContactController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], ContactController.prototype, "remove", null);
ContactController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('contact'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (contact_controller_a = typeof ContactService !== "undefined" && ContactService) === "function" ? contact_controller_a : Object])
], ContactController);


;// CONCATENATED MODULE: ./src/modules/contact/contact.module.ts







let ContactModule = class ContactModule {
};
ContactModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([Contact, Client])],
        controllers: [ContactController],
        providers: [ContactService],
        exports: [ContactService]
    })
], ContactModule);


;// CONCATENATED MODULE: ./src/modules/industry/industry.service.ts
var industry_service_a;





let IndustryService = class IndustryService {
    constructor(industryRepository) {
        this.industryRepository = industryRepository;
    }
    create(createIndustryDto) {
        return 'This action adds a new industry';
    }
    findAll() {
        return this.industryRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} industry`;
    }
    update(id, updateIndustryDto) {
        return `This action updates a #${id} industry`;
    }
    remove(id) {
        return `This action removes a #${id} industry`;
    }
};
IndustryService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(Industry)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (industry_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? industry_service_a : Object])
], IndustryService);


;// CONCATENATED MODULE: ./src/modules/industry/dto/create-industry.dto.ts


class CreateIndustryDto {
}
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateIndustryDto.prototype, "name", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_class_validator_namespaceObject.IsNotEmpty)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateIndustryDto.prototype, "description", void 0);

;// CONCATENATED MODULE: ./src/modules/industry/dto/update-industry.dto.ts


class UpdateIndustryDto extends (0,mapped_types_namespaceObject.PartialType)(CreateIndustryDto) {
}

;// CONCATENATED MODULE: ./src/modules/industry/industry.controller.ts
var industry_controller_a, industry_controller_b, industry_controller_c;





let IndustryController = class IndustryController {
    constructor(industryService) {
        this.industryService = industryService;
    }
    create(createIndustryDto) {
        return this.industryService.create(createIndustryDto);
    }
    findAll() {
        return this.industryService.findAll();
    }
    findOne(id) {
        return this.industryService.findOne(+id);
    }
    update(id, updateIndustryDto) {
        return this.industryService.update(+id, updateIndustryDto);
    }
    remove(id) {
        return this.industryService.remove(+id);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (industry_controller_b = typeof CreateIndustryDto !== "undefined" && CreateIndustryDto) === "function" ? industry_controller_b : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], IndustryController.prototype, "create", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], IndustryController.prototype, "findAll", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], IndustryController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Patch)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, typeof (industry_controller_c = typeof UpdateIndustryDto !== "undefined" && UpdateIndustryDto) === "function" ? industry_controller_c : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], IndustryController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], IndustryController.prototype, "remove", null);
IndustryController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('industry'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (industry_controller_a = typeof IndustryService !== "undefined" && IndustryService) === "function" ? industry_controller_a : Object])
], IndustryController);


;// CONCATENATED MODULE: ./src/modules/industry/industry.module.ts






let IndustryModule = class IndustryModule {
};
IndustryModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([Industry])],
        controllers: [IndustryController],
        providers: [IndustryService],
        exports: [IndustryService]
    })
], IndustryModule);


;// CONCATENATED MODULE: ./src/modules/vehicle/vehicle.service.ts
var vehicle_service_a;





let VehicleService = class VehicleService {
    constructor(vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }
    create(createVehicleDto) {
        return this.vehicleRepository.save(createVehicleDto);
    }
    findAll() {
        return this.vehicleRepository.find();
    }
    findOne(id) {
        return this.vehicleRepository.findOne({ where: { id } });
    }
    update(id, updateVehicleDto) {
        return this.vehicleRepository.update(id, updateVehicleDto);
    }
    remove(id) {
        return this.vehicleRepository.delete(id);
    }
};
VehicleService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(Vehicle)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (vehicle_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? vehicle_service_a : Object])
], VehicleService);


;// CONCATENATED MODULE: ./src/modules/vehicle/dto/create-vehicle.dto.ts
var create_vehicle_dto_a;




class CreateVehicleDto {
}
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateVehicleDto.prototype, "make", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateVehicleDto.prototype, "model", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsNumber)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], CreateVehicleDto.prototype, "year", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsEnum)(VehicleType),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (create_vehicle_dto_a = typeof VehicleType !== "undefined" && VehicleType) === "function" ? create_vehicle_dto_a : Object)
], CreateVehicleDto.prototype, "type", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateVehicleDto.prototype, "licensePlate", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Optional)(),
    (0,external_class_validator_namespaceObject.IsNumber)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], CreateVehicleDto.prototype, "capacity", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Optional)(),
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateVehicleDto.prototype, "currentLocation", void 0);

;// CONCATENATED MODULE: ./src/modules/vehicle/dto/update-vehicle.dto.ts


class UpdateVehicleDto extends (0,mapped_types_namespaceObject.PartialType)(CreateVehicleDto) {
}

;// CONCATENATED MODULE: ./src/modules/vehicle/vehicle.controller.ts
var vehicle_controller_a, vehicle_controller_b, vehicle_controller_c, vehicle_controller_d, vehicle_controller_e, vehicle_controller_f, vehicle_controller_g, vehicle_controller_h;





let VehicleController = class VehicleController {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
    }
    create(createVehicleDto) {
        return this.vehicleService.create(createVehicleDto);
    }
    findAll() {
        return this.vehicleService.findAll();
    }
    findOne(id) {
        return this.vehicleService.findOne(id);
    }
    update(id, updateVehicleDto) {
        return this.vehicleService.update(id, updateVehicleDto);
    }
    remove(id) {
        return this.vehicleService.remove(id);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (vehicle_controller_b = typeof CreateVehicleDto !== "undefined" && CreateVehicleDto) === "function" ? vehicle_controller_b : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (vehicle_controller_c = typeof Promise !== "undefined" && Promise) === "function" ? vehicle_controller_c : Object)
], VehicleController.prototype, "create", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (vehicle_controller_d = typeof Promise !== "undefined" && Promise) === "function" ? vehicle_controller_d : Object)
], VehicleController.prototype, "findAll", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (vehicle_controller_e = typeof Promise !== "undefined" && Promise) === "function" ? vehicle_controller_e : Object)
], VehicleController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Patch)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, typeof (vehicle_controller_f = typeof UpdateVehicleDto !== "undefined" && UpdateVehicleDto) === "function" ? vehicle_controller_f : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (vehicle_controller_g = typeof Promise !== "undefined" && Promise) === "function" ? vehicle_controller_g : Object)
], VehicleController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (vehicle_controller_h = typeof Promise !== "undefined" && Promise) === "function" ? vehicle_controller_h : Object)
], VehicleController.prototype, "remove", null);
VehicleController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('vehicle'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (vehicle_controller_a = typeof VehicleService !== "undefined" && VehicleService) === "function" ? vehicle_controller_a : Object])
], VehicleController);


;// CONCATENATED MODULE: ./src/modules/vehicle/vehicle.module.ts






let VehicleModule = class VehicleModule {
};
VehicleModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([Vehicle])],
        controllers: [VehicleController],
        providers: [VehicleService],
    })
], VehicleModule);


;// CONCATENATED MODULE: ./src/modules/trip/trip.service.ts
var trip_service_a;





let TripService = class TripService {
    constructor(tripRepository) {
        this.tripRepository = tripRepository;
    }
    create(createTripDto) {
        return this.tripRepository.save(createTripDto);
    }
    findAll() {
        return this.tripRepository.find();
    }
    findOne(id) {
        return this.tripRepository.findOne({ where: { id } });
    }
    update(id, updateTripDto) {
        return this.tripRepository.update(id, updateTripDto);
    }
    remove(id) {
        return this.tripRepository.delete(id);
    }
};
TripService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(Trip)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (trip_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? trip_service_a : Object])
], TripService);


;// CONCATENATED MODULE: ./src/modules/trip/dto/create-trip.dto.ts
var create_trip_dto_a, create_trip_dto_b;


class CreateTripDto {
}
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateTripDto.prototype, "destination", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsDate)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (create_trip_dto_a = typeof Date !== "undefined" && Date) === "function" ? create_trip_dto_a : Object)
], CreateTripDto.prototype, "startTime", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsDate)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (create_trip_dto_b = typeof Date !== "undefined" && Date) === "function" ? create_trip_dto_b : Object)
], CreateTripDto.prototype, "endTime", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateTripDto.prototype, "status", void 0);

;// CONCATENATED MODULE: ./src/modules/trip/dto/update-trip.dto.ts


class UpdateTripDto extends (0,mapped_types_namespaceObject.PartialType)(CreateTripDto) {
}

;// CONCATENATED MODULE: ./src/modules/trip/trip.controller.ts
var trip_controller_a, trip_controller_b, trip_controller_c, trip_controller_d, trip_controller_e, trip_controller_f, trip_controller_g, trip_controller_h;





let TripController = class TripController {
    constructor(tripService) {
        this.tripService = tripService;
    }
    create(createTripDto) {
        return this.tripService.create(createTripDto);
    }
    findAll() {
        return this.tripService.findAll();
    }
    findOne(id) {
        return this.tripService.findOne(id);
    }
    update(id, updateTripDto) {
        return this.tripService.update(id, updateTripDto);
    }
    remove(id) {
        return this.tripService.remove(id);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (trip_controller_b = typeof CreateTripDto !== "undefined" && CreateTripDto) === "function" ? trip_controller_b : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (trip_controller_c = typeof Promise !== "undefined" && Promise) === "function" ? trip_controller_c : Object)
], TripController.prototype, "create", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (trip_controller_d = typeof Promise !== "undefined" && Promise) === "function" ? trip_controller_d : Object)
], TripController.prototype, "findAll", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (trip_controller_e = typeof Promise !== "undefined" && Promise) === "function" ? trip_controller_e : Object)
], TripController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Patch)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, typeof (trip_controller_f = typeof UpdateTripDto !== "undefined" && UpdateTripDto) === "function" ? trip_controller_f : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (trip_controller_g = typeof Promise !== "undefined" && Promise) === "function" ? trip_controller_g : Object)
], TripController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (trip_controller_h = typeof Promise !== "undefined" && Promise) === "function" ? trip_controller_h : Object)
], TripController.prototype, "remove", null);
TripController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('trip'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (trip_controller_a = typeof TripService !== "undefined" && TripService) === "function" ? trip_controller_a : Object])
], TripController);


;// CONCATENATED MODULE: ./src/modules/trip/trip.module.ts






let TripModule = class TripModule {
};
TripModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([Trip])],
        controllers: [TripController],
        providers: [TripService],
    })
], TripModule);


;// CONCATENATED MODULE: ./src/modules/order/order.service.ts
var order_service_a;





let OrderService = class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    create(createOrderDto) {
        return this.orderRepository.save(createOrderDto);
    }
    findAll() {
        return this.orderRepository.find();
    }
    findOne(id) {
        return this.orderRepository.findOne({ where: { id } });
    }
    update(id, updateOrderDto) {
        return this.orderRepository.update(id, updateOrderDto);
    }
    remove(id) {
        return this.orderRepository.delete(id);
    }
};
OrderService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(Order)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (order_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? order_service_a : Object])
], OrderService);


;// CONCATENATED MODULE: ./src/modules/order/dto/create-order.dto.ts
var create_order_dto_a, create_order_dto_b, create_order_dto_c;



class CreateOrderDto {
}
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsNumber)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], CreateOrderDto.prototype, "orderNumber", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateOrderDto.prototype, "customerId", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateOrderDto.prototype, "pickupAddress", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateOrderDto.prototype, "deliveryAddress", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsEnum)(OrderType),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (create_order_dto_a = typeof OrderType !== "undefined" && OrderType) === "function" ? create_order_dto_a : Object)
], CreateOrderDto.prototype, "type", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsEnum)(OrderStatus),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (create_order_dto_b = typeof OrderStatus !== "undefined" && OrderStatus) === "function" ? create_order_dto_b : Object)
], CreateOrderDto.prototype, "status", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsOptional)(),
    (0,external_class_validator_namespaceObject.IsEnum)(OrderPriority),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (create_order_dto_c = typeof OrderPriority !== "undefined" && OrderPriority) === "function" ? create_order_dto_c : Object)
], CreateOrderDto.prototype, "priority", void 0);

;// CONCATENATED MODULE: ./src/modules/order/dto/update-order.dto.ts


class UpdateOrderDto extends (0,mapped_types_namespaceObject.PartialType)(CreateOrderDto) {
}

;// CONCATENATED MODULE: ./src/modules/order/order.controller.ts
var order_controller_a, order_controller_b, order_controller_c, order_controller_d, order_controller_e, order_controller_f, order_controller_g, order_controller_h;





let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    create(createOrderDto) {
        return this.orderService.create(createOrderDto);
    }
    findAll() {
        return this.orderService.findAll();
    }
    findOne(id) {
        return this.orderService.findOne(id);
    }
    update(id, updateOrderDto) {
        return this.orderService.update(id, updateOrderDto);
    }
    remove(id) {
        return this.orderService.remove(id);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (order_controller_b = typeof CreateOrderDto !== "undefined" && CreateOrderDto) === "function" ? order_controller_b : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (order_controller_c = typeof Promise !== "undefined" && Promise) === "function" ? order_controller_c : Object)
], OrderController.prototype, "create", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (order_controller_d = typeof Promise !== "undefined" && Promise) === "function" ? order_controller_d : Object)
], OrderController.prototype, "findAll", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (order_controller_e = typeof Promise !== "undefined" && Promise) === "function" ? order_controller_e : Object)
], OrderController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Patch)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, typeof (order_controller_f = typeof UpdateOrderDto !== "undefined" && UpdateOrderDto) === "function" ? order_controller_f : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (order_controller_g = typeof Promise !== "undefined" && Promise) === "function" ? order_controller_g : Object)
], OrderController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (order_controller_h = typeof Promise !== "undefined" && Promise) === "function" ? order_controller_h : Object)
], OrderController.prototype, "remove", null);
OrderController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('order'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (order_controller_a = typeof OrderService !== "undefined" && OrderService) === "function" ? order_controller_a : Object])
], OrderController);


;// CONCATENATED MODULE: ./src/modules/order/order.module.ts








let OrderModule = class OrderModule {
};
OrderModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([Order, Client, User])],
        controllers: [OrderController],
        providers: [OrderService],
    })
], OrderModule);


;// CONCATENATED MODULE: ./src/modules/notification/notification.service.ts
var notification_service_a;





let NotificationService = class NotificationService {
    constructor(notificationRepository) {
        this.notificationRepository = notificationRepository;
    }
    create(createNotificationDto) {
        return this.notificationRepository.save(createNotificationDto);
    }
    findAll() {
        return this.notificationRepository.find();
    }
    findOne(id) {
        return this.notificationRepository.findOne({ where: { id } });
    }
    update(id, updateNotificationDto) {
        return this.notificationRepository.update(id, updateNotificationDto);
    }
    remove(id) {
        return this.notificationRepository.delete(id);
    }
};
NotificationService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(Notification)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (notification_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? notification_service_a : Object])
], NotificationService);


;// CONCATENATED MODULE: ./src/modules/notification/dto/create-notification.dto.ts


class CreateNotificationDto {
}
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateNotificationDto.prototype, "userId", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateNotificationDto.prototype, "message", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateNotificationDto.prototype, "status", void 0);

;// CONCATENATED MODULE: ./src/modules/notification/dto/update-notification.dto.ts


class UpdateNotificationDto extends (0,mapped_types_namespaceObject.PartialType)(CreateNotificationDto) {
}

;// CONCATENATED MODULE: ./src/modules/notification/notification.controller.ts
var notification_controller_a, notification_controller_b, notification_controller_c, notification_controller_d, notification_controller_e, notification_controller_f, notification_controller_g, notification_controller_h;





let NotificationController = class NotificationController {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    create(createNotificationDto) {
        return this.notificationService.create(createNotificationDto);
    }
    findAll() {
        return this.notificationService.findAll();
    }
    findOne(id) {
        return this.notificationService.findOne(id);
    }
    update(id, updateNotificationDto) {
        return this.notificationService.update(id, updateNotificationDto);
    }
    remove(id) {
        return this.notificationService.remove(id);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (notification_controller_b = typeof CreateNotificationDto !== "undefined" && CreateNotificationDto) === "function" ? notification_controller_b : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (notification_controller_c = typeof Promise !== "undefined" && Promise) === "function" ? notification_controller_c : Object)
], NotificationController.prototype, "create", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (notification_controller_d = typeof Promise !== "undefined" && Promise) === "function" ? notification_controller_d : Object)
], NotificationController.prototype, "findAll", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (notification_controller_e = typeof Promise !== "undefined" && Promise) === "function" ? notification_controller_e : Object)
], NotificationController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Patch)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, typeof (notification_controller_f = typeof UpdateNotificationDto !== "undefined" && UpdateNotificationDto) === "function" ? notification_controller_f : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (notification_controller_g = typeof Promise !== "undefined" && Promise) === "function" ? notification_controller_g : Object)
], NotificationController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (notification_controller_h = typeof Promise !== "undefined" && Promise) === "function" ? notification_controller_h : Object)
], NotificationController.prototype, "remove", null);
NotificationController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('notification'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (notification_controller_a = typeof NotificationService !== "undefined" && NotificationService) === "function" ? notification_controller_a : Object])
], NotificationController);


;// CONCATENATED MODULE: ./src/modules/notification/notification.module.ts






let NotificationModule = class NotificationModule {
};
NotificationModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([Notification])],
        controllers: [NotificationController],
        providers: [NotificationService],
    })
], NotificationModule);


;// CONCATENATED MODULE: ./src/modules/route/route.service.ts
var route_service_a;





let RouteService = class RouteService {
    constructor(routeRepository) {
        this.routeRepository = routeRepository;
    }
    create(createRouteDto) {
        return this.routeRepository.save(createRouteDto);
    }
    findAll() {
        return this.routeRepository.find();
    }
    findOne(id) {
        return this.routeRepository.findOne({ where: { id } });
    }
    update(id, updateRouteDto) {
        return this.routeRepository.update(id, updateRouteDto);
    }
    remove(id) {
        return this.routeRepository.delete(id);
    }
};
RouteService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(Route)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (route_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? route_service_a : Object])
], RouteService);


;// CONCATENATED MODULE: ./src/modules/route/dto/create-route.dto.ts
var create_route_dto_a, create_route_dto_b;


class CreateRouteDto {
}
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsNumber)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], CreateRouteDto.prototype, "orderID", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateRouteDto.prototype, "driverID", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsDate)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (create_route_dto_a = typeof Date !== "undefined" && Date) === "function" ? create_route_dto_a : Object)
], CreateRouteDto.prototype, "startTime", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsDate)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (create_route_dto_b = typeof Date !== "undefined" && Date) === "function" ? create_route_dto_b : Object)
], CreateRouteDto.prototype, "endTime", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsObject)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Object)
], CreateRouteDto.prototype, "routePath", void 0);

;// CONCATENATED MODULE: ./src/modules/route/dto/update-route.dto.ts


class UpdateRouteDto extends (0,mapped_types_namespaceObject.PartialType)(CreateRouteDto) {
}

;// CONCATENATED MODULE: ./src/modules/route/route.controller.ts
var route_controller_a, route_controller_b, route_controller_c, route_controller_d, route_controller_e, route_controller_f, route_controller_g, route_controller_h;





let RouteController = class RouteController {
    constructor(routeService) {
        this.routeService = routeService;
    }
    create(createRouteDto) {
        return this.routeService.create(createRouteDto);
    }
    findAll() {
        return this.routeService.findAll();
    }
    findOne(id) {
        return this.routeService.findOne(+id);
    }
    update(id, updateRouteDto) {
        return this.routeService.update(+id, updateRouteDto);
    }
    remove(id) {
        return this.routeService.remove(+id);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (route_controller_b = typeof CreateRouteDto !== "undefined" && CreateRouteDto) === "function" ? route_controller_b : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (route_controller_c = typeof Promise !== "undefined" && Promise) === "function" ? route_controller_c : Object)
], RouteController.prototype, "create", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (route_controller_d = typeof Promise !== "undefined" && Promise) === "function" ? route_controller_d : Object)
], RouteController.prototype, "findAll", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (route_controller_e = typeof Promise !== "undefined" && Promise) === "function" ? route_controller_e : Object)
], RouteController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Patch)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, typeof (route_controller_f = typeof UpdateRouteDto !== "undefined" && UpdateRouteDto) === "function" ? route_controller_f : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (route_controller_g = typeof Promise !== "undefined" && Promise) === "function" ? route_controller_g : Object)
], RouteController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (route_controller_h = typeof Promise !== "undefined" && Promise) === "function" ? route_controller_h : Object)
], RouteController.prototype, "remove", null);
RouteController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('route'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (route_controller_a = typeof RouteService !== "undefined" && RouteService) === "function" ? route_controller_a : Object])
], RouteController);


;// CONCATENATED MODULE: ./src/modules/route/route.module.ts






let RouteModule = class RouteModule {
};
RouteModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([Route])],
        controllers: [RouteController],
        providers: [RouteService],
    })
], RouteModule);


;// CONCATENATED MODULE: ./src/modules/depot/depot.service.ts
var depot_service_a;





let DepotService = class DepotService {
    constructor(depotRepository) {
        this.depotRepository = depotRepository;
    }
    create(createDepotDto) {
        return this.depotRepository.save(createDepotDto);
    }
    findAll() {
        return this.depotRepository.find();
    }
    findOne(id) {
        return this.depotRepository.findOne({ where: { id } });
    }
    update(id, updateDepotDto) {
        return this.depotRepository.update(id, updateDepotDto);
    }
    remove(id) {
        return this.depotRepository.delete(id);
    }
};
DepotService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(Depot)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (depot_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? depot_service_a : Object])
], DepotService);


;// CONCATENATED MODULE: ./src/modules/depot/dto/create-depot.dto.ts


class CreateDepotDto {
}
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateDepotDto.prototype, "name", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateDepotDto.prototype, "address", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateDepotDto.prototype, "latitude", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsString)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], CreateDepotDto.prototype, "longitude", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_class_validator_namespaceObject.IsNumber)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], CreateDepotDto.prototype, "capacity", void 0);

;// CONCATENATED MODULE: ./src/modules/depot/dto/update-depot.dto.ts


class UpdateDepotDto extends (0,mapped_types_namespaceObject.PartialType)(CreateDepotDto) {
}

;// CONCATENATED MODULE: ./src/modules/depot/depot.controller.ts
var depot_controller_a, depot_controller_b, depot_controller_c;





let DepotController = class DepotController {
    constructor(depotService) {
        this.depotService = depotService;
    }
    create(createDepotDto) {
        return this.depotService.create(createDepotDto);
    }
    findAll() {
        return this.depotService.findAll();
    }
    findOne(id) {
        return this.depotService.findOne(id);
    }
    update(id, updateDepotDto) {
        return this.depotService.update(id, updateDepotDto);
    }
    remove(id) {
        return this.depotService.remove(id);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (depot_controller_b = typeof CreateDepotDto !== "undefined" && CreateDepotDto) === "function" ? depot_controller_b : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], DepotController.prototype, "create", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], DepotController.prototype, "findAll", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], DepotController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Patch)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, typeof (depot_controller_c = typeof UpdateDepotDto !== "undefined" && UpdateDepotDto) === "function" ? depot_controller_c : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], DepotController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], DepotController.prototype, "remove", null);
DepotController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('depot'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (depot_controller_a = typeof DepotService !== "undefined" && DepotService) === "function" ? depot_controller_a : Object])
], DepotController);


;// CONCATENATED MODULE: ./src/modules/depot/depot.module.ts






let DepotModule = class DepotModule {
};
DepotModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([Depot])],
        controllers: [DepotController],
        providers: [DepotService],
    })
], DepotModule);


;// CONCATENATED MODULE: ./src/modules/index.ts





























;// CONCATENATED MODULE: ./src/app/app.module.ts











let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(AuthMiddleware).forRoutes({ path: '*', method: common_namespaceObject.RequestMethod.ALL });
    }
};
AppModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [
            setup_namespaceObject.SentryModule.forRoot(),
            config_namespaceObject.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            typeorm_namespaceObject.TypeOrmModule.forRootAsync({
                imports: [DBConfigModule],
                useClass: DBConfigService,
                inject: [DBConfigService],
            }),
            AuthModule,
            ClientModule,
            EmployeeModule,
            RoleModule,
            UserModule,
            SiteModule,
            ContactModule,
            IndustryModule,
            VehicleModule,
            TripModule,
            NotificationModule,
            OrderModule,
            RouteModule,
        ],
        controllers: [AppController],
        providers: [AppService, AuthService],
    })
], AppModule);


;// CONCATENATED MODULE: ./src/main.ts

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */




function bootstrap() {
    return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_namespaceObject.NestFactory.create(AppModule);
        const isProduction = process.env.NODE_ENV === 'production';
        app.enableCors({
            origin: isProduction ? process.env.CORS_ORIGIN : 'http://localhost:4200',
            credentials: true, // Allow sending credentials (cookies, authorization headers)
        });
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3000;
        yield app.listen(port);
        // Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
        common_namespaceObject.Logger.log(`🚀 Application is running on: ${isProduction ? process.env.LOCATR_API_URL : 'http://localhost:3000'}/${globalPrefix}`);
    });
}
bootstrap();

/******/ })()
;
//# sourceMappingURL=main.js.map