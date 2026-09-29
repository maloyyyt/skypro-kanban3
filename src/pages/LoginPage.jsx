import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { AuthBlock, AuthButton, AuthError, AuthForm, AuthGroup, AuthInput, AuthTitle, AuthWrap } from './Auth.styled.js';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Введите эл. почту и пароль');
      return;
    }
    login(email.trim());
    const redirectTo = location.state && location.state.from ? location.state.from.pathname : '/';
    navigate(redirectTo, { replace: true });
  }

  return (
    <AuthWrap>
      <AuthBlock>
        <AuthTitle>Вход</AuthTitle>
        <AuthForm onSubmit={handleSubmit} noValidate>
          {error && <AuthError>{error}</AuthError>}
          <AuthInput type="text" placeholder="Эл. почта" value={email} onChange={(e) => setEmail(e.target.value)} />
          <AuthInput type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
          <AuthButton type="submit">Войти</AuthButton>
          <AuthGroup>
            <p>Нужно зарегистрироваться? <Link to="/register">Регистрируйтесь здесь</Link></p>
          </AuthGroup>
        </AuthForm>
      </AuthBlock>
    </AuthWrap>
  );
}
