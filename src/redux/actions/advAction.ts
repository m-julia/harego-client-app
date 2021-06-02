import agent from "../../api/agent";
import { Advertisement } from "../../api/models/advertisement";
import { SET_ALL_ADVERTISEMENTS } from "./actionTypes";


export type AdvertisementAction = {
    type: string
    advertisements: Array<Advertisement>
}


//type DispatchType = (arg: AdvertisementAction) => AdvertisementAction;

export const setAllAdvertisements = (advertisements: Array<Advertisement>) => {
    return {
        type: SET_ALL_ADVERTISEMENTS,
        advertisements
    };
};


export const fetchAdvList = () => async (dispatch : any, getState: any) => {
    const listAdv = await agent.Advertisements.list();
    dispatch(setAllAdvertisements(listAdv))
}