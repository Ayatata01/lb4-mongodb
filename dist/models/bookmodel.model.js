"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookmodel = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Bookmodel = class Bookmodel extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Bookmodel.prototype, "book_name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Bookmodel.prototype, "desc", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Bookmodel.prototype, "author", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        mongodb: { dataType: 'ObjectId' }
    }),
    tslib_1.__metadata("design:type", Number)
], Bookmodel.prototype, "id", void 0);
Bookmodel = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Bookmodel);
exports.Bookmodel = Bookmodel;
//# sourceMappingURL=bookmodel.model.js.map