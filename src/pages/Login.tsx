import React, { useState, useContext} from 'react'
import Head from '../components/Head'
import Form from '../components/Form'
import { useHistory } from 'react-router-dom'
import { IAuthorization, IErrors} from '../extra/Interfaces'
import {check} from '../extra/axios'
import Loading from '../components/Loading'
import {GlobalContext} from '../extra/context'

const Login = (): JSX.Element  => {
    const {dispatch} = useContext<any>(GlobalContext)
    const history = useHistory()
    const [formOnChange, setFormOnChange] = useState<IAuthorization>({})
    const [loading, setLoading] = useState<boolean>(false)
    const [errors, setErrors] = useState<IErrors>({name: [], password: []})  
    
    const form = [
        {label: 'E-mail', name:'email',  type: 'email', error: errors.email, value: formOnChange.email}, 
        {label: 'Password', name:'password',  type: 'password', error: errors.password, value: formOnChange.password} 
    ]

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
        setLoading(true)
        e.preventDefault() 

        check('api/login', formOnChange).then(res => {
            if(res.status === 201 || res.status === 200){
                
                localStorage.setItem('token', res.data.token)
                dispatch({
                    type: "LOGIN",
                    payload: {
                        isAuthenticated: true,
                        token: res.data.token,
                        userData: res.data.user
                    }
                })
                setLoading(false)
                history.push('/home')
            } else {
                setLoading(false)
                setErrors(res.data)
            }
        })
    }


    if(loading) {
        return (
            <Loading/>
        )
    }
    return (
        <div className="login">
            <Head/>
            <div className="form-container">
                <Form form={form} title="Login" forgotPassword={true} setFormOnChange={setFormOnChange} handleSubmit={handleSubmit}/>
            </div>
        </div>
    )
}

export default Login
