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
        console.log(input);
        if (input !== "123") {
            this.setState({activeButton: false});
            return;
        }
        this.setState({activeButton: true});
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
                        <Link to={`/shroom/${123}`}>
                            <Button text={'Join'} styling={'primary'} disabled={!this.state.activeButton}/>
                        </Link>
                        <div>or</div>
                        <Link to={`/shroomcreator`}>
                            <Button text={'Create'} styling={'secondary'}/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeContainer;