import React from 'react';
import PropTypes from 'prop-types';

import './CommentSection.css';

const CommentSection = (props) => (
    <div className="comment-section">
        {props.children}
    </div>
);

CommentSection.propTypes = {};

CommentSection.defaultProps = {};

export default CommentSection;