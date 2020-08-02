import React, { useState } from 'react'
import Select from 'react-select'


export default function Choose(props) {
    let { options, addTimeZone } = props

    let [timezone, setTimezone] = useState(options[0])

    return (
        <div className='d-flex' >
            <Select options={options}
                isRtl={false}
                isSearchable={true}
                isClearable={true}
                // defaultValue={options[0]}
                className='flex-grow-1'
                onChange={(option) => {
                    // console.log(option)
                    setTimezone(option)
                    console.log(timezone)
                }}
            />
            <button type="button" className="btn btn-primary ml-2" disabled={timezone === null}
                onClick={() => {
                    addTimeZone(timezone)

                    setTimezone(null)
                }}
            >Add</button>

        </div>
    )
}
