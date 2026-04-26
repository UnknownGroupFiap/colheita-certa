class AuthService {
  constructor() {
    this.STORAGE_KEYS = {
      USER: 'user',
      USERS: 'users',
      TOKEN: 'token',
      REMEMBER_ME: 'rememberMe'
    };
  }

  async login(email, password, rememberMe = false) {
    try {
      this.validateEmail(email);
      this.validatePassword(password);

      if (email === 'demo@colheitacerta.com' && password === 'demo123') {
        const demoUser = this.getDemoUser();
        this.setCurrentUser(demoUser, rememberMe);
        return demoUser;
      }

      const users = this.getStoredUsers();
      const user = users.find(u => u.email === email && u.senha === password);

      if (!user) {
        throw new Error('Email ou senha incorretos');
      }

      this.setCurrentUser(user, rememberMe);
      return user;

    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  }

  async register(userData) {
    try {
      this.validateRegistrationData(userData);

      const users = this.getStoredUsers();
      if (users.some(u => u.email === userData.email)) {
        throw new Error('Este email já está cadastrado');
      }

      const newUser = {
        ...userData,
        id: this.generateUserId(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      users.push(newUser);
      localStorage.setItem(this.STORAGE_KEYS.USERS, JSON.stringify(users));

      this.setCurrentUser(newUser);
      return newUser;

    } catch (error) {
      console.error('Erro no registro:', error);
      throw error;
    }
  }

  logout() {
    localStorage.removeItem(this.STORAGE_KEYS.USER);
    localStorage.removeItem(this.STORAGE_KEYS.TOKEN);
  }

  isAuthenticated() {
    return !!this.getCurrentUser();
  }

  getCurrentUser() {
    const userStr = localStorage.getItem(this.STORAGE_KEYS.USER);
    if (!userStr) return null;

    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }

  updateCurrentUser(updates) {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      throw new Error('Nenhum usuário autenticado');
    }

    const updatedUser = {
      ...currentUser,
      ...updates,
      updatedAt: new Date().toISOString()
    };

    this.setCurrentUser(updatedUser);

    const users = this.getStoredUsers();
    const index = users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      users[index] = updatedUser;
      localStorage.setItem(this.STORAGE_KEYS.USERS, JSON.stringify(users));
    }

    return updatedUser;
  }

  emailExists(email) {
    const users = this.getStoredUsers();
    return users.some(u => u.email === email);
  }

  async forgotPassword(email) {
    this.validateEmail(email);

    if (!this.emailExists(email)) {
      throw new Error('Email não encontrado');
    }

    console.log(`Email de recuperação enviado para: ${email}`);
    return { message: 'Email de recuperação enviado' };
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      throw new Error('Email inválido');
    }
  }

  validatePassword(password) {
    if (!password || password.length < 6) {
      throw new Error('Senha deve ter pelo menos 6 caracteres');
    }
  }

  validateRegistrationData(data) {
    const requiredFields = ['nome', 'email', 'senha'];

    for (const field of requiredFields) {
      if (!data[field]) {
        throw new Error(`Campo ${field} é obrigatório`);
      }
    }

    this.validateEmail(data.email);
    this.validatePassword(data.senha);

    if (!data.aceitaTermos) {
      throw new Error('Você deve aceitar os termos de uso');
    }
  }

  getStoredUsers() {
    const usersStr = localStorage.getItem(this.STORAGE_KEYS.USERS);
    if (!usersStr) return [];

    try {
      return JSON.parse(usersStr);
    } catch {
      return [];
    }
  }

  setCurrentUser(user, rememberMe = false) {
    localStorage.setItem(this.STORAGE_KEYS.USER, JSON.stringify(user));

    if (rememberMe) {
      localStorage.setItem(this.STORAGE_KEYS.REMEMBER_ME, 'true');
    }

    const token = btoa(`${user.email}:${Date.now()}`);
    localStorage.setItem(this.STORAGE_KEYS.TOKEN, token);
  }

  generateUserId() {
    return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  getDemoUser() {
    return {
      id: 'demo_user',
      nome: 'João Silva',
      email: 'demo@colheitacerta.com',
      nomePropriedade: 'Fazenda Esperança',
      tamanhoPropriedade: '50-100',
      tipoCultura: 'hortalicas',
      localizacao: 'São Paulo - SP',
      experiencia: '5-10',
      objetivos: 'aumentar_producao',
      isDemo: true
    };
  }

  clearAllData() {
    if (process.env.NODE_ENV === 'development') {
      localStorage.clear();
      console.log('Todos os dados foram limpos');
    }
  }
}

export default new AuthService();