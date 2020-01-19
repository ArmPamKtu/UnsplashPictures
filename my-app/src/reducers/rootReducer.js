import { combineReducers } from 'redux';
import queryReducer from './queryReducer';


const allReducers = combineReducers({
    queries: queryReducer
});

export default allReducers;