import React from 'react';
import PropTypes from 'prop-types';

import './ReactionSelector.css';

const ReactionSelector = (props) => (
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
);

ReactionSelector.propTypes = {};

ReactionSelector.defaultProps = {};

export default ReactionSelector;