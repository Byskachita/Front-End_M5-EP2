import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRouter = ({ children }: { children: JSX.Element }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" />;
};

export default PrivateRouter;