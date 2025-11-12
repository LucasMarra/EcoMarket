import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productsService } from '../services/productsService';
import ProductCard from '../components/ProductCard';
import { useAuth } from '../context/AuthContext';

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        const allProducts = await productsService.getAllProducts();
        const featured = allProducts.filter(p => p.sustainability === 'HIGH').slice(0, 3);
        setFeaturedProducts(featured);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedProducts();
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Compre Sustentável,
              <br />
              <span className="hero-highlight">Viva Melhor</span>
            </h1>
            <p className="hero-description">
              Descubra produtos ecológicos que fazem a diferença. 
              Cada compra gera pontos e ajuda a proteger nosso planeta.
            </p>
            <div className="hero-actions">
              <Link to="/catalog" className="btn btn-primary btn-large">
                Ver Produtos
              </Link>
              {!isAuthenticated && (
                <Link to="/login" className="btn btn-outline btn-large">
                  Começar Agora
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3 className="feature-title">Produtos Eco-Certificados</h3>
              <p className="feature-description">
                Cada produto é verificado com certificações e selos de sustentabilidade
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3 className="feature-title">Ganhe Recompensas</h3>
              <p className="feature-description">
                Ganhe pontos a cada compra sustentável e acompanhe seu impacto positivo
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">♻️</div>
              <h3 className="feature-title">Faça a Diferença</h3>
              <p className="feature-description">
                Veja exatamente como suas escolhas ajudam a reduzir resíduos e proteger o meio ambiente
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Produtos Sustentáveis em Destaque</h2>
            <p className="section-description">
              Confira nossos produtos ecológicos mais bem avaliados
            </p>
          </div>

          {loading ? (
            <div className="loading">Carregando produtos...</div>
          ) : (
            <div className="products-grid">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="section-action">
            <Link to="/catalog" className="btn btn-outline">
              Ver Todos os Produtos
            </Link>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="container">
          <div className="impact-content">
            <h2 className="impact-title">Suas Escolhas Fazem a Diferença</h2>
            <p className="impact-description">
              Junte-se a milhares de consumidores conscientes que estão criando mudanças positivas 
              através de compras sustentáveis. Cada produto que você compra contribui para um 
              planeta mais saudável para as gerações futuras.
            </p>
            <div className="impact-stats">
              <div className="impact-stat">
                <div className="stat-value">5.000+</div>
                <div className="stat-label">Usuários Ativos</div>
              </div>
              <div className="impact-stat">
                <div className="stat-value">50.000+</div>
                <div className="stat-label">Produtos Vendidos</div>
              </div>
              <div className="impact-stat">
                <div className="stat-value">100 toneladas</div>
                <div className="stat-label">CO₂ Reduzido</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Pronto para Iniciar Sua Jornada Sustentável?</h2>
            <p className="cta-description">
              Entre na EcoMarket hoje e comece a fazer um impacto positivo com cada compra
            </p>
            {!isAuthenticated ? (
              <Link to="/login" className="btn btn-primary btn-large">
                Criar Conta Grátis
              </Link>
            ) : (
              <Link to="/catalog" className="btn btn-primary btn-large">
                Começar a Comprar
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

