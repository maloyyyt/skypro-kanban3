import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { AuthBlock, AuthButton, AuthError, AuthForm, AuthGroup, AuthInput, AuthTitle, AuthWrap } from './Auth.styled.js';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Заполните все поля');
      return;
    }
    login(email.trim(), name.trim());
    navigate('/', { replace: true });
  }

  return (
    <AuthWrap>
      <AuthBlock>
        <AuthTitle>Регистрация</AuthTitle>
        <AuthForm onSubmit={handleSubmit} noValidate>
          {error && <AuthError>{error}</AuthError>}
          <AuthInput type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
          <AuthInput type="text" placeholder="Эл. почта" value={email} onChange={(e) => setEmail(e.target.value)} />
          <AuthInput type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
          <AuthButton type="submit">Зарегистрироваться</AuthButton>
          <AuthGroup>
            <p>Уже есть аккаунт? <Link to="/login">Войдите здесь</Link></p>
          </AuthGroup>
        </AuthForm>
      </AuthBlock>
    </AuthWrap>
  );
}
