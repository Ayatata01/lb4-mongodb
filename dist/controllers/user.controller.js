"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const bcrypt_1 = require("bcrypt");
const jwt_middleware_1 = require("../middlewares/jwt.middleware");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UserController = class UserController {
    constructor(userRepository, req, res) {
        this.userRepository = userRepository;
        this.req = req;
        this.res = res;
    }
    async signup(user) {
        // console.log(user.name)
        // console.log(this.req.body)
        try {
            const findEmailRegistered = await this.userRepository.findOne({
                where: {
                    email: user.email
                }
            });
            if (findEmailRegistered) {
                throw rest_1.HttpErrors.BadRequest('email has taken');
            }
        }
        catch (error) {
            throw (0, rest_1.HttpErrors)(error);
        }
        user.password = await (0, bcrypt_1.hash)(user.password, 10);
        const saveData = await this.userRepository.create(user);
        return {
            saveData
        };
    }
    async signin(credentials) {
        const user = await this.userRepository.findOne({
            where: {
                email: credentials.email
            }
        });
        if (!user)
            throw rest_1.HttpErrors.NotFound('Invalid Credentials');
        const passwordMatched = await (0, bcrypt_1.compare)(credentials.password, user.password);
        if (!passwordMatched)
            throw rest_1.HttpErrors.NotFound('Invalid Credentials');
        const token = (0, jwt_middleware_1.signToken)(user.email, user.id);
        return {
            token
        };
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/auth/signup'),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.User]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "signup", null);
tslib_1.__decorate([
    (0, rest_1.post)('/auth/signin'),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "signin", null);
UserController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserRepository)),
    tslib_1.__param(1, (0, core_1.inject)(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__param(2, (0, core_1.inject)(rest_1.RestBindings.Http.RESPONSE)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository, Object, Object])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map