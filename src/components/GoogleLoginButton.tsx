import React, { useContext } from 'react'
import GoogleLogin from 'react-google-login';
import {post} from '../extra/axios'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../extra/context';


const GoogleLoginButton = (): JSX.Element => {
    const {dispatch} = useContext<any>(GlobalContext)
    const history = useHistory()
    const responseGoogle = (response: any) => {
        const googleLogin = {
            email: response.profileObj.email,
            name: response.profileObj.name,
        }
        post('api/loginGoogle', googleLogin).then(res => {
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
                history.push('/home')
            } 
        })
    }

    return (
        <GoogleLogin
            clientId="759265362885-4a0bbhgnt9dgvt3kufhp2i6n752h53b3.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default GoogleLoginButton
