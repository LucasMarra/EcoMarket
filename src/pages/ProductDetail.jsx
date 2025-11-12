import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { productsService } from '../services/productsService';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import SustainabilityBadge from '../components/SustainabilityBadge';
import { sustainabilityLevels } from '../data/mockData';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    loadProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const loadProduct = async () => {
    try {
      const productData = await productsService.getProductById(id);
      setProduct(productData);
    } catch (error) {
      console.error('Error loading product:', error);
      navigate('/catalog');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    addToCart(product, quantity);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading-container">
          <div className="loading">Carregando produto...</div>
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  const points = sustainabilityLevels[product.sustainability].points * quantity;

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/catalog">Produtos</Link>
          <span className="breadcrumb-separator">/</span>
          <span>{product.name}</span>
        </div>

        {showSuccess && (
          <div className="success-message">
            ✓ Produto adicionado ao carrinho!
          </div>
        )}

        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-detail-info">
            <span className="product-category-tag">{product.category}</span>
            <h1 className="product-detail-title">{product.name}</h1>
            
            <div className="product-sustainability">
              <SustainabilityBadge level={product.sustainability} showPoints={true} />
            </div>

            <div className="product-certifications-list">
              {product.certifications.map((cert, index) => (
                <span key={index} className="certification-badge">
                  ✓ {cert}
                </span>
              ))}
            </div>

            <div className="product-price-section">
              <span className="product-detail-price">R$ {product.price.toFixed(2)}</span>
              <span className="product-points-info">
                Ganhe <strong>{points} pontos</strong> com esta compra
              </span>
            </div>

            <div className="product-stock">
              {product.stock > 0 ? (
                <span className="in-stock">✓ Em Estoque ({product.stock} disponíveis)</span>
              ) : (
                <span className="out-of-stock">Fora de Estoque</span>
              )}
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <label>Quantidade:</label>
                <div className="quantity-controls">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="quantity-btn"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity-display">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="quantity-btn"
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="btn btn-primary btn-large btn-full"
                disabled={product.stock === 0}
              >
                {isAuthenticated ? 'Adicionar ao Carrinho' : 'Entrar para Comprar'}
              </button>
            </div>

            <div className="product-description">
              <h3>Descrição</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-details-grid">
              <div className="detail-item">
                <h4>Materiais</h4>
                <p>{product.materials}</p>
              </div>
              <div className="detail-item">
                <h4>Impacto Ambiental</h4>
                <p>{product.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

