import React from 'react';
import PropTypes from 'prop-types';

import './InputButtonMolecule.css';

import InputField from '../InputField';
import Button from '../Button';

class InputButtonMolecule extends React.Component {

    state = {
        text: '',
    };

    onTextChange = (event) => {
        const input = event.target.value;
        this.setState({text: input});
    };

    render() {
        return (
            <div className="input-button-molecule">
                <InputField text={this.state.text} onChange={this.onTextChange} placeholder={this.props.inputPlaceholder}/>
                <div className="vume-button quaternary">
                    <div className="vume-button__icon">🌍</div>
                    <div className="vume-button__text">Ask</div>
                </div>
                <Button text={this.props.buttonText} onClick={() => this.props.onSubmit(this.state.text)}/>
            </div>
        );
    }
}

InputButtonMolecule.propTypes = {
    inputPlaceholder: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
};

InputButtonMolecule.defaultProps = {};

export default InputButtonMolecule;