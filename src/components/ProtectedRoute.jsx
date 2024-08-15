// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const ProtectedRoute = ({ element }) => {
  const { authState } = useAuth();

  return authState.isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
