import React, { useContext } from "react"
import Dashboard from "./Dashboard";
import AuthContext from "../context/AuthContext";
import Login from "./Login";
const Navigation = () => {

    const ctx = useContext(AuthContext);
    return <div>
        {ctx.isLoggedIn && <Dashboard />}
        {!ctx.isLoggedIn && <Login />
        }
    </div>
}


export default Navigation;