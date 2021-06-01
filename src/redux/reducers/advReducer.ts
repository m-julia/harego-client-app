import { type } from "os";
import { Advertisement } from "../../api/models/advertisement";
import { GET_ALL_ADVERTISEMENTS } from "../actions/actionTypes";
import { AdvertisementAction } from "../actions/advAction";

type AdvertisementState = {
    advertisements: Advertisement[]
}

const initialState = {};

const advReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_ALL_ADVERTISEMENTS:
            return {...state, advertisements: action.advertisements}
        default: 
            return {...state};
    }
}
export default advReducer;