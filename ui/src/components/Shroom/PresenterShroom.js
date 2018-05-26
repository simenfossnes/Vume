import React from 'react';
import PropTypes from 'prop-types';
import './PresenterShroom.css';

const PresenterShroom = (props) => (
    <div>
        <div className="home">
            <div className="div-block-2">
                <div className="div-block-3">
                    <img src="images/logo-transparent.png"
                         srcSet="images/logo-transparent-p-500.png 500w, images/logo-transparent-p-800.png 800w, images/logo-transparent.png 1608w"
                         sizes="100vw" className="logo"/>
                    <div className="tagline">everything, everytime for everyone</div>
                </div>
                <div className="div-block">
                    <div className="vume-input">Enter the Code</div>
                    <a href="#" className="vume-button primary w-button">join</a>
                    <div>or</div>
                    <a href="#" className="vume-button secondary w-button">Create</a>
                </div>
            </div>
        </div>
        <div className="shroom-creator">
            <div className="div-block-2">
                <div className="div-block-3"><img src="images/logo-transparent.png"
                                                  srcSet="images/logo-transparent-p-500.png 500w, images/logo-transparent-p-800.png 800w, images/logo-transparent.png 1608w"
                                                  sizes="100vw" className="logo"/>
                    <div className="tagline">everything, everytime for everyone</div>
                </div>
                <div className="div-block">
                    <div className="vume-quadratic-button primary">
                        <div className="vume__presentation-input__icon tertiary">+</div>
                        <div className="vume__quadratic-button__text">Upload PDF</div>
                    </div>
                    <a href="#" className="vume-button secondary disabled w-button">Generate Key</a><a href="#"
                                                                                                       className="vume-button tertiary disabled w-button">Start
                    Slideshow</a></div>
            </div>
        </div>
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
    </div>
);

PresenterShroom.propTypes = {};

export default PresenterShroom;