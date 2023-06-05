"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const User = new mongoose_1.Schema({
    firstname: String,
    lastname: String,
    age: Number
});
exports.default = (0, mongoose_1.model)("User", User);
