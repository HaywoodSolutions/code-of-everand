import { Gem, Material } from '@code-of-everand/types-misc';
import { CommonStat, LeaderboardStat, TrainingStat } from '@code-of-everand/types-stats';

export type User = {
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
type Gender = "boy" | "girl";

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