import { createContext, useState, useContext, useEffect } from 'react';

// Criar o contexto
const AuthContext = createContext({});

// Provider do contexto
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Carregar usuário do localStorage ao iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem('colheitaCertaUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Função de cadastro
  const register = (userData) => {
    try {
      // Verificar se o email já existe
      const existingUsers = JSON.parse(localStorage.getItem('colheitaCertaUsers') || '[]');
      const userExists = existingUsers.find(u => u.email === userData.email);

      if (userExists) {
        throw new Error('Email já cadastrado');
      }

      // Criar novo usuário
      const newUser = {
        id: Date.now().toString(),
        ...userData,
        createdAt: new Date().toISOString(),
        // Dados iniciais do dashboard
        metrics: {
          totalProducao: 0,
          totalVendas: 0,
          totalLucro: 0,
          eficiencia: 0
        },
        diagnosticos: [],
        metas: []
      };

      // Salvar no array de usuários
      existingUsers.push(newUser);
      localStorage.setItem('colheitaCertaUsers', JSON.stringify(existingUsers));

      // Fazer login automático após cadastro
      const userWithoutPassword = { ...newUser };
      delete userWithoutPassword.senha;

      setUser(userWithoutPassword);
      localStorage.setItem('colheitaCertaUser', JSON.stringify(userWithoutPassword));

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Função de login
  const login = (email, senha) => {
    try {
      const existingUsers = JSON.parse(localStorage.getItem('colheitaCertaUsers') || '[]');
      const user = existingUsers.find(u => u.email === email && u.senha === senha);

      if (!user) {
        throw new Error('Email ou senha incorretos');
      }

      // Salvar usuário sem a senha
      const userWithoutPassword = { ...user };
      delete userWithoutPassword.senha;

      setUser(userWithoutPassword);
      localStorage.setItem('colheitaCertaUser', JSON.stringify(userWithoutPassword));

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Função de logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('colheitaCertaUser');
  };

  // Função para atualizar dados do usuário
  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('colheitaCertaUser', JSON.stringify(updatedUser));

    // Atualizar também no array de usuários
    const existingUsers = JSON.parse(localStorage.getItem('colheitaCertaUsers') || '[]');
    const userIndex = existingUsers.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      existingUsers[userIndex] = { ...existingUsers[userIndex], ...updates };
      localStorage.setItem('colheitaCertaUsers', JSON.stringify(existingUsers));
    }
  };

  // Função para salvar diagnóstico do usuário
  const saveDiagnostico = (diagnostico) => {
    const diagnosticoCompleto = {
      ...diagnostico,
      id: Date.now().toString(),
      data: new Date().toISOString()
    };

    const updatedDiagnosticos = [...(user.diagnosticos || []), diagnosticoCompleto];
    updateUser({ diagnosticos: updatedDiagnosticos });

    return diagnosticoCompleto;
  };

  // Função para atualizar métricas
  const updateMetrics = (metrics) => {
    const updatedMetrics = { ...user.metrics, ...metrics };
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
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook customizado para usar o contexto
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}