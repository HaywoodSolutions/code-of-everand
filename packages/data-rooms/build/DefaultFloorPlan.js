"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultFloorPlan = void 0;
let _defaultFloorPlan = {};
for (let i = 0; i < 30; i++) {
    _defaultFloorPlan[i] = new Array((i % 2 == 0) ? 13 : 12).fill(1).reduce((obj, v, i) => {
        obj[i] = v;
        return obj;
    }, {});
}
exports.DefaultFloorPlan = _defaultFloorPlan;
exports.default = exports.DefaultFloorPlan;
//# sourceMappingURL=DefaultFloorPlan.js.map