import React, { useEffect, useState } from 'react'
import Clock from 'react-clock';
import ClockNum from 'react-live-clock';
//import 'react-clock/dist/Clock.css';
import moment from 'moment-timezone'
//import moment from 'moment-timezone/moment-timezone';
//import moment from 'moment-timezone/builds/moment-timezone-with-data';
import './TimeZone.css'
import deleteIcon from './image/minus.svg'
export default function TimeZoneClock(props) {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(
            () => setValue(new Date()),
            1000
        );

        return () => {
            clearInterval(interval);
        }
    }, []);
    let circleTime = moment().tz(props.timezone.value).format()
    const {timezone,deleteTimezone}=props
    return (
        <div className='time-zone'>
            <div className='delete' onClick={()=>{deleteTimezone(timezone)}}> <img src={deleteIcon}></img> </div>
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
