import React, { useState } from 'react'

const RMTLogin = ({setAuth}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const body = {email, password}

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch ('/api/1/rmtlogin', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            const parseRes = await response.json()
            if (parseRes.token) {
                localStorage.setItem("token", parseRes.token)
                setAuth(true)
            } else {
                setAuth(false)
            }
            setEmail('')
            setPassword('')    
        } catch (error) {
            console.error(error.message)
        }   
    }

    return (
        <div>
            <h3>RMT Login</h3>
            <form className="ui form" onSubmit={handleLogin}>
                <div className="field" >
                    <label htmlFor="">Email</label>
                    <input value={email} name="username" onChange={e=>setEmail(e.target.value)} type="email" placeholder="Enter your email address" />
                </div>
                <div className="field">
                    <label htmlFor="">Password</label>
                    <input value={password} name="password" onChange={e=>setPassword(e.target.value)} type="password"/>
                </div>
                <button type="submit" className="ui button teal">Login</button>
            </form>
        </div>
    )
}

export default RMTLogin
