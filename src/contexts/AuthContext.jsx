import { createContext, useState, useContext } from 'react';
import authService from '../services/auth.service';

const AuthContext = createContext({});

function getInitialUser() {
  if (typeof window === 'undefined') return null;
  return authService.getCurrentUser();
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getInitialUser);
  const [loading, setLoading] = useState(false);

  const register = async (userData) => {
    setLoading(true);
    try {
      const newUser = await authService.register(userData);
      setUser(newUser);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, senha) => {
    setLoading(true);
    try {
      const loggedUser = await authService.login(email, senha);
      setUser(loggedUser);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const updateUser = (updates) => {
    try {
      const updatedUser = authService.updateCurrentUser(updates);
      setUser(updatedUser);
      return updatedUser;
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      return null;
    }
  };

  const saveDiagnostico = (diagnostico) => {
    const diagnosticoCompleto = {
      ...diagnostico,
      id: Date.now().toString(),
      data: new Date().toISOString()
    };

    const updatedDiagnosticos = [...(user?.diagnosticos || []), diagnosticoCompleto];
    updateUser({ diagnosticos: updatedDiagnosticos });

    return diagnosticoCompleto;
  };

  const updateMetrics = (metrics) => {
    const updatedMetrics = { ...(user?.metrics || {}), ...metrics };
    updateUser({ metrics: updatedMetrics });
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    updateUser,
    saveDiagnostico,
    updateMetrics,
    isAuthenticated: authService.isAuthenticated()
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}