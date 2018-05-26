import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const VumeButton = (props) => (
    <div className={`vume-button ${props.styling} ${props.disabled ? 'disabled' : ''}`}>
        <div className="vume-button__icon "></div>
        <div className="vume-button__text">{props.text}</div>
    </div>
);

VumeButton.propTypes = {
    icon: PropTypes.func,
    text: PropTypes.string.isRequired,
    styling: PropTypes.string,
    disabled: PropTypes.bool
};

VumeButton.defaultProps = {
    disabled: false,
    styling: '',
};

export default VumeButton;