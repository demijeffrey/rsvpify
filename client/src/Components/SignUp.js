import { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../context/user"
import { useNavigate } from "react-router-dom"
import '../App.css';

function SignUp() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const {signup} = useContext(UserContext)
    const navigate = useNavigate()

    function handleSignup(e) {
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
        .then(res => res.json())
        .then(user => {
            if(!user.errors) {
                signup(user)
                navigate('/home')
                console.log('submitted')
            } else {
                setErrors(user.errors.map(error => <li key={error.id}>{error}</li>))
            }
        })
    }

    return(
        <div>
            <form className="card container sign-up" onSubmit={(e) => handleSignup(e)}>
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
                <button type="submit">Sign in</button>
            </form>
            {errors}
            <div className="sign-up2">.</div>
        </div>
    )

}

export default SignUp