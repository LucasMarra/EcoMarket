import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const { cartItemsCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">🌱</span>
            <span className="logo-text">EcoMarket</span>
          </Link>

          <nav className="nav">
            <Link to="/" className="nav-link">Início</Link>
            <Link to="/catalog" className="nav-link">Produtos</Link>
            
            {isAuthenticated && (
              <>
                <Link to="/profile" className="nav-link">Perfil</Link>
                <Link to="/cart" className="nav-link cart-link">
                  Carrinho
                  {cartItemsCount > 0 && (
                    <span className="cart-badge">{cartItemsCount}</span>
                  )}
                </Link>
              </>
            )}
          </nav>

          <div className="header-actions">
            {isAuthenticated ? (
              <>
                <div className="user-info">
                  <span className="user-name">{user.name}</span>
                  <span className="user-points">⭐ {user.points} pts</span>
                </div>
                <button onClick={handleLogout} className="btn btn-outline">
                  Sair
                </button>
              </>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Entrar
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

