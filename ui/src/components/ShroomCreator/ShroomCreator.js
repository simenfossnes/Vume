import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../logo.svg'
import './ShroomCreator.css';

import Button from '../vume-base-components/Button';

const ShroomCreator = (props) => (
    <div className="shroom-creator">
        <div className="div-block-2">
            <div className="div-block-3">
                <img src={logo} className="logo" alt="logo"/>
                <div className="tagline">everything, everytime for everyone</div>
            </div>
            <div className="div-block">
                <div className="vume-quadratic-button primary">
                    <div className="vume__presentation-input__icon tertiary">+</div>
                    <div className="vume__quadratic-button__text">Upload PDF</div>
                </div>
            </div>
        </div>
    </div>
);

ShroomCreator.propTypes = {};

export default ShroomCreator;