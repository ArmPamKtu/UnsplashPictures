import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import infoReducer from './infoReducer';

/*
export default combineReducers({
    simpleReducer
});*/


const allReducers = combineReducers({
    info: infoReducer //galima testi visus
});

export default allReducers;