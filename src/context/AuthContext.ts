import { createContext } from 'react';

interface AuthContextType {
    user: string | null;
    login: (userData: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


