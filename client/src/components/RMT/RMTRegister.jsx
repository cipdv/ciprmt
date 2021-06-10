import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'



const RMTRegister = () => {

    let history = useHistory()

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const body = {first_name, last_name, email, password}

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch ('/api/1/rmtregistration', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            const parseRes = await response.json()
            localStorage.setItem("token", parseRes.token)
            history.push(`/rmt/dashboard`)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div>
            <h3>RMT Register</h3>
            <form className="ui form" onSubmit={handleSubmit}>
            <div className="field" >
                    <label htmlFor="">First name</label>
                    <input value={first_name} name="first_name" onChange={e=>setFirstName(e.target.value)} type="text" placeholder="First name" />
                </div>
                <div className="field" >
                    <label htmlFor="">Last name</label>
                    <input value={last_name} name="last_name" onChange={e=>setLastName(e.target.value)} type="text" placeholder="Last name" />
                </div>
                <div className="field" >
                    <label htmlFor="">Email</label>
                    <input value={email} name="email" onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email address" />
                </div>
                <div className="field">
                    <label htmlFor="">Password</label>
                    <input value={password} name="password" onChange={e=>setPassword(e.target.value)} type="password"/>
                </div>
                <button type="submit" className="ui button teal">Register</button>
            </form>
        </div>
    )
}

export default RMTRegister
