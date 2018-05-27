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

    onSubmit = () => {
        this.props.onSubmit(this.state.text);
        this.setState({text: ''})
    };

    render() {
        return (
            <div className="input-button-molecule">
                <InputField text={this.state.text} onChange={this.onTextChange} placeholder={this.props.inputPlaceholder}/>
                <Button text={this.props.buttonText}
                        styling={this.props.buttonStyling}
                        onClick={this.onSubmit}
                        style={{width: '33%'}}
                />
            </div>
        );
    }
}

InputButtonMolecule.propTypes = {
    inputPlaceholder: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    buttonStyling: PropTypes.string,
    onSubmit: PropTypes.func,
};

InputButtonMolecule.defaultProps = {
    buttonStyling: '',
};

export default InputButtonMolecule;