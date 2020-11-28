import { Gem, Material } from '@code-of-everand/types-misc';
import { CommonStat, LeaderboardStat, TrainingStat } from '@code-of-everand/types-stats';
import { Name } from './Names';

export type User = {
  name: Name,
  appearance: Appearance,
  gems: UserGems,
  materials: UserMaterials,
  stats: UserStats,
  items: UserItems
};

export type Appearance = {
  itemAppearance: ItemAppearance,
  visualAppearance: VisualAppearance
};

type HairColor = number;
type HairStyle = number;
type SkinColor = number;

export enum Gender {
  Male="male",
  Female="female"
};

export type VisualAppearance = {
  hairColor: HairColor,
  hairStyle: HairStyle,
  skinColor: SkinColor,
  gender: Gender
};

export type ItemAppearance = {
  head: number,
  top: number,
  bottoms: number,
  shoes: number,
  hand: number
};

export type UserGems = Record<Gem, number>;
export type UserItems = Record<string, number>;
export type UserMaterials = Record<Material, number>;

export type UserStats = {
  trainingStats: Record<TrainingStat, number>,
  leaderboardStats: Record<LeaderboardStat, number>,
  commonStats: Record<CommonStat, number>,
};

// Data

const DefaultVisualAppearance: VisualAppearance = {
  hairColor: 0,
  hairStyle: 0,
  skinColor: 0,
  gender: Gender.Male
};

const DefaultItemAppearance: ItemAppearance = {
  head: 0,
  top: 0,
  bottoms: 0,
  shoes: 0,
  hand: 0
};

const DefaultAppearance: Appearance = {
  itemAppearance: DefaultItemAppearance,
  visualAppearance: DefaultVisualAppearance
};

const DefaultUserGems: UserGems = {
  [Gem.Bolt]: 0,
  [Gem.Chill]: 0,
  [Gem.Dust]: 0,
  [Gem.Flood]: 0,
  [Gem.Lava]: 0,
  [Gem.Light]: 0,
  [Gem.Muck]: 0,
  [Gem.Shine]: 0,
  [Gem.Vine]: 0
}

const DefaultUserMaterials: UserMaterials = {
  [Material.Booster]: 0,
  [Material.Cog]: 0,
  [Material.Engine]: 0,
  [Material.Gauge]: 0,
  [Material.Spring]: 0
}

const DefaultTrainingStats: Record<TrainingStat, number> = {
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

const DefaultLeaderboardStats: Record<LeaderboardStat, number> = {
  allTimeCritterCourtDonors: 0,
  allTimeExplorerStreak: 0,
  allTimeSafeCrossingStreak: 0,
  critterCourtDonors: 0,
  currentCurrency: 0,
  explorerStreak: 0,
  safeCrossingStreak: 0,
  weeklyLevelUps: 0
};

const DefaultCommonStats: Record<CommonStat, number> = {
  CP: 0,
  CURRENCY: 0,
  LEVEL: 0,
  MAXCP: 0,
  MAXMP: 0,
  MP: 0,
  XP: 0
};

const DefaultUserStats: UserStats = {
  trainingStats: DefaultTrainingStats,
  leaderboardStats: DefaultLeaderboardStats,
  commonStats: DefaultCommonStats,
};

const DefaultUseritems: UserItems = {};

export const DefaultUserData: User = {
  name: [0,0,0],
  appearance: DefaultAppearance,
  gems: DefaultUserGems,
  materials: DefaultUserMaterials,
  stats: DefaultUserStats,
  items: DefaultUseritems
};