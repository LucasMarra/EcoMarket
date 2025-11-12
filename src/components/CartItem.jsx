import { sustainabilityLevels } from '../data/mockData';

function CartItem({ item, onUpdateQuantity, onRemove }) {
  const { product, quantity } = item;
  const subtotal = product.price * quantity;
  const points = sustainabilityLevels[product.sustainability].points * quantity;

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 0) {
      onUpdateQuantity(product.id, newQuantity);
    }
  };

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} className="cart-item-image" />
      
      <div className="cart-item-info">
        <h4 className="cart-item-name">{product.name}</h4>
        <p className="cart-item-category">{product.category}</p>
        <span className="cart-item-price">R$ {product.price.toFixed(2)} cada</span>
      </div>
      
      <div className="cart-item-quantity">
        <button 
          onClick={() => handleQuantityChange(quantity - 1)}
          className="quantity-btn"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="quantity-value">{quantity}</span>
        <button 
          onClick={() => handleQuantityChange(quantity + 1)}
          className="quantity-btn"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      
      <div className="cart-item-details">
        <span className="cart-item-subtotal">R$ {subtotal.toFixed(2)}</span>
        <span className="cart-item-points">+{points} pts</span>
      </div>
      
      <button 
        onClick={() => onRemove(product.id)}
        className="cart-item-remove"
        aria-label="Remove item"
      >
        ✕
      </button>
    </div>
  );
}

export default CartItem;

