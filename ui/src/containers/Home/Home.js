import React from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';

import logo from '../../logo.svg'
import './Home.css';

import Button from '../../components/vume-base-components/Button/index';
import InputField from '../../components/vume-base-components/InputField/index';

class HomeContainer extends React.Component {

    state = {
        inputValue: '',
        activeButton: false
    };

    onChange = (event) => {
        const input = event.target.value;
        this.setState({inputValue: input});
        debounce((input) => this.checkInput(input), 500)(input);
    };

    checkInput = (input) => {
        if (input !== "123") {
            this.setState({activeButton: false});
            return;
        }
        this.setState({activeButton: true});
    };

    onJoinClick = () => {
        this.props.history.push(`/shroom/${this.state.inputValue}`);
    };

    onCreateClick = () => {
        this.props.history.push(`/shroomcreator`);
    };

    render() {
        return (
            <div className="home">
                <div className="div-block-2">
                    <div className="div-block-3">
                        <img src={logo} className="logo" alt="logo" />
                        <div className="tagline">everything, everytime for everyone</div>
                    </div>
                    <div className="div-block">
                        <InputField text={this.state.inputValue} onChange={this.onChange} placeholder={'Enter the Code'} autoFocus={true}/>
                        <Button text={'Join'} styling={'primary'} disabled={!this.state.activeButton} onClick={this.state.activeButton ? this.onJoinClick : null}/>
                        <div>or</div>
                        <Button text={'Create'} styling={'secondary'} onClick={this.onCreateClick}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeContainer;