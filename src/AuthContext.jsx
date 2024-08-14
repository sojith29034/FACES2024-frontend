import { createContext, useState, useEffect, useContext } from 'react';
import { getUserDetails } from './api';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: localStorage.getItem('token') || null,
        user: null,
        isAuthenticated: false,
    });

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (authState.token) {
                try {
                    const response = await getUserDetails(authState.token);
                    setAuthState(prevState => ({
                        ...prevState,
                        user: response.data.user,
                        isAuthenticated: true,
                    }));
                } catch (error) {
                    console.error('Failed to fetch user details', error);
                    logout(); // Optionally logout on error
                }
            }
        };
        fetchUserDetails();
    }, [authState.token]);

    const login = async (token, user) => {
        localStorage.setItem('token', token);
        setAuthState({
            token,
            user,
            isAuthenticated: true,
        });
        try {
            const response = await getUserDetails(token);
            setAuthState(prevState => ({
                ...prevState,
                user: response.data.user,
            }));
        } catch (error) {
            console.error('Failed to fetch user details after login', error);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAuthState({
            token: null,
            user: null,
            isAuthenticated: false,
        });
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
