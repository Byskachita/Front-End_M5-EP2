import { useState, ReactNode } from "react";
import { AuthContext } from "./AuthContext";

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    token: string;    
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    
    const login = (userData: User) => {
        setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
};

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
};