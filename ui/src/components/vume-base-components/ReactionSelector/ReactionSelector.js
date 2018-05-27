import React from 'react';
import PropTypes from 'prop-types';

import './ReactionSelector.css';

const ReactionSelector = (props) => (
    <div className="reaction-input">
        <div className="reaction-input__button primary" onClick={props.happyHandler}>
            <div className="reaction-input__button__icon">:)</div>
        </div>
        <div className="reaction-input__button secondary" onClick={props.sadHandler}>
            <div className="reaction-input__button__icon">:(</div>
        </div>
        <div className="reaction-input__button tertiary" onClick={props.surprisedHandler}>
            <div className="reaction-input__button__icon">:S</div>
        </div>
        <div className="reaction-input__button quaternary" onClick={props.shockedHandler}>
            <div className="reaction-input__button__icon">:O</div>
        </div>
    </div>
);

ReactionSelector.propTypes = {
    happyHandler: PropTypes.func.isRequired,
    sadHandler: PropTypes.func.isRequired,
    surprisedHandler: PropTypes.func.isRequired,
    shockedHandler: PropTypes.func.isRequired
};

ReactionSelector.defaultProps = {};

export default ReactionSelector;