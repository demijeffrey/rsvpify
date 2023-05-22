import { useContext } from "react"
import { UserContext } from "../context/user"
import UserHome from "./UserHome"

function Home() {

    const { loggedIn } = useContext(UserContext)

    if(!loggedIn) {
        return (
            <h2>Please log in to get started</h2>
        )
    } else {
        return (
            <UserHome />
        )
    }
}
export default Home