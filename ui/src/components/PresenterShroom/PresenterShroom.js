import React from 'react';
import PropTypes from 'prop-types';
import './PresenterShroom.css';

import CommentCard from '../vume-base-components/CommentCard';
import CommentSection from '../vume-base-components/CommentSection'

const PresenterShroom = (props) => (
    <div className="presenter-shroom">
        <div className="presenter-shroom__main"></div>
        <div className="presenter-shroom__right">
            <CommentSection>
                <CommentCard text={'hey ho here we go sweet'}/>
            </CommentSection>
        </div>
        <div className="presenter-shroom__bottom">
            <div className="presenter-shroom__bottom__top">
                <div className="vume-timer">
                    <div>00:03:21</div>
                </div>
            </div>
            <div className="presenter-shroom__bottom__bottom">
                <div className="vume-button secondary">
                    <div className="vume-button__icon">🌍</div>
                    <div className="vume-button__text">Back</div>
                </div>
                <div className="vume-button primary">
                    <div className="vume-button__icon">🌍</div>
                    <div className="vume-button__text">Next</div>
                </div>
            </div>
        </div>
    </div>
);

PresenterShroom.propTypes = {};

export default PresenterShroom;