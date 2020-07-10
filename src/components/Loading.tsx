import React from 'react'
import img from '../images/loading.gif';
import './Loading.scss';
const Loading = () => {
    return (
        <div className="loading">
            <img src={img} alt="...Loading"/>
        </div>
    )
}

export default Loading
