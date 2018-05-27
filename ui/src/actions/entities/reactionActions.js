import * as types from '../actionTypes';

export const addReaction = (reaction) =>  ({
    type: types.ADD_REACTION,
    reaction,
    timestamp: Date.now()
});