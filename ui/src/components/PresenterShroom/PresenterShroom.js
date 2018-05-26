import React from 'react';
import PropTypes from 'prop-types';
import './PresenterShroom.css';

const PresenterShroom = (props) => (
    <div className="presenter-shroom">
        <div className="presenter-shroom__main"></div>
        <div className="presenter-shroom__right">
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