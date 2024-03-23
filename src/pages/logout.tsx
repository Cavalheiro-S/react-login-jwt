import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

const Logout = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken(null);
        navigate("/", { replace: true });
    };

    setTimeout(() => {
        handleLogout();
    }, 3 * 1000);

    return <>Logout Page</>;
};

export default Logout;