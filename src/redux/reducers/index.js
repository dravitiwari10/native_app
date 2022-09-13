import { combineReducers } from 'redux';
import authReducers from './authReducers';
import mainReducers from './mainReducers';
const rootReducer = combineReducers({
    authReducers,
    main: mainReducers
});

export default rootReducer;