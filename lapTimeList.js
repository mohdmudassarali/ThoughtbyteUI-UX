import React, { Component, PropTypes } from 'react';
import './lapTimeList.css';

import LapTime from './lapTime';

class LapTimeList extends Component {

    static proptTypes = {
        timeList : PropTypes.array
    };

    static defaultProps = {
        timeList : []
    };

    render() {

        const { timeList } = this.props;

        return (
            <div className="LapTimeList">
                <div className="LapTimeList__listwrap">

                    <div className="LapTimeList__headers">
                        <span> Lap </span> <span> Time </span>
                    </div>

                    <ul className="LapTimeList__list" >
                        {
                            timeList.map( (time, index) => {
                                return (
                                    <li key={ index }>
                                        <LapTime lap={ index + 1 } time={ time }  />
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>
            </div>
        );
    }
}

export default LapTimeList;