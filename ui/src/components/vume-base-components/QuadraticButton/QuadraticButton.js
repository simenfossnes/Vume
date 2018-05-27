import React from 'react';
import PropTypes from 'prop-types';

import './QuadraticButton.css';

const QuadraticButton = (props) => (
    <div className="vume-quadratic-button primary" onClick={props.onClick}>
        <div className="vume__presentation-input__icon tertiary">{props.icon}</div>
        <div className="vume__quadratic-button__text">{props.text}</div>
    </div>
);

QuadraticButton.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

QuadraticButton.defaultProps = {
    icon: 'O'
};

export default QuadraticButton;