import * as types from '../actionTypes';

export const addComment = (comment) =>  ({
    type: types.ADD_COMMENT,
    comment,
    timestamp: Date.now()
});

export const upvoteComment = (commentId) => ({
    type: types.UPVOTE_COMMENT,
    commentId
});