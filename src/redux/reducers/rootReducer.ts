import {combineReducers} from 'redux';
import advReducer from "./advReducer";

const rootReducer = combineReducers({
    advertisementsList: advReducer, 
});

export default rootReducer;