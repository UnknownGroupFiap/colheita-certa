import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import authService from '../services/auth.service';

export const useLogin = () => {
  const navigate = useNavigate();
  const { login: contextLogin } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (error) setError('');
  };

  const fillDemoCredentials = () => {
    setFormData({
      email: 'demo@colheitacerta.com',
      senha: 'demo123',
      rememberMe: true
    });
    setError('');
  };

  const validateForm = () => {
    if (!formData.email || !formData.senha) {
      setError('Preencha todos os campos');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Email inválido');
      return false;
    }

    if (formData.senha.length < 6) {
      setError('Senha deve ter pelo menos 6 caracteres');
      return false;
    }

    return true;
  };

  const handleLogin = async (e) => {
    if (e) e.preventDefault();

    if (!validateForm()) {
      return false;
    }

    setLoading(true);
    setError('');

    try {
      const user = await authService.login(
        formData.email,
        formData.senha,
        formData.rememberMe
      );

      contextLogin(formData.email, formData.senha);

      navigate('/dashboard');
      return true;

    } catch (err) {
      setError(err.message || 'Erro ao fazer login');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      email: '',
      senha: '',
      rememberMe: false
    });
    setError('');
    setShowPassword(false);
  };

  return {
    formData,
    showPassword,
    loading,
    error,
    updateField,
    setShowPassword,
    fillDemoCredentials,
    handleLogin,
    resetForm,
    isFormValid: formData.email && formData.senha
  };
};