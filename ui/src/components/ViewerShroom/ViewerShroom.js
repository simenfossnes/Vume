import React from 'react';
import PropTypes from 'prop-types';
import './ViewerShroom.css';

const ViewerShroom = (props) => (
    <div className="viewer-shroom">
        <div className="viewer-shroom__main"></div>
        <div className="viewer-shroom__right">
            <div className="comment-section">
                <div className="comment-card">
                    <div className="comment-card__text">This is some text inside of a div block. ariose ntaories
                        ntoiearn stoienarsoi tenaroies ntoairen stoiaerns otienars.
                    </div>
                    <div className="div-block-5">
                        <div className="comment-card__timestamp">15 secs ago</div>
                        <div className="comment-card__score">4 votes</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="viewer-shroom__bottom">
            <div className="viewer-shroom__bottom__top">
                <div className="reaction-input">
                    <div className="reaction-input__button primary">
                        <div className="reaction-input__button__icon">:)</div>
                    </div>
                    <div className="reaction-input__button secondary">
                        <div className="reaction-input__button__icon">:(</div>
                    </div>
                    <div className="reaction-input__button tertiary">
                        <div className="reaction-input__button__icon">:S</div>
                    </div>
                    <div className="reaction-input__button quaternary">
                        <div className="reaction-input__button__icon">:O</div>
                    </div>
                </div>
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