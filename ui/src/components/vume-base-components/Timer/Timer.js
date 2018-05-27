import React from 'react';
import PropTypes from 'prop-types';

import './Timer.css';

class Timer extends React.Component {

    state = {
        startTime: Date.now(),
        difference: '00:00:00'
    };

    timer = () => {
        this.setState((prevState) => ({difference: this.msToTime(Date.now() - prevState.startTime)}));
    };

    componentDidMount() {
        this.clock = setInterval(this.timer, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.clock);
    }

    // helper function taken from stackoverflow:
    msToTime = (duration) => {
        let milliseconds = parseInt((duration%1000)/100)
            , seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60)
            , hours = parseInt((duration/(1000*60*60))%24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
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