import React from 'react'

const Modal = (props) => {
    return (
        <div className='my-modal card p-5 '>
            <h3 className="display-3">{props.text}</h3>
            <i class="bi bi-x-square fs-3 position-absolute p-2 " onClick={props.onClick}></i>
        </div>
    )
}

export default Modal