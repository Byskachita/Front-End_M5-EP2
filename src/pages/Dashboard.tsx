import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Dashboard</h1>
            <h2>Bienvenido {user}</h2>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default Dashboard;