import React from 'react';
import PropTypes from 'prop-types';

const VumeButtom = (props) => (
    <button>
        {text}
    </button>
);

VumeButtom.propTypes = {
    text: PropTypes.string.isRequired
};

export default VumeButtom;