import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="container">
        <div className="empty-state">
          <h2>Faça login para ver seu perfil</h2>
          <Link to="/login" className="btn btn-primary">
            Entrar
          </Link>
        </div>
      </div>
    );
  }

  const totalPurchases = user.purchases?.length || 0;
  const totalSpent = user.purchases?.reduce((sum, p) => sum + p.total, 0) || 0;

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-header">
          <div className="profile-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-stats">
            <div className="stat-card stat-card-primary">
              <div className="stat-icon">⭐</div>
              <div className="stat-content">
                <span className="stat-label">Total de Pontos</span>
                <span className="stat-value">{user.points}</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🛍️</div>
              <div className="stat-content">
                <span className="stat-label">Total de Compras</span>
                <span className="stat-value">{totalPurchases}</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <div className="stat-content">
                <span className="stat-label">Total Gasto</span>
                <span className="stat-value">R$ {totalSpent.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="profile-sections">
            <section className="profile-section">
              <h2 className="section-title">Seu Impacto</h2>
              <div className="impact-card">
                <p className="impact-text">
                  🌍 Suas compras sustentáveis causaram um impacto positivo no meio ambiente!
                </p>
                <div className="impact-stats-grid">
                  <div className="impact-stat">
                    <span className="impact-stat-value">{user.points}</span>
                    <span className="impact-stat-label">Pontos Eco Ganhos</span>
                  </div>
                  <div className="impact-stat">
                    <span className="impact-stat-value">{totalPurchases}</span>
                    <span className="impact-stat-label">Produtos Sustentáveis</span>
                  </div>
                  <div className="impact-stat">
                    <span className="impact-stat-value">{Math.floor(user.points / 10)}</span>
                    <span className="impact-stat-label">Árvores Salvas</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="profile-section">
              <h2 className="section-title">Histórico de Compras</h2>
              {totalPurchases === 0 ? (
                <div className="empty-purchases">
                  <p>Nenhuma compra ainda. Comece a comprar para fazer a diferença!</p>
                  <Link to="/catalog" className="btn btn-primary">
                    Ver Produtos
                  </Link>
                </div>
              ) : (
                <div className="purchases-list">
                  {user.purchases.map((purchase) => (
                    <div key={purchase.id} className="purchase-card">
                      <div className="purchase-header">
                        <span className="purchase-date">
                          {new Date(purchase.date).toLocaleDateString('pt-BR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                        <span className="purchase-points">
                          +{purchase.pointsEarned} pts
                        </span>
                      </div>
                      <div className="purchase-items">
                        {purchase.items.map((item, index) => (
                          <div key={index} className="purchase-item">
                            <span className="purchase-item-name">
                              {item.productName} x{item.quantity}
                            </span>
                            <span className="purchase-item-price">
                              R$ {(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="purchase-footer">
                        <span className="purchase-total">
                          Total: R$ {purchase.total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="profile-section">
              <h2 className="section-title">Programa de Recompensas</h2>
              <div className="rewards-card">
                <p className="rewards-description">
                  Continue ganhando pontos com cada compra sustentável. Quanto mais você compra produtos ecológicos, 
                  mais você contribui para um planeta mais saudável!
                </p>
                <div className="rewards-progress">
                  <div className="rewards-progress-bar">
                    <div 
                      className="rewards-progress-fill"
                      style={{ width: `${Math.min((user.points % 500) / 5, 100)}%` }}
                    ></div>
                  </div>
                  <p className="rewards-progress-text">
                    {500 - (user.points % 500)} pontos até seu próximo marco
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

