import React, { useState } from 'react'
import TimeZoneClock from './TimeZoneClock'
import Choose from './Choose'
import Clock from 'react-live-clock'
import './mainpage.css'
import Notify from './Notify'
let listOptions = JSON.parse(localStorage.getItem('timezoneList')) || [
    { value: 'Etc/GMT-12', label: '(UTC-12:00) International Date Line West', isDisabled: false },
    { value: 'Pacific/Niue', label: '(UTC-11:00) Coordinated Universal Time-11', isDisabled: false },
    { value: 'Pacific/Honolulu', label: '(UTC-10:00) Hawaii', isDisabled: false },
    { value: 'America/Anchorage', label: '(UTC-09:00) Alaska', isDisabled: false },
    { value: 'America/Los_Angeles', label: '(UTC-08:00)  Pacific Time (US & Canada)', isDisabled: false },
    { value: 'America/Phoenix', label: '(UTC-07:00) Arizona', isDisabled: false },
    { value: 'America/Belize', label: '(UTC-06:00) Central America', isDisabled: false },
    { value: "America/New_York", label: '(UTC-05:00) Eastern Time (US & Canada)', isDisabled: false },
    { value: 'America/Glace_Bay', label: '(UTC-04:00) Atlantic Time (Canada)', isDisabled: false },
    { value: 'America/St_Johns', label: '(UTC-03:30) Newfoundland', isDisabled: false },
    { value: 'America/Sao_Paulo', label: '(UTC-03:00) Brasilia', isDisabled: false },
    { value: 'Atlantic/South_Georgia', label: '(UTC-02:00) Coordinated Universal Time-02', isDisabled: false },
    { value: 'Atlantic/Cape_Verde', label: '(UTC-01:00) Cape Verde Is.', isDisabled: false },
    { value: 'Europe/London', label: '(UTC 00:00) Edinburgh, London', isDisabled: false },
    { value: 'Europe/Amsterdam', label: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna', isDisabled: false },
    { value: 'Africa/Cairo', label: '(UTC+02:00) Cairo', isDisabled: false },
    { value: 'Europe/Moscow', label: '(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk', isDisabled: false },
    { value: 'Asia/Tehran', label: '(UTC+03:30) Tehran', isDisabled: false },
    { value: 'Asia/Dubai', label: '(UTC+04:00) Abu Dhabi, Muscat', isDisabled: false },
    { value: 'Asia/Kabul', label: '(UTC+04:30) Kabul', isDisabled: false },
    { value: 'Asia/Karachi', label: '(UTC+05:00) Islamabad, Karachi', isDisabled: false },
    { value: 'Asia/Kolkata', label: '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi', isDisabled: false },
    { value: 'Asia/Kathmandu', label: '(UTC+05:45) Kathmandu', isDisabled: false },
    { value: 'Asia/Dhaka', label: '(UTC+06:00) Dhaka', isDisabled: false },
    { value: 'Asia/Rangoon', label: '(UTC+06:30) Yangon (Rangoon)', isDisabled: false },
    { value: 'Asia/Bangkok', label: '(UTC+07:00) Bangkok, Hanoi, Jakarta', isDisabled: false },
    { value: 'Asia/Hong_Kong', label: '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi', isDisabled: false },
    { value: 'Asia/Tokyo', label: '(UTC+09:00) Osaka, Sapporo, Tokyo', isDisabled: false },
    { value: 'Australia/Adelaide', label: '(UTC+09:30) Adelaide', isDisabled: false },
    { value: 'Australia/Sydney', label: '(UTC+10:00) Canberra, Melbourne, Sydney', isDisabled: false },
    { value: 'Pacific/Kosrae', label: '(UTC+11:00) Solomon Is., New Caledonia', isDisabled: false },
    { value: 'Pacific/Auckland', label: '(UTC+12:00) Auckland, Wellington', isDisabled: false },
    { value: 'Pacific/Apia', label: '(UTC+13:00) Samoa', isDisabled: false },
    { value: 'Pacific/Kiritimati', label: '(UTC+14:00) Kiribati', isDisabled: false },
]

export default function MainPage() {
    let [options, setOptions] = useState(listOptions);
   
    let activeTimezone = options.filter((item) => item.isDisabled === true)
    let [listTimezone, setTimezone] = useState(activeTimezone)
    let [notify, setNotify] = useState('')
    let handleAdd = (option) => {
        // const data = [...listTimezone];
        // data.push(option)
        // setTimezone(data)

        // localStorage.setItem('clocksList', JSON.stringify(data))
        let timezoneData=[...options]
        let indexTZ
        const indexOption = options.find((item, index) => {
            index = index
            return item.value === option.value
        });

        setOptions()
        const indexOption = options.indexOf(option);
        options[indexOption].isDisabled = true;
        setNotify('add')

        localStorage.setItem('timezoneList', JSON.stringify(options))

    }
    let handleDelete = (option) => {
        const data = [...listTimezone];
        data.splice(data.indexOf(option), 1);
        setTimezone(data)

        localStorage.setItem('clocksList', JSON.stringify(data))
        console.log(option)
        debugger
        let index
        const indexOption = options.find((item, index) => {
            index = index
            return item.value === option.value
        });
        options[indexOption].isDisabled = false;
        console.log(indexOption, options)
        localStorage.setItem('timezoneList', JSON.stringify(options))

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
                    <Choose addTimeZone={handleAdd} options={options} />
                </div>

                {/* <TimeZoneClock /> */}
                {listTimezone.map((item, index) => <div key={index} className="col-4">
                    <TimeZoneClock timezone={item} deleteTimezone={handleDelete} />
                </div>
                )}




            </div>
        </div>
    )
}
