
import AuthContext from "../context/AuthContext";
const Login = () => {


    return <AuthContext.Consumer>
            {(ctx) => {
                return <div>
                    <h4>Login</h4>
                    <form onSubmit={()=>{
                        ctx.setLoggedIn(true);
                    }}>
                        <input placeholder={"User Name"} />
                        <input placeholder={"Password"} />
                        <button type="submit">
                            Login
                        </button>
                    </form>
                </div>


            }}

        </AuthContext.Consumer>


  
}


export default Login;