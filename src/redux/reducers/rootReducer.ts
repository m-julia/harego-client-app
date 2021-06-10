import {combineReducers} from 'redux';
import advReducer from "./advReducer";
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    advertisementsList: advReducer, 
    form: formReducer
});

export default rootReducer;