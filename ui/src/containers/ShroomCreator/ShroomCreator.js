import React from 'react';

import logo from '../../logo.svg'
import './ShroomCreator.css';

import QuadraticButton from "../../components/vume-base-components/QuadraticButton/QuadraticButton";

class ShroomCreatorContainer extends React.Component {
    render() {
        return (
            <div className="shroom-creator">
                <div className="div-block-2">
                    <div className="div-block-3">
                        <img src={logo} className="logo" alt="logo"/>
                        <div className="tagline">everything, everytime for everyone</div>
                    </div>
                    <div className="div-block">
                        <QuadraticButton text={'Upload PDF'} icon={'+'} onClick={() => {}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShroomCreatorContainer;