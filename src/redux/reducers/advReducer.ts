import { type } from "os";
import { Advertisement } from "../../api/models/advertisement";
import { AdvertisementAction } from "../actions/advAction";

type AdvertisementState = {
    advertisements: Advertisement[]

}

const initialState: AdvertisementState  = {
    advertisements: [],
};

const advReducer = (state = initialState, action: AdvertisementAction) => {
    switch (action.type) {
       
        default: 
            return {...state};
    }
}
export default advReducer;