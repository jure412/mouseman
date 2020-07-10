import React, { useState, useContext } from 'react'
import {check} from '../extra/axios'
import Loading from './Loading'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../extra/context'
// import {IGlobalProvider} from '../extra/Interfaces';

const Logout = ():JSX.Element => {
    const {dispatch} = useContext<any>(GlobalContext)
    const [loading, setLoading] = useState<boolean>(false)
    const history = useHistory()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const param = {
            token: localStorage.getItem('token')
        }
        check('api/logout', param).then(res => {
            if(res.status === 201 || res.status === 200){
                setLoading(false)
                dispatch({
                    type: "LOGOUT",
                    payload: {
                        isAuthenticated: false,
                        token: '',
                        userData: {}
                    }
                })
                localStorage.removeItem('token');
                history.push('/')
            } else {
                setLoading(false)
                // console.log(res.data)
            }
        })
    }
    if(loading) {
        return (
            <Loading/>
        )
    }
    return (
        <form className="logout" onSubmit={handleSubmit}>
            <button type="submit">LogOut</button>
        </form>
    )
}

export default Logout
