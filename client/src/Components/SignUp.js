import { useState } from "react"

function SignUp() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    return(
        <form className="card container">
            <div className="row">
                <div className="input-field col s6">
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="validate"/>
                    <label>First Name</label>
                </div>
                <div className="input-field col s6">
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="validate"/>
                    <label>Last Name</label>
                </div>
                <div className="input-field col s6">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="validate"/>
                    <label>Email</label>
                </div>
                <div className="input-field col s6">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="validate"/>
                    <label>Password</label>
                </div>
                <div className="input-field col s6">
                    <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} className="validate"/>
                    <label>Password Confirmation</label>
                </div>
            </div>
            {errors}
        </form>
    )

}

export default SignUp