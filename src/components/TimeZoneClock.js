import React from 'react'
import Clock from 'react-clock';
import ClockNum from 'react-live-clock';
import moment from 'moment-timezone'

import useClock from './useClock'

import './TimeZone.css'
import deleteIcon from '../assets/images/minus.svg'

export default function TimeZoneClock(props) {
    let value=useClock()
    let circleTime = moment().tz(props.timezone.value).format()
    const { timezone, deleteTimezone } = props
    return (
        <div className='time-zone'>
            <div className='delete' onClick={() => { deleteTimezone(timezone) }}> <img src={deleteIcon}></img> </div>
            <Clock value={circleTime.slice(11, 19)} className='clock-cir' />

            <ClockNum className='time-zone__hours'
                date={value.toUTCString()}
                format={'ddd hh:mm:ss A'} ticking={true}
                timezone={timezone.value}
            />

            {(timezone) && <b className="utc-name">{timezone.label}</b>}

        </div>
    )
}
