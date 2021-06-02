import { SET_ALL_ADVERTISEMENTS } from "../actions/actionTypes";

const initialState = {
    advertisements: [],
    loading: true,
}

const advReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case SET_ALL_ADVERTISEMENTS:
            return {...state, advertisements: action.advertisements, loading: false}
        default: 
            return {...state};
    }
}

export default advReducer;