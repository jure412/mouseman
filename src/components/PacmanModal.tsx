import React from 'react'
import './PacmanModal.scss'

const PacmanModal = ({title, desc, button, clickButton, setStart}: any) => {
    const handleClick = () => {
        setStart(true)
        clickButton.current.focus()
    } 
    return (
        <div className="pacman-modal">
            <div className="pacman-modal-title">{title}</div>
            <div className="pacman-modal-desc">{desc}</div>
            <div className="pacman-modal-button" onClick={handleClick}>{button}</div>
        </div>
    )
}

export default PacmanModal
