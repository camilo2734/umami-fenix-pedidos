import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { CartSidebar } from './components/CartSidebar';
import { useCart } from './hooks/useCart';
import { PRODUCTS, CATEGORIES } from './data/products';
import { Search, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
  } = useCart();

  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Recommended Section Configuration
  const recommendedConfig = [
    {
      id: 'dedito-queso-60',
      marketingTitle: '¡El alma de la fiesta!',
      marketingDesc: '¿Reunión en casa? Con 60 unidades crujientes y un centro de queso que se estira deliciosamente, nadie se queda sin probar. Prácticos, rendidores y con el sabor que a todos les encanta.'
    },
    {
      id: 'surtido-56',
      marketingTitle: '¡Variedad para todos!',
      marketingDesc: 'Olvídate de elegir. Este mega pack trae deditos, empanadas y bolitas de carne. La opción ideal para eventos grandes donde quieres impresionar y satisfacer a cada invitado sin complicaciones.'
    },
    {
      id: 'emp-hawaiana-18',
      marketingTitle: '¡Sabor tropical irresistible!',
      marketingDesc: 'Una explosión dulce y salada en cada bocado. La combinación clásica de jamón, queso y piña en nuestra masa doradita y crocante. Perfectas para desayunos o cenas llenas de sabor.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Navigation & Header */}
      <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />

      {/* Hero Section (Mini) */}
      <div className="bg-brand-600 text-white py-8 px-4 sm:px-6 lg:px-8 mb-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Catálogo Digital</h2>
          <p className="text-brand-100 max-w-2xl">
            Descubre nuestros deliciosos fritos congelados y listos para comer. Empanadas, deditos y mucho más.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Recommended Section */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="text-brand-500 fill-brand-500" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Recomendados para ti</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedConfig.map((config) => {
              const originalProduct = PRODUCTS.find(p => p.id === config.id);
              if (!originalProduct) return null;

              // Create a specialized version of the product for this section
              const promoProduct = {
                ...originalProduct,
                description: config.marketingDesc
              };

              return (
                <div key={config.id} className="relative mt-4">
                  {/* Marketing Badge */}
                  <div className="absolute -top-3 left-0 right-0 flex justify-center z-10">
                    <span className="bg-brand-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md border-2 border-white tracking-wide uppercase">
                      {config.marketingTitle}
                    </span>
                  </div>
                  <div className="h-full pt-2">
                    <ProductCard product={promoProduct} onAdd={addToCart} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Filters */}
        <div className="mb-8 space-y-4 border-t border-gray-200 pt-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Explora todo el menú</h3>
          
          {/* Search Bar */}
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 sm:text-sm shadow-sm"
              placeholder="Buscar empanadas, deditos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Pills */}
          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 gap-2 no-scrollbar">
            <button
              onClick={() => setSelectedCategory('Todos')}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'Todos'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Todos
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={addToCart} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No encontramos productos con esa búsqueda.</p>
            <button 
              onClick={() => {setSearchQuery(''); setSelectedCategory('Todos');}}
              className="mt-4 text-brand-600 font-medium hover:underline"
            >
              Ver todo el catálogo
            </button>
          </div>
        )}
      </main>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        total={cartTotal}
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
        onClear={clearCart}
      />
    </div>
  );
};

export default App;