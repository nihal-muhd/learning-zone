import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const savedUser = localStorage.getItem('user')
    const [user, setUser] = useState(savedUser ? JSON.parse(savedUser) : null)

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    const value = {
        user,
        logout
    }


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}