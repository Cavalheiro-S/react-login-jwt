import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export const ProtectedRoute = () => {
    const { token } = useAuth();
  
    // Verifica se o usuário esta autenticado
    if (!token) {
      // Se não estiver autenticado, redireciona para a tela de login
      return <Navigate to="/login" />;
    }
  
    // Se estiver autenticado, renderiza o conteúdo
    return <Outlet />;
  };