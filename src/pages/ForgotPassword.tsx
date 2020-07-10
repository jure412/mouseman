import React, { useState} from 'react'
import Head from '../components/Head'
import Form from '../components/Form'
import { IAuthorization, IErrors} from '../extra/Interfaces'
import {post} from '../extra/axios'
import Loading from '../components/Loading'

const ForgotPassword = (): JSX.Element  => {
    const [formOnChange, setFormOnChange] = useState<IAuthorization>({})
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<IErrors>({})  
    const [msg, setMsg] = useState<string|null|undefined>(null)
    
    const form = [
        {label: 'E-mail', name:'email',  type: 'email', error: error.email, value: formOnChange.email}, 
    ]

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
        setError({})
        setLoading(true)
        e.preventDefault()
        post('api/password/email', formOnChange).then(res => {
            if(res.status === 201 || res.status === 200){
                setLoading(false)
                setMsg(res.data.message)
            } else {
                setLoading(false)
                if(res.data.message) {
                    setError({email:res.data.message})
                } else {
                    setError({email:res.data.error})
                }
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
                <Form form={form} title="Forgot Password" msg={msg} setFormOnChange={setFormOnChange} handleSubmit={handleSubmit}/>
            </div>
        </div>
    )
}

export default ForgotPassword
