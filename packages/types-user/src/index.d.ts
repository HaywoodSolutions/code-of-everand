import { Gem, Material } from '@code-of-everand/types-misc';
import { CommonStat, LeaderboardStat, TrainingStat } from '@code-of-everand/types-stats';
import { Name } from './Names';
export declare type User = {
    name: Name;
    appearance: Appearance;
    gems: UserGems;
    materials: UserMaterials;
    stats: UserStats;
    items: UserItems;
};
export declare type Appearance = {
    itemAppearance: ItemAppearance;
    visualAppearance: VisualAppearance;
};
declare type HairColor = number;
declare type HairStyle = number;
declare type SkinColor = number;
export declare enum Gender {
    Male = "male",
    Female = "female"
}
export declare type VisualAppearance = {
    hairColor: HairColor;
    hairStyle: HairStyle;
    skinColor: SkinColor;
    gender: Gender;
};
export declare type ItemAppearance = {
    head: number;
    top: number;
    bottoms: number;
    shoes: number;
    hand: number;
};
export declare type UserGems = Record<Gem, number>;
export declare type UserItems = Record<string, number>;
export declare type UserMaterials = Record<Material, number>;
export declare type UserStats = {
    trainingStats: Record<TrainingStat, number>;
    leaderboardStats: Record<LeaderboardStat, number>;
    commonStats: Record<CommonStat, number>;
};
export declare const DefaultUserData: User;
export {};
