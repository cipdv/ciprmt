import React, {useState, useEffect, Fragment} from 'react'
import { Link } from 'react-router-dom'

const ClientDashboard = ({setAuth}) => {

    const [name, setName] = useState('')
    const [id, setId] = useState('')

    const getData = async () => {
        try {
            const result = await fetch ("/api/1/profile", {
                method: 'GET',
                headers: {token: localStorage.token}
            })
            const response = await result.json()
            setName(response.first_name)
            setId(response.id)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
        getData()
    },[])

    const logout = e => {
        e.preventDefault()
        localStorage.removeItem("token")
        setAuth(false)
    }

    return (
        <Fragment>
            <h2>Hi {name}, welcome to your dashboard</h2>
            <h5>{name}'s id is {id}</h5>
            <h4>What would you like to do today?</h4>
            <Link to="/client/dashboard"><button className="ui button blue">View Receipts</button></Link>
            <Link to="/client/update"><button className="ui button pink">Update Health History</button></Link>
            <button className="ui button" onClick={e=>logout(e)}>Logout</button>
        </Fragment>
    )
}

export default ClientDashboard
