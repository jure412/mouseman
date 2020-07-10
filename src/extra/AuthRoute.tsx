import React, {useContext, useEffect} from 'react'
import {GlobalContext} from './context';
import { Route, Redirect } from 'react-router-dom';
import { getData } from './axios';
import {checkAuth} from './helpers'
// import Loading from '../components/Loading';
// import {IGlobalProvider} from './Interfaces';
interface IPrivate{
    [rest: string]: any;
    component: any;
}


const AuthRoute = ({ component: Component, ...rest}: IPrivate) => {
    const {dispatch} = useContext<any>(GlobalContext)
    // const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        // setLoading(true)
        const token =  localStorage.getItem('token')
        
        if(checkAuth() && token) {
            getData('api/refresh', token).then((res) => {
                console.log(res)
                if(res.status === 201 || res.status === 200){
                    console.log(res)
                    localStorage.setItem('token', res.data.token)
                    dispatch({
                        type: "REFRESH",
                        payload: {
                            isAuthenticated: true,
                            token: res.data.token,
                            userData: res.data.user
                        }
                    })
                    // setLoading(false)
                }
            })
        } else {
            localStorage.removeItem('token')
            dispatch({
                type: "LOGOUT",
                payload: {
                    isAuthenticated: false,
                    token: '',
                    userData: {}
                }
            })
        }
    },[])
   
    // if(loading) {
    //     return <Loading/>
    // }
    return (<Route {...rest} render={() => checkAuth() ? (<Component/>) : (<Redirect to={{ pathname: "/login" }} /> )}/>)

};
export default AuthRoute;
