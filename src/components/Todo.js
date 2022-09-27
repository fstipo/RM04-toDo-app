import React, { useState } from 'react'
import Modal from './Modal';
import Backdrop from './Backdrop';



const Todo = (props) => {
    const [showModal, setShowModal] = useState();

    const onShowModalHandler = () => {
        setShowModal(true);
    }

    const onCloseModalHandler = () => {
        setShowModal(false)
    }
    return (
        <div>
            {showModal && <Modal text="Are you sure?" onClick={onCloseModalHandler} />}
            {showModal && <Backdrop onClick={onCloseModalHandler} />}
            <div className='card p-3'>
                <h2>{props.text}</h2>
                <div className='pt-3'>
                    <button className='btn btn-danger' onClick={onShowModalHandler}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Todo;