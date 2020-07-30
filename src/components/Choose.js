import React from 'react'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
export default function Choose() {
    return (
        <div className='d-flex' >
            <Select options={options} className='flex-grow-1' />
            <button type="button" className="btn btn-info">Add</button>

        </div>
    )
}
