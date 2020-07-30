import React, { useEffect, useState } from 'react'
import Clock from 'react-clock';
import ClockNum from 'react-live-clock';
import 'react-clock/dist/Clock.css';
import moment from 'moment';
import './TimeZone.css'
export default function TimeZoneClock() {
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
    //console.log(moment().zone(8))
    //console.log(moment().utcOffset('+0700'))
    let testday = value.setUTCDate(7)
    // console.log(value,testday)
    // console.log(value.getUTCDate())
    return (
        <div className='time-zone'>
            <p>Current time:</p>
            <Clock value={value} className='clock-cir' />

            <ClockNum className='time-zone__hours'
                date={value.toUTCString()}
                format={'h:mm:ss'} ticking={true}
            //timezone={'US/Pacific'}
            />
            <ClockNum
                date={value.toUTCString()}
                format={'dddd, MMMM Mo'} ticking={true}
            //timezone={'US/Pacific'}
            />
            <div className='btn-group'>
                <button type="button" className="btn btn-info btn-sm">Choose</button>
                <button type="button" className="btn btn-danger btn-sm">Delete</button>

            </div>
        </div>
    )
}
