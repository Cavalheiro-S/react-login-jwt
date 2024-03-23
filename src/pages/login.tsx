import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

const Login = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        setToken("token de teste");
        navigate("/", { replace: true });
    };

    return (
        <div>
            <h1>login</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;