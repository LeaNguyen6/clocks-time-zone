import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react'

export default function Notify(props) {
    const options = {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };
    const notify = (type) => {
        switch (type) {
            case 'add':
                toast.success('🦄 Added success!', options);
                break;
            case 'delete':
                toast.error('🦄 Delete success!', options);
                break;
        }

    }
    notify(props.type)


    return (
        <div>
            {/* <button onClick={()=>{notify('delete')}}>Notify !</button> */}
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}
