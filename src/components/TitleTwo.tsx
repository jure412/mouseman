import React from 'react'
import './TitleTwo.scss'
import {ITitleTwo} from '../extra/Interfaces'

const TitleTwo = ({title}: ITitleTwo) => {
    return (
        <div className="title-two">
            {title}
        </div>
    )
}

export default TitleTwo
