import React, { useState } from 'react'
import Header from '../../components/Header'

const ClientLogin = ({setAuth}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const body = {email, password}

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch ('/api/1/login', {
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
        } catch (error) {
            console.error(error.message)
        }

        // try {
        //     const response = await ClientFilesApi.post('/login', {
        //         email,
        //         password
        //     })
        //     if (response.data.token) {
        //         localStorage.setItem("token", response.data.token)
        //         setAuth(true)
        //     } else {
        //         setAuth(false)
        //     } 
        // } catch (error) {
        //     console.error(error.message)
        // }
    }
 
    return (
        <div>
            <Header />
            <h3>Login</h3>
            <form className="ui form" onSubmit={handleLogin}>
                <div className="field" >
                    <label htmlFor="">Email</label>
                    <input value={email} name="email" onChange={e=>setEmail(e.target.value)} type="email" placeholder="Enter your email address" />
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

export default ClientLogin
