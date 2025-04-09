import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface PrivateRouterProps {
    children: JSX.Element;
    role: string;
}

const PrivateRouter = ({ children, role }: PrivateRouterProps) => {
    const { user } = useAuth();

    //Si no hay usuario, redirige al login
    if (!user) {
        return <Navigate to="/login" />;
    }
    //Si el usuario no tiene el rol y no coincide con el requerido, redirige a la página de no autorizado
    if (role && user.role !== role) return <Navigate to="/unauthorized" />;

    return children;
};

export default PrivateRouter;