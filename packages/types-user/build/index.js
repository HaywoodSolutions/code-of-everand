"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultUserData = exports.Gender = void 0;
const types_misc_1 = require("@code-of-everand/types-misc");
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender = exports.Gender || (exports.Gender = {}));
;
// Data
const DefaultVisualAppearance = {
    hairColor: 0,
    hairStyle: 0,
    skinColor: 0,
    gender: Gender.Male
};
const DefaultItemAppearance = {
    head: 0,
    top: 0,
    bottoms: 0,
    shoes: 0,
    hand: 0
};
const DefaultAppearance = {
    itemAppearance: DefaultItemAppearance,
    visualAppearance: DefaultVisualAppearance
};
const DefaultUserGems = {
    [types_misc_1.Gem.Bolt]: 0,
    [types_misc_1.Gem.Chill]: 0,
    [types_misc_1.Gem.Dust]: 0,
    [types_misc_1.Gem.Flood]: 0,
    [types_misc_1.Gem.Lava]: 0,
    [types_misc_1.Gem.Light]: 0,
    [types_misc_1.Gem.Muck]: 0,
    [types_misc_1.Gem.Shine]: 0,
    [types_misc_1.Gem.Vine]: 0
};
const DefaultUserMaterials = {
    [types_misc_1.Material.Booster]: 0,
    [types_misc_1.Material.Cog]: 0,
    [types_misc_1.Material.Engine]: 0,
    [types_misc_1.Material.Gauge]: 0,
    [types_misc_1.Material.Spring]: 0
};
const DefaultTrainingStats = {
    criticalStrike: 0,
    elementalMastery: 0,
    initiative: 0,
    resistance: 0,
    spellAccuracy: 0,
    spellDuration: 0,
    tonicMastery: 0,
    trapping: 0,
    treasureHunting: 0
};
const DefaultLeaderboardStats = {
    allTimeCritterCourtDonors: 0,
    allTimeExplorerStreak: 0,
    allTimeSafeCrossingStreak: 0,
    critterCourtDonors: 0,
    currentCurrency: 0,
    explorerStreak: 0,
    safeCrossingStreak: 0,
    weeklyLevelUps: 0
};
const DefaultCommonStats = {
    CP: 0,
    CURRENCY: 0,
    LEVEL: 0,
    MAXCP: 0,
    MAXMP: 0,
    MP: 0,
    XP: 0
};
const DefaultUserStats = {
    trainingStats: DefaultTrainingStats,
    leaderboardStats: DefaultLeaderboardStats,
    commonStats: DefaultCommonStats,
};
const DefaultUseritems = {};
exports.DefaultUserData = {
    name: [0, 0, 0],
    appearance: DefaultAppearance,
    gems: DefaultUserGems,
    materials: DefaultUserMaterials,
    stats: DefaultUserStats,
    items: DefaultUseritems
};
//# sourceMappingURL=index.js.map