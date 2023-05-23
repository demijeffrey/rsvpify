import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../context/user"
import '../App.css';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const {login} = useContext(UserContext)


    function handleSubmit(e) {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => {
            if(res.ok) {
                res.json().then(user => {
                    console.log(user)
                    login(user)
                    navigate('/home')
                })
            } else {
                console.log(res)
                res.json().then(user => setError(user.error))
            }
        })
    }

    return(
        <div className="login">
            <form className="card container" onSubmit={(e) => handleSubmit(e)}>
                <div className="row">
                    <div className="input-field col s6">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="validate"/>
                        <label>Email</label>
                    </div>
                    <div className="input-field col s6">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="validate"/>
                        <label>Password</label>
                    </div>
                </div>
                <button type="submit">Sign in</button>
            </form>
            {error}
            <br />
            <div className="login2">.</div>
        </div>
    )

}

export default Login