import { createContext } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    token: string;
}
interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


