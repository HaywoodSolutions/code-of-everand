import * as fs from 'fs-extra';
var isImageExists = function (id) {
    return fs.existsSync("./images/" + id + ".png");
};
export default isImageExists;
//# sourceMappingURL=isImageExists.js.map