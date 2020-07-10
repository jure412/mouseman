import React from 'react'
import '../pages/ConfirmMail.scss'
import Head from '../components/Head'
import TitleTwo from '../components/TitleTwo'
import { Link } from 'react-router-dom'

const ConfirmMail = () => {
    return (
        <div className="confirm">
            <Head/>
            <div className="confirm-container">
            <TitleTwo title="Confirm your mail"/>
            <div className="form">
                <div className="msg">If mail coifirmed go to login</div>
                <div className="form-group-button">
                    <Link to="login"><button type="button" className="submit-btn">
                            Go to Login
                        </button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ConfirmMail
