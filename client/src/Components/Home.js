import { useContext } from "react"
import { UserContext } from "../context/user"

function Home() {

    const {user, loggedIn} = useContext(UserContext)

    if(!loggedIn) {
        return (
            <h2>Please log in to get started</h2>
        )
    } else {
        return (
            <h1>Hello, {user.first_name}</h1>
        )
    }
}
export default Home