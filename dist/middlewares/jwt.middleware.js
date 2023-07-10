"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.signToken = void 0;
const rest_1 = require("@loopback/rest");
const jsonwebtoken_1 = require("jsonwebtoken");
const secretKey = 'veryverysecret';
function signToken(email, id) {
    const token = (0, jsonwebtoken_1.sign)({ sup: id, email: email }, secretKey, { expiresIn: '1d' });
    return token;
}
exports.signToken = signToken;
function verifyToken(token) {
    const split = token === null || token === void 0 ? void 0 : token.split(' ')[1];
    try {
        const decoded = (0, jsonwebtoken_1.verify)(split, secretKey);
        return decoded;
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
            throw new rest_1.HttpErrors.Unauthorized('Invalid token');
        }
        else {
            throw error;
        }
    }
}
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.middleware.js.map