import React from 'react'

const Modal = (props) => {
    return (
        // <div className='my-modal p-5'>
        //     <h3 className="text-center">{props.text}</h3>
        //     <i class="bi bi-x-square fs-3 position-absolute p-2 " onClick={props.onClick}></i>
        //     <div class="actions text-center">
        //         <button className='btn btn-outline-primary  me-2' onClick={props.onClick}>Close</button>
        //         <button className='btn btn-outline-danger'>Confirm</button>
        //     </div>
        // </div >
        <div class="details-modal">
            <div class="details-modal-close">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z" fill="black" />
                </svg> */}
                <button className='btn btn-close'></button>
            </div>
            <div class="details-modal-title">
                <h2 className='display-5'>Are you sure?</h2>
            </div>
            <div class="details-modal-content text-center">
                <button className='btn btn-outline-primary me-2' onClick={props.onClick}>Close</button>
                <button className='btn btn-outline-danger'>Confirm</button>
            </div>
        </div>
    )
}

export default Modal