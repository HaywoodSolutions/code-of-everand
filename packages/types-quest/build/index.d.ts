import { Gem, Material } from "@code-of-everand/types-misc";
export declare type Quest = {
    id: string;
    title: string;
    requiredLevel: number;
    parts: {
        descripton: string;
        accepting: {
            assignedByNPCId: string;
            description: string;
        };
        completing: {
            assignedByNPCId: string;
            description: string;
        };
        completed: {
            assignedByNPCId: string;
            description: string;
        };
        rewards?: {
            currency?: number;
            xp?: number;
            items: {
                gems?: Record<Gem, number>;
                materials?: Record<Material, number>;
                item?: Record<string, number>;
            };
        };
    }[];
};
