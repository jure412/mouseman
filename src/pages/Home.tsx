import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import './Home.scss'
import Head from '../components/Head'
import { GlobalContext } from '../extra/context'
const Home = (): JSX.Element  => {
    const {state} = useContext<any>(GlobalContext)
    console.log(state)
    return (
        <div className="home">
            <Head/>
            <div className="banner">
                <Link to="/MouseMan" className="banner_button">Go play MouseMan</Link>
            </div>
        </div>
    )
}

export default Home
