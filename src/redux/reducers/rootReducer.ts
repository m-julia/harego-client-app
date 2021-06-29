import {combineReducers} from 'redux';
import advReducer from "./advReducer";
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    advertisementsList: advReducer,
    auth: authReducer,
    form: formReducer
});

export default rootReducer;