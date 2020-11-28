var _a, _b;
import { Gem, Material } from '@code-of-everand/types-misc';
export var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (Gender = {}));
;
// Data
var DefaultVisualAppearance = {
    hairColor: 0,
    hairStyle: 0,
    skinColor: 0,
    gender: Gender.Male
};
var DefaultItemAppearance = {
    head: 0,
    top: 0,
    bottoms: 0,
    shoes: 0,
    hand: 0
};
var DefaultAppearance = {
    itemAppearance: DefaultItemAppearance,
    visualAppearance: DefaultVisualAppearance
};
var DefaultUserGems = (_a = {},
    _a[Gem.Bolt] = 0,
    _a[Gem.Chill] = 0,
    _a[Gem.Dust] = 0,
    _a[Gem.Flood] = 0,
    _a[Gem.Lava] = 0,
    _a[Gem.Light] = 0,
    _a[Gem.Muck] = 0,
    _a[Gem.Shine] = 0,
    _a[Gem.Vine] = 0,
    _a);
var DefaultUserMaterials = (_b = {},
    _b[Material.Booster] = 0,
    _b[Material.Cog] = 0,
    _b[Material.Engine] = 0,
    _b[Material.Gauge] = 0,
    _b[Material.Spring] = 0,
    _b);
var DefaultTrainingStats = {
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
var DefaultLeaderboardStats = {
    allTimeCritterCourtDonors: 0,
    allTimeExplorerStreak: 0,
    allTimeSafeCrossingStreak: 0,
    critterCourtDonors: 0,
    currentCurrency: 0,
    explorerStreak: 0,
    safeCrossingStreak: 0,
    weeklyLevelUps: 0
};
var DefaultCommonStats = {
    CP: 0,
    CURRENCY: 0,
    LEVEL: 0,
    MAXCP: 0,
    MAXMP: 0,
    MP: 0,
    XP: 0
};
var DefaultUserStats = {
    trainingStats: DefaultTrainingStats,
    leaderboardStats: DefaultLeaderboardStats,
    commonStats: DefaultCommonStats,
};
var DefaultUseritems = {};
export var DefaultUserData = {
    name: [0, 0, 0],
    appearance: DefaultAppearance,
    gems: DefaultUserGems,
    materials: DefaultUserMaterials,
    stats: DefaultUserStats,
    items: DefaultUseritems
};
//# sourceMappingURL=index.js.map