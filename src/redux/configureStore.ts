import { compose, createStore} from 'redux';
import rootReducer from './reducers/rootReducer';


export default function configureStore(initialState: any = []) {
    const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers()
    )};
