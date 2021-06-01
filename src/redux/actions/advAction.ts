import agent from "../../api/agent";
import { Advertisement } from "../../api/models/advertisement";
import { GET_ALL_ADVERTISEMENTS } from "./actionTypes";


export type AdvertisementAction = {
    type: string
    advertisements: Advertisement[]
}


//type DispatchType = (arg: AdvertisementAction) => AdvertisementAction;

export const getAllAdvertisements = (advertisements: Advertisement[]) => {
    return {
        type: GET_ALL_ADVERTISEMENTS,
        advertisements
    };
};