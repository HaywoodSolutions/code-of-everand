import { Cord } from "@code-of-everand/types-misc";
export declare type RoomSprite = {
    id: string;
    name: string;
    depth: [number, number];
    height: number;
    walkable: Record<number, number[]>;
};
export declare type RoomConnectionPoints = Record<string, {
    cord: Cord;
}>;
export declare type Room = {
    cordOnMap: Cord;
    region?: Region;
    walkable: FloorPlan<0 | 1>;
    channels: Channel[];
    connections: RoomConnectionPoints;
    roomSprites: {
        cord: Cord;
        sprite: string;
    }[];
};
export declare enum RoomConnectionType {
    "NS" = "NS",
    "WE" = "WE"
}
export declare type RoomConnection = {
    type: RoomConnectionType;
    roomIds: [Cord, Cord];
    position: number;
};
export declare type FloorPlan<T> = Record<number, Record<number, T>>;
export declare enum Region {
    theAcademy = "theAcademy",
    theSouthHeath = "theSouthHeath",
    villageOfWilloton = "villageOfWilloton",
    theBadwood = "theBadwood",
    villageOfRowanvale = "villageOfRowanvale",
    theBrambles = "theBrambles",
    theNorthHeath = "theNorthHeath",
    villageOfWallgrove = "villageOfWallgrove",
    theOldCityNorth = "theOldCityNorth",
    theOldCitySouth = "theOldCitySouth",
    theBogs = "theBogs",
    omegaIsland = "omegaIsland",
    theSteamFlats = "theSteamFlats"
}
export declare type RegionDescription = {
    name: string;
};
export declare type NPC = {
    npcId: string;
    name: string;
    roomId: string;
    position: [number, number];
    talk: string;
};
export declare type Channel = {
    name: string;
    monsters: Record<string, {
        chance: number;
        amount: number;
    }>;
};
