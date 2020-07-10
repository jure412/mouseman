import React, { useState } from 'react'
import './Register.scss'
import Head from '../components/Head'
import Form from '../components/Form'
import Loading from '../components/Loading'
import { useHistory } from 'react-router-dom'
import {IAuthorization, IErrors} from '../extra/Interfaces'
import {post} from '../extra/axios'

const Register = (): JSX.Element => {

    // const [handleChangeInput, setHandleChangeInput] = useState()
    const history = useHistory()
    const [formOnChange, setFormOnChange] = useState<IAuthorization>({})
    const [loading, setLoading] = useState<boolean>(false)
    const [errors, setErrors] = useState<IErrors>({name: [], email: [], password: []})
    

    const form = [
        {label: 'Name', name:'name',  type: 'text', error: errors.name, value: formOnChange.name},
        {label: 'E-mail', name:'email',  type: 'email', error: errors.email, value: formOnChange.email}, 
        {label: 'Password', name:'password',  type: 'password', error: errors.password, value: formOnChange.password}, 
        {label: 'Password', name:'password_confirmation',  type: 'password', error: '', value: formOnChange.password_confirmation}  
    ]
        
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
        setLoading(true)
        e.preventDefault()
        post('api/register', formOnChange).then(res => {
            if(res.status === 201 || res.status === 200){
                setLoading(false)
                history.push('/confirm')
            } else {
                setLoading(false)
                console.log(res.data)
                setErrors(JSON.parse(res.data))
            }
        })
    }
    if(loading) {
        return (
            <Loading/>
        )
    }
    return (
        <div className="register">
            <Head/>
            <div className="form-container">
                <Form form={form} title="Registration" setFormOnChange={setFormOnChange} handleSubmit={handleSubmit}/>
            </div>
        </div>
    )
}

export default Register
