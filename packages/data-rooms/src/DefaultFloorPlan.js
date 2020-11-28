var _defaultFloorPlan = {};
for (var i = 0; i < 30; i++) {
    _defaultFloorPlan[i] = new Array((i % 2 == 0) ? 13 : 12).fill(1).reduce(function (obj, v, i) {
        obj[i] = v;
        return obj;
    }, {});
}
export var DefaultFloorPlan = _defaultFloorPlan;
export default DefaultFloorPlan;
//# sourceMappingURL=DefaultFloorPlan.js.map