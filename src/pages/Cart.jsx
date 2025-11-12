import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { userService } from '../services/userService';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems, cartTotal, cartPoints, updateQuantity, removeFromCart, clearCart } = useCart();
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCheckout = async () => {
    setIsCheckingOut(true);

    setTimeout(() => {
      const purchase = {
        items: cartItems.map(item => ({
          productId: item.product.id,
          productName: item.product.name,
          quantity: item.quantity,
          price: item.product.price
        })),
        total: cartTotal,
        pointsEarned: cartPoints
      };

      userService.addPurchase(user.id, purchase);
      const newPoints = userService.updateUserPoints(user.id, cartPoints);

      updateUser({ ...user, points: newPoints });

      clearCart();
      setShowSuccess(true);
      setIsCheckingOut(false);

      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    }, 1500);
  };

  if (showSuccess) {
    return (
      <div className="container">
        <div className="success-page">
          <div className="success-icon">✓</div>
          <h2 className="success-title">Pedido Concluído!</h2>
          <p className="success-message">
            Obrigado pela sua compra sustentável!
          </p>
          <p className="success-points">
            Você ganhou <strong>{cartPoints} pontos</strong>
          </p>
          <p className="success-redirect">Redirecionando para seu perfil...</p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2 className="empty-cart-title">Seu carrinho está vazio</h2>
          <p className="empty-cart-message">
            Comece a comprar e adicione alguns produtos sustentáveis ao seu carrinho!
          </p>
          <Link to="/catalog" className="btn btn-primary">
            Ver Produtos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Carrinho de Compras</h1>

        <div className="cart-layout">
          <div className="cart-items-section">
            <div className="cart-items-header">
              <h3>Itens ({cartItems.length})</h3>
            </div>

            <div className="cart-items-list">
              {cartItems.map(item => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>
          </div>

          <div className="cart-summary">
            <h3 className="cart-summary-title">Resumo do Pedido</h3>

            <div className="cart-summary-content">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>R$ {cartTotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Frete</span>
                <span className="free-shipping">Grátis</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row summary-total">
                <span>Total</span>
                <span>R$ {cartTotal.toFixed(2)}</span>
              </div>

              <div className="summary-points">
                <div className="points-icon">⭐</div>
                <div className="points-info">
                  <span className="points-label">Você vai ganhar</span>
                  <span className="points-value">{cartPoints} pontos</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="btn btn-primary btn-full btn-large"
                disabled={isCheckingOut}
              >
                {isCheckingOut ? 'Processando...' : 'Finalizar Compra'}
              </button>

              <Link to="/catalog" className="continue-shopping">
                ← Continuar Comprando
              </Link>
            </div>

            <div className="cart-benefits">
              <h4 className="benefits-title">Por que comprar conosco?</h4>
              <ul className="benefits-list">
                <li>✓ Produtos eco-certificados</li>
                <li>✓ Frete grátis em todos os pedidos</li>
                <li>✓ Ganhe pontos de recompensa</li>
                <li>✓ Faça um impacto positivo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

