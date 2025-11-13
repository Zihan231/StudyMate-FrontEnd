import React, { useContext } from 'react';
import AuthContext from '../../contexts/Auth/AuthContext/AuthContext';
import { Navigate } from 'react-router';
import { HashLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    if (isLoading) {
        return (
            <main className="flex items-center justify-center min-h-[500px]">
                <HashLoader color="#73abff" size={80} />
            </main>
        );
    }
    if (!user) {
        return <Navigate to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;