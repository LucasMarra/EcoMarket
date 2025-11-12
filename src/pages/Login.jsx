import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        if (!formData.name) {
          setError('Please enter your name');
          setLoading(false);
          return;
        }
        await register(formData);
      }
      navigate('/');
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setFormData({ email: '', password: '', name: '' });
  };

  const fillDemoCredentials = () => {
    setFormData({
      email: 'user@ecomarket.com',
      password: '123456',
      name: ''
    });
    setError('');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1 className="auth-logo">🌱 EcoMarket</h1>
          <p className="auth-subtitle">Compras Sustentáveis para um Futuro Melhor</p>
        </div>

        <div className="auth-card">
          <h2 className="auth-title">
            {isLogin ? 'Bem-vindo de Volta' : 'Criar Conta'}
          </h2>
          <p className="auth-description">
            {isLogin 
              ? 'Faça login para continuar sua jornada sustentável' 
              : 'Junte-se a nós para tornar o mundo mais sustentável'}
          </p>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  required={!isLogin}
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Digite sua senha"
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-full"
              disabled={loading}
            >
              {loading ? 'Aguarde...' : (isLogin ? 'Entrar' : 'Criar Conta')}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              {isLogin ? "Não tem uma conta? " : "Já tem uma conta? "}
              <button onClick={toggleMode} className="link-button">
                {isLogin ? 'Cadastre-se' : 'Entrar'}
              </button>
            </p>
          </div>

          {isLogin && (
            <div className="demo-credentials">
              <p className="demo-title">Credenciais Demo:</p>
              <p className="demo-text">Email: user@ecomarket.com</p>
              <p className="demo-text">Senha: 123456</p>
              <button 
                type="button"
                onClick={fillDemoCredentials} 
                className="btn btn-outline btn-full"
                style={{ marginTop: '10px' }}
              >
                Preencher Dados Demo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;

