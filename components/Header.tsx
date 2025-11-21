import React from 'react';
import { ShoppingCart, UtensilsCrossed } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Area */}
          <div className="flex items-center gap-2">
            <div className="bg-brand-500 p-2 rounded-full text-white">
              <UtensilsCrossed size={24} />
            </div>
            <div className="leading-tight">
              <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                umami<span className="text-brand-500">fenix</span>
              </h1>
              <p className="text-xs text-gray-500 font-medium hidden sm:block">
                Renacemos en cada sabor
              </p>
            </div>
          </div>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-gray-600 hover:text-brand-600 transition-colors rounded-full hover:bg-brand-50"
            aria-label="Abrir carrito"
          >
            <ShoppingCart size={26} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-600 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};