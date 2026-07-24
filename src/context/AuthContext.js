import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const savedUser = localStorage.getItem('user')
    const [user, setUser] = useState(savedUser ? JSON.parse(savedUser) : null)

    const value = {
        user
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}