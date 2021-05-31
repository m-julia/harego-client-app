import { Member } from "./member";

export interface Advertisement {
    fromLocation: string;
    toLocation: string;
    tripDate: string;
    weight: number;
    price: number;
    description: string;
    member: Member;
    memberId: string;
    createdAt: string;
    isCompleted: boolean;
    id: string;
}


