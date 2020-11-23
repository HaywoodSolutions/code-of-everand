import { Gem, Material } from "@code-of-everand/types-misc";

export type Trap = {
	name: string,
	gems: Gem[],
	damage: number,
	partsNeeded: Record<Gem|Material, number>
};