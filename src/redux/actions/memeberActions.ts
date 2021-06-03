import agent from "../../api/agent";
import { Member } from "../../api/models/member";
import { SET_ALL_ADVERTISEMENTS } from "./actionTypes";


export type MemberAction = {
    type: string
    members: Array<Member>
}


//type DispatchType = (arg: AdvertisementAction) => AdvertisementAction;

export const setAllAdvertisements = (members: Array<Member>) => {
    return {
        type: SET_ALL_ADVERTISEMENTS,
        members
    };
};

export const fetchAdvList = () => async (dispatch : any) => {
    const listMembers = await agent.Members.list();
    dispatch(setAllAdvertisements(listMembers))
}