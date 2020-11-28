"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
exports.default = async (id) => {
    await fs.copySync(`./images/${id}.png`, `./oldImages/${id}.png`);
    await fs.removeSync(`./images/${id}.png`);
};
//# sourceMappingURL=backupImage.js.map