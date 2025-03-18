import { useState, ReactNode } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);
    
    const login = (userData: string) => setUser(userData);
    const logout = () => setUser(null);
    
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
    };