import { Link } from 'react-router-dom';
import SustainabilityBadge from './SustainabilityBadge';
import { sustainabilityLevels } from '../data/mockData';

function ProductCard({ product }) {
  const points = sustainabilityLevels[product.sustainability].points;

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <SustainabilityBadge level={product.sustainability} />
        </div>
        
        <div className="product-info">
          <span className="product-category">{product.category}</span>
          <h3 className="product-name">{product.name}</h3>
          
          <div className="product-certifications">
            {product.certifications.slice(0, 2).map((cert, index) => (
              <span key={index} className="certification-tag">
                {cert}
              </span>
            ))}
          </div>
          
          <div className="product-footer">
            <span className="product-price">R$ {product.price.toFixed(2)}</span>
            <span className="product-points">+{points} pts</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;

