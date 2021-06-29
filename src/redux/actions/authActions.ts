import agent from "../../api/agent";
import { Member, MemberFormValue } from "../../api/models/member";
import { LOGIN_USER } from "./actionTypes";

export type AdvertisementAction = {
    type: string
    member: Member
}


//type DispatchType = (arg: AdvertisementAction) => AdvertisementAction;

export const login = (member: Member) => {
    return {
        type: LOGIN_USER,
        member
    };
};


export const logingUser = (member: MemberFormValue) => async (dispatch : any, getState: any) => {
    const user = await agent.Account.login(member);
    dispatch(login(user))
}