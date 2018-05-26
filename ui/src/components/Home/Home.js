import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg'
import './Home.css';

import Button from '../../components/vume-base-components/Button';

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <div className="div-block-2">
                    <div className="div-block-3">
                        <img src={logo} className="logo" alt="logo" />
                        <div className="tagline">everything, everytime for everyone</div>
                    </div>
                    <div className="div-block">
                        <div className="vume-input">Enter the Code</div>
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
        );
    }

}

export default Home;