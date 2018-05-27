import * as types from '../actionTypes';

export const addShroom = () =>  ({
    type: types.ADD_SHROOM,
    timeStamp: Date.now(),
});