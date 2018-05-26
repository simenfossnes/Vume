import React from 'react';
import PropTypes from 'prop-types';
import './ViewerShroom.css';

import CommentCard from '../vume-base-components/CommentCard';
import ReactionSelector from '../vume-base-components/ReactionSelector';

const ViewerShroom = (props) => (
    <div className="viewer-shroom">
        <div className="viewer-shroom__main"></div>
        <div className="viewer-shroom__right">
            <div className="comment-section">
                <CommentCard text={'hey ho here we go sweet'}/>
            </div>
        </div>
        <div className="viewer-shroom__bottom">
            <div className="viewer-shroom__bottom__top">
                <ReactionSelector/>
            </div>
            <div className="viewer-shroom__bottom__bottom">
                <div className="input-button-molecule">
                    <div className="vume-input">Post a question</div>
                    <div className="vume-button quaternary">
                        <div className="vume-button__icon">🌍</div>
                        <div className="vume-button__text">Ask</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

ViewerShroom.propTypes = {

};

export default ViewerShroom;