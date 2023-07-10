"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const jwt_middleware_1 = require("../middlewares/jwt.middleware");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let BookController = class BookController {
    constructor(bookmodelRepository, req) {
        this.bookmodelRepository = bookmodelRepository;
        this.req = req;
    }
    async create(bookmodel, token) {
        return this.bookmodelRepository.create(bookmodel);
    }
    async count(where) {
        return this.bookmodelRepository.count(where);
    }
    async find(token, filter) {
        (0, jwt_middleware_1.verifyToken)(token);
        return this.bookmodelRepository.find(filter);
    }
    async updateAll(bookmodel, where) {
        return this.bookmodelRepository.updateAll(bookmodel, where);
    }
    async findById(id, filter) {
        return this.bookmodelRepository.findById(id, filter);
    }
    async updateById(id, bookmodel) {
        await this.bookmodelRepository.updateById(id, bookmodel);
    }
    async replaceById(id, bookmodel) {
        await this.bookmodelRepository.replaceById(id, bookmodel);
    }
    async deleteById(id) {
        await this.bookmodelRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/book'),
    (0, rest_1.response)(200, {
        description: 'Bookmodel model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Bookmodel) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Bookmodel, {
                    title: 'NewBookmodel',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.header.string('authorization')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], BookController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/book/count'),
    (0, rest_1.response)(200, {
        description: 'Bookmodel model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Bookmodel)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BookController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/book'),
    (0, rest_1.response)(200, {
        description: 'Array of Bookmodel model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Bookmodel, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.header.string('authorization')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Bookmodel)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BookController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/book'),
    (0, rest_1.response)(200, {
        description: 'Bookmodel PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Bookmodel, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Bookmodel)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Bookmodel, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BookController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/book/{id}'),
    (0, rest_1.response)(200, {
        description: 'Bookmodel model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Bookmodel, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Bookmodel, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BookController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/book/{id}'),
    (0, rest_1.response)(204, {
        description: 'Bookmodel PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Bookmodel, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Bookmodel]),
    tslib_1.__metadata("design:returntype", Promise)
], BookController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/book/{id}'),
    (0, rest_1.response)(204, {
        description: 'Bookmodel PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Bookmodel]),
    tslib_1.__metadata("design:returntype", Promise)
], BookController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/book/{id}'),
    (0, rest_1.response)(204, {
        description: 'Bookmodel DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], BookController.prototype, "deleteById", null);
BookController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.BookmodelRepository)),
    tslib_1.__param(1, (0, core_1.inject)(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.BookmodelRepository, Object])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=book.controller.js.map