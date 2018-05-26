import React from 'react';
import PropTypes from 'prop-types';

import './CommentCard.css';

const timestampToNow = (timestamp) => {
    // convert the timestamp to new seconds
};

const CommentCard = (props) => (
    <div className="comment-card">
        <div className="comment-card__text">
            {props.text}
        </div>
        <div className="comment-card__footer">
            <div className="comment-card__timestamp">15 secs ago</div>
            <div className="comment-card__score">4 votes</div>
        </div>
    </div>
);

CommentCard.propTypes = {
    text: PropTypes.string,
    timestamp: PropTypes.number,
    score: PropTypes.number,
};

CommentCard.defaultProps = {
    text: "This is some text inside of a div block. ariose ntaories" +
        "ntoiearn stoienarsoi tenaroies ntoairen stoiaerns otienars.",
};

export default CommentCard;