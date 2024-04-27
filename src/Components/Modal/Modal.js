import React from 'react'
import { X } from 'react-bootstrap-icons'
import './Modal.css'

const Modal = ({ state, setState, movieTitle, movieSrc }) => {
    return (
        <div className={`movieModal ${state ? 'active' : ''}`}>
            <button className='modalClose' onClick={() => setState(false)}><X size={25} /></button>
            <iframe width={1280} height={720} src={movieSrc} title={`${movieTitle} | Official Trailer`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default Modal