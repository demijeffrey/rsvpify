import { useState } from "react"

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    return(
        <form className="card container">
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
            {error}
        </form>
    )

}

export default Login