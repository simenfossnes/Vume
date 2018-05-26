import React from 'react';
import PropTypes from 'prop-types';

import './InputField.css';

const InputField = (props) => (
    <input
        type="text"
        placeholder={props.placeholder}
        className="vume-input"
        value={props.text}
        onChange={props.onChange}
        autoFocus={props.autoFocus}
    />
);

InputField.propTypes = {
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
};

InputField.defaultProps = {
    autoFocus: false,
};

export default InputField;