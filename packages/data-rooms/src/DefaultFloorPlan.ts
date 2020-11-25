import { FloorPlan } from '@code-of-everand/types-map';

let _defaultFloorPlan: FloorPlan<0|1> = {};

for (let i=0; i<30; i++) {
  _defaultFloorPlan[i] = new Array((i % 2 == 0) ? 13: 12).fill(1).reduce((obj, v, i) => {
    obj[i] = v;
    return obj;
  }, {});
}

export const DefaultFloorPlan: FloorPlan<0|1> = _defaultFloorPlan;

export default DefaultFloorPlan;