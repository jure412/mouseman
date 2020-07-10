import React from 'react'
import FormGroupText from './FormGroupText'
import GoogleLoginButton from './GoogleLoginButton'
import {IForm} from '../extra/Interfaces'
import './Form.scss'
import TitleTwo from './TitleTwo';
import { Link } from 'react-router-dom';

 
const Form = (form: IForm): JSX.Element  => {
    return (
        <>
        <TitleTwo title={form.title}/>
            <form className="form" onSubmit={form.handleSubmit}>
                {    
                    form.form && form.form.map((input, i)=> {
                        if(input.type === 'text' || input.type === 'email' || input.type === 'password') {
                            return <FormGroupText key={i} name={input.name} type={input.type} label={input.label} error={input.error} value={input.value} setFormOnChange={form.setFormOnChange}/>
                        }
                        return ''
                    }) 
                }
                <div className="form-group-button">
                    <button className="submit-btn">Submit</button>
                </div>
                {form.forgotPassword && 
                    <div className="login-extras">
                        <Link to={"/forgotpassword"}>Forgot Password?</Link>
                        <GoogleLoginButton/>
                    </div>
                }
                {
                    form.msg &&
                    <div className="msg">
                        {form.msg}
                    </div>
                }

            </form>
        </>
    )
}

export default Form
