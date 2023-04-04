function Login() {

    return(
        <form className="card container">
            <div className="row">
                <div className="input-field col s6">
                    <input type="email" className="validate"/>
                    <label>Email</label>
                </div>
                <div className="input-field col s6">
                    <input type="password" className="validate"/>
                    <label>Password</label>
                </div>
            </div>
        </form>
    )

}

export default Login