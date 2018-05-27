import * as types from '../actionTypes';

export const addComment = (comment) =>  ({
    type: types.ADD_COMMENT,
    comment,
    timestamp: Date.now()
});

export const upVoteComment = (commentId) => ({
    type: types.UP_VOTE_COMMENT,
    commentId
});