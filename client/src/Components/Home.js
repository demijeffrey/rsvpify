import { useContext } from "react"
import { UserContext } from "../context/user"
import UserHome from "./UserHome"

function Home() {

    const {user, loggedIn} = useContext(UserContext)

    if(!loggedIn) {
        return (
            <h2>Please log in to get started</h2>
        )
    } else {
        return (
            // <h1>Hello, {user.first_name}</h1>
            <UserHome />
        )
    }
}
export default Home