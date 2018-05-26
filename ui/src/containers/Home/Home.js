import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg'
import './Home.css';

import Button from '../../components/vume-base-components/Button';

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <img src={logo} className="logo" alt="logo" />
                <div className="tagline">everything, everytime for everyone</div>
                <div className="div-block">
                    <Button text={'Join'} styling={'primary'}/>
                    <Button text={'Present'} styling={'secondary'}/>
                </div>
            </div>
        );
    }

}

export default Home;