import { useAuth } from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login('Usuario Autenticado');
        navigate('/dashboard');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Iniciar Sesión</h1>
            <button onClick={handleLogin}>Ingresar</button>
        </div>
    );
};

export default Login;