
import React, { PropTypes, Component } from 'react';
import './timer.css';

import timeFormat from '../utils/timeFormat';

class timer extends Component {

    static proptTypes = {
        time : PropTypes.number
    };

    static defaultProps = {
        time : 0
    };

    render() {
        const { time } = this.props;

        return (
            <div className="timer">
            { timeFormat( time ) }
            </div>
    );
    }
}

export default timer;