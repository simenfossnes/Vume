import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <img src="images/logo-transparent.png"
                     srcSet="images/logo-transparent-p-500.png 500w, images/logo-transparent-p-800.png 800w, images/logo-transparent.png 1608w"
                     sizes="25vw"
                     className="logo"
                />
                <div className="tagline">everything, everytime for everyone</div>
                <div className="div-block">
                    <a href="#" className="vume-button join w-button">join</a>
                    <a href="#" className="vume-button w-button">present</a>
                </div>
            </div>
        );
    }

}

export default Home;