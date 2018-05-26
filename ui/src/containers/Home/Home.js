import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg'
import './Home.css';

import Button from '../../components/vume-base-components/Button/index';
import InputField from '../../components/vume-base-components/InputField/index';

class HomeContainer extends React.Component {

    state = {
        inputValue: ''
    };

    onChange = (event) => {
        console.log(event.target.value);
        this.setState({inputValue: event.target.value});
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
                        <InputField text={this.state.inputValue} onChange={this.onChange} autoFocus={true}/>
                        <Link to={`/shroom/${123}`}>
                            <Button text={'Join'} styling={'primary'}/>
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