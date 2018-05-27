import React from 'react';
import PropTypes from 'prop-types';

import './Timer.css';

class Timer extends React.Component {

    state = {
        startTime: Date.now(),
        difference: Date.now()
    };

    timer = () => {
        this.setState((prevState) => ({difference: Date.now() - prevState.startTime}));
    };

    componentDidMount() {
        setInterval(this.timer, 50)
    };

    render() {
        return (
            <div className="vume-timer">
                <div>{this.state.difference}</div>
            </div>
        );
    }
}

Timer.propTypes = {};

Timer.defaultProps = {};

export default Timer;