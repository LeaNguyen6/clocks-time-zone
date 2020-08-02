import React, { useState } from 'react'
import TimeZoneClock from './TimeZoneClock'
import Choose from './Choose'
import Clock from 'react-live-clock'
import './mainpage.css'
import Notify from './Notify'
let listTimeZone = JSON.parse(localStorage.getItem('timezoneList')) || [
    { index: 0, value: 'Etc/GMT-12', label: '(UTC-12:00) International Date Line West', isDisabled: false },
    { index: 1, value: 'Pacific/Niue', label: '(UTC-11:00) Coordinated Universal Time-11', isDisabled: false },
    { index: 2, value: 'Pacific/Honolulu', label: '(UTC-10:00) Hawaii', isDisabled: false },
    { index: 3, value: 'America/Anchorage', label: '(UTC-09:00) Alaska', isDisabled: false },
    { index: 4, value: 'America/Los_Angeles', label: '(UTC-08:00)  Pacific Time (US & Canada)', isDisabled: false },
    { index: 5, value: 'America/Phoenix', label: '(UTC-07:00) Arizona', isDisabled: false },
    { index: 6, value: 'America/Belize', label: '(UTC-06:00) Central America', isDisabled: false },
    { index: 7, value: "America/New_York", label: '(UTC-05:00) Eastern Time (US & Canada)', isDisabled: false },
    { index: 8, value: 'America/Glace_Bay', label: '(UTC-04:00) Atlantic Time (Canada)', isDisabled: false },
    { index: 9, value: 'America/St_Johns', label: '(UTC-03:30) Newfoundland', isDisabled: false },
    { index: 10, value: 'America/Sao_Paulo', label: '(UTC-03:00) Brasilia', isDisabled: false },
    { index: 11, value: 'Atlantic/South_Georgia', label: '(UTC-02:00) Coordinated Universal Time-02', isDisabled: false },
    { index: 12, value: 'Atlantic/Cape_Verde', label: '(UTC-01:00) Cape Verde Is.', isDisabled: false },
    { index: 13, value: 'Europe/London', label: '(UTC 00:00) Edinburgh, London', isDisabled: false },
    { index: 14, value: 'Europe/Amsterdam', label: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna', isDisabled: false },
    { index: 15, value: 'Africa/Cairo', label: '(UTC+02:00) Cairo', isDisabled: false },
    { index: 16, value: 'Europe/Moscow', label: '(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk', isDisabled: false },
    { index: 17, value: 'Asia/Tehran', label: '(UTC+03:30) Tehran', isDisabled: false },
    { index: 18, value: 'Asia/Dubai', label: '(UTC+04:00) Abu Dhabi, Muscat', isDisabled: false },
    { index: 19, value: 'Asia/Kabul', label: '(UTC+04:30) Kabul', isDisabled: false },
    { index: 20, value: 'Asia/Karachi', label: '(UTC+05:00) Islamabad, Karachi', isDisabled: false },
    { index: 21, value: 'Asia/Kolkata', label: '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi', isDisabled: false },
    { index: 22, value: 'Asia/Kathmandu', label: '(UTC+05:45) Kathmandu', isDisabled: false },
    { index: 23, value: 'Asia/Dhaka', label: '(UTC+06:00) Dhaka', isDisabled: false },
    { index: 24, value: 'Asia/Rangoon', label: '(UTC+06:30) Yangon (Rangoon)', isDisabled: false },
    { index: 25, value: 'Asia/Bangkok', label: '(UTC+07:00) Bangkok, Hanoi, Jakarta', isDisabled: false },
    { index: 26, value: 'Asia/Hong_Kong', label: '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi', isDisabled: false },
    { index: 28, value: 'Asia/Tokyo', label: '(UTC+09:00) Osaka, Sapporo, Tokyo', isDisabled: false },
    { index: 29, value: 'Australia/Adelaide', label: '(UTC+09:30) Adelaide', isDisabled: false },
    { index: 30, value: 'Australia/Sydney', label: '(UTC+10:00) Canberra, Melbourne, Sydney', isDisabled: false },
    { index: 31, value: 'Pacific/Kosrae', label: '(UTC+11:00) Solomon Is., New Caledonia', isDisabled: false },
    { index: 32, value: 'Pacific/Auckland', label: '(UTC+12:00) Auckland, Wellington', isDisabled: false },
    { index: 33, value: 'Pacific/Apia', label: '(UTC+13:00) Samoa', isDisabled: false },
    { index: 34, value: 'Pacific/Kiritimati', label: '(UTC+14:00) Kiribati', isDisabled: false },
]

export default function MainPage() {
    let [myTimeZone, setTimeZone] = useState(listTimeZone);

    let usedClocks = myTimeZone.filter((item) => item.isDisabled === true)


    let [notify, setNotify] = useState('')
    let handleAdd = (clock) => {
        let newTimeZone = [...myTimeZone];
        newTimeZone[clock.index].isDisabled = true;
        setTimeZone(newTimeZone)

        setNotify('add')

        localStorage.setItem('timezoneList', JSON.stringify(newTimeZone))

    }
    let handleDelete = (clock) => {
        let newTimeZone = [...myTimeZone];
        newTimeZone[clock.index].isDisabled = false;
        
        setTimeZone(newTimeZone)
        localStorage.setItem('timezoneList', JSON.stringify(newTimeZone))
        setNotify('delete')

    }
    return (
        <div className="container main">

            <div className=" header">
                <div className="image text-center">
                    <h1>Explore TimeZone Together</h1>
                </div>
                <div className="local">
                    <p> <i class="fas fa-home"></i>  <Clock
                        format={'ddd hh:mm:ss A'} ticking={true} /> </p>
                </div>
            </div>
            {(notify) && <Notify type={notify} />}

            <div className="row flex mt-2">
                <div className="col-12">
                    <b className="text-center"> List Timezones</b>
                    <Choose addTimeZone={handleAdd} options={myTimeZone} />
                </div>

                {/* <TimeZoneClock /> */}
                {usedClocks.map((item, index) => <div key={index} className="col-4">
                    <TimeZoneClock timezone={item} deleteTimezone={handleDelete} />
                </div>
                )}




            </div>
        </div>
    )
}
