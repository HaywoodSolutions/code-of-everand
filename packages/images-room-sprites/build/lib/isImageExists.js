"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const isImageExists = (id) => {
    return fs.existsSync(`./images/${id}.png`);
};
exports.default = isImageExists;
//# sourceMappingURL=isImageExists.js.map