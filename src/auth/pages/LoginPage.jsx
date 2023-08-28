import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"


export const LoginPage = () => {

    const { login } = useContext(AuthContext)
    const navegate = useNavigate();

    const onLogin = () => {
        const lastpath = localStorage.getItem("lastpath") || ("/")

        login('Edgardo Alvarez');
        navegate(lastpath, { replace: true })
    }

    return (
        <>
            <div className="container mt-5">
                <h1>Login</h1>
                <hr />

                <button onClick={onLogin} className="btn btn-primary">Login</button>
            </div>
        </>
    )
}
