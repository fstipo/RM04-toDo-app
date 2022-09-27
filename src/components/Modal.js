import React from 'react'

const Modal = (props) => {
    return (
        <div className='my-modal p-5'>
            <h3 className="text-center">{props.text}</h3>
            <i class="bi bi-x-square fs-3 position-absolute p-2 " onClick={props.onClick}></i>
            <div class="actions mt-3 text-center">
                <button className='btn btn-primary fs-6 me-2' onClick={props.onClick}>Close</button>
                <button className='btn btn-danger  fs-6' >Confirm</button>
            </div>
        </div >
    )
}

export default Modal