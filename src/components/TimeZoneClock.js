import React, { useEffect, useState } from 'react'
import Clock from 'react-clock';
import ClockNum from 'react-live-clock';
import 'react-clock/dist/Clock.css';
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
    return (
        <div>
            <p>Current time:</p>
            <Clock value={value} />
            <ClockNum 
            date={value.toUTCString()}
            format={'dddd, MMMM Mo, YYYY, h:mm:ss'} ticking={true} 
            //timezone={'US/Pacific'}
            />
        </div>
    )
}
