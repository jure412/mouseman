import React, { useState} from 'react'
import Head from '../components/Head'
import Form from '../components/Form'
import { useHistory, useParams } from 'react-router-dom'
import { IAuthorization, IErrors} from '../extra/Interfaces'
import {post} from '../extra/axios'
import Loading from '../components/Loading'

const ChangePassword = (): JSX.Element  => {
    // const {dispatch} = useContext<any>(GlobalContext)
    const history = useHistory()
    let {token, mail} = useParams()
    const [formOnChange, setFormOnChange] = useState<IAuthorization>({
        email: mail,
        token: token
    })
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<IErrors>({})  
    
    const form = [  
        {label: 'New password', name:'password',  type: 'password', error: error.email, value: formOnChange.password}, 
        {label: 'New Password', name:'password_confirmation',  type: 'password', error: '', value: formOnChange.password_confirmation}  
    ]

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
        setLoading(true)
        e.preventDefault() 
        
     
        post('../api/password/reset', formOnChange).then(res => {
            if(res.status === 201 || res.status === 200){
                setLoading(false)
                history.push('/login')
            } else {
                setLoading(false)
                console.log(res.data)
                setError({email:res.data.message})
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
                <Form form={form} title="Forgot Password" setFormOnChange={setFormOnChange} handleSubmit={handleSubmit}/>
            </div>
        </div>
    )
}

export default ChangePassword
