import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

// Mock user database
const USERS = {
    'superadmin@atlas.com': { pass: 'admin123', role: 'Super Admin', name: 'Super Admin' },
    'admin@atlas.com': { pass: 'admin123', role: 'Admin', name: 'Admin User' },
    'seller@atlas.com': { pass: 'seller123', role: 'Seller', name: 'Seller User' },
    'callcenter@atlas.com': { pass: 'callcenter123', role: 'Call Center Agent', name: 'Call Center Agent' },
    'manager@atlas.com': { pass: 'manager123', role: 'Call Center Manager', name: 'CC Manager' },
    'stockkeeper@atlas.com': { pass: 'stock123', role: 'Stock Keeper', name: 'Stock Keeper' },
    'packaging@atlas.com': { pass: 'package123', role: 'Packaging Agent', name: 'Packaging Agent' },
    'delivery@atlas.com': { pass: 'delivery123', role: 'Delivery Agent', name: 'Delivery Agent' },
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('atlas_user');
        return saved ? JSON.parse(saved) : null;
    });

    const login = (email, password) => {
        const userData = USERS[email];
        if (userData && userData.pass === password) {
            const userObj = { email, role: userData.role, name: userData.name };
            setUser(userObj);
            localStorage.setItem('atlas_user', JSON.stringify(userObj));
            return userObj;
        }
        return null;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('atlas_user');
        window.location.href = '/login';
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
