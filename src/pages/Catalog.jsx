import { useEffect, useState } from 'react';
import { productsService } from '../services/productsService';
import ProductCard from '../components/ProductCard';
import { categories, sustainabilityLevels } from '../data/mockData';

function Catalog() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedSustainability, setSelectedSustainability] = useState('');

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, selectedCategory, selectedSustainability, products]);

  const loadProducts = async () => {
    try {
      const allProducts = await productsService.getAllProducts();
      setProducts(allProducts);
      setFilteredProducts(allProducts);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...products];

    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedSustainability) {
      filtered = filtered.filter(p => p.sustainability === selectedSustainability);
    }

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSustainabilityChange = (e) => {
    setSelectedSustainability(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('Todos');
    setSelectedSustainability('');
  };

  return (
    <div className="catalog-page">
      <div className="container">
        <div className="catalog-header">
          <h1 className="page-title">Produtos Sustentáveis</h1>
          <p className="page-description">
            Descubra nossa coleção de produtos ecológicos. Cada compra faz a diferença!
          </p>
        </div>

        <div className="catalog-content">
          <aside className="filters-sidebar">
            <div className="filters-header">
              <h3 className="filters-title">Filtros</h3>
              {(searchTerm || selectedCategory !== 'Todos' || selectedSustainability) && (
                <button onClick={clearFilters} className="clear-filters">
                  Limpar Tudo
                </button>
              )}
            </div>

            <div className="filter-group">
              <label className="filter-label">Buscar</label>
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>

            <div className="filter-group">
              <label className="filter-label">Categoria</label>
              <div className="category-filters">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`category-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Nível de Sustentabilidade</label>
              <select
                value={selectedSustainability}
                onChange={handleSustainabilityChange}
                className="sustainability-select"
              >
                <option value="">Todos os Níveis</option>
                {Object.values(sustainabilityLevels).map(level => (
                  <option key={level.value} value={level.value}>
                    {level.label} (+{level.points} pts)
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-info">
              <p className="results-count">
                Exibindo {filteredProducts.length} de {products.length} produtos
              </p>
            </div>
          </aside>

          <main className="products-section">
            {loading ? (
              <div className="loading-container">
                <div className="loading">Carregando produtos...</div>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3 className="no-results-title">Nenhum produto encontrado</h3>
                <p className="no-results-description">
                  Tente ajustar seus filtros ou termo de busca
                </p>
                <button onClick={clearFilters} className="btn btn-primary">
                  Limpar Filtros
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Catalog;

