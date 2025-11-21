import React, { useState } from 'react';
import { X, Trash2, Minus, Plus, ShoppingBag, Send } from 'lucide-react';
import { CartItem, UserInfo } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  total: number;
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
  onClear: () => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cart,
  total,
  onRemove,
  onUpdateQty,
  onClear,
}) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    address: '',
    notes: '',
  });
  const [error, setError] = useState('');

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(amount);

  const handleCheckout = () => {
    if (!userInfo.name.trim()) {
      setError('Por favor ingresa tu nombre para continuar.');
      return;
    }
    setError('');

    // Generate WhatsApp Message
    const header = `Hola, deseo realizar el siguiente pedido:`;
    const nameLine = `Nombre: ${userInfo.name}`;
    const itemsList = cart
      .map(
        (item) =>
          `- ${item.name} (x${item.quantity}) — ${formatPrice(item.price * item.quantity)}`
      )
      .join('\n');
    const totalLine = `Total: ${formatPrice(total)}`;
    const addressLine = userInfo.address ? `Dirección: ${userInfo.address}` : '';
    const notesLine = userInfo.notes ? `Observaciones: ${userInfo.notes}` : '';

    const fullMessage = [
      header,
      nameLine,
      itemsList,
      totalLine,
      addressLine,
      notesLine,
    ]
      .filter((line) => line.trim() !== '')
      .join('\n');

    const encodedMessage = encodeURIComponent(fullMessage);
    // Target number from prompt: +57 302 267 9121
    const whatsappUrl = `https://wa.me/573022679121?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full animate-slide-in-right">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="text-brand-600" />
              <h2 className="text-lg font-bold text-gray-900">Tu Pedido</h2>
            </div>
            <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-gray-400">
                <ShoppingBag size={64} strokeWidth={1} />
                <p className="text-lg font-medium">Tu carrito está vacío</p>
                <button onClick={onClose} className="text-brand-600 font-medium hover:underline">
                  Volver al catálogo
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 bg-white p-2 rounded-lg border border-gray-100">
                      <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                        <img
                           src={`https://picsum.photos/seed/${item.id}/200`} 
                           alt={item.name}
                           className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm leading-tight">{item.name}</h4>
                          <p className="text-brand-600 font-bold text-sm mt-1">{formatPrice(item.price)}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                            <button 
                              onClick={() => onUpdateQty(item.id, -1)}
                              className="p-1 hover:bg-white hover:shadow-sm rounded text-gray-600 transition-all"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQty(item.id, 1)}
                              className="p-1 hover:bg-white hover:shadow-sm rounded text-gray-600 transition-all"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            title="Eliminar"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end">
                   <button onClick={onClear} className="text-xs text-red-500 hover:underline flex items-center gap-1">
                     <Trash2 size={12} /> Vaciar carrito
                   </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer / Checkout */}
          {cart.length > 0 && (
            <div className="border-t border-gray-100 bg-gray-50 p-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>

              <div className="space-y-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Datos de envío</h3>
                
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Tu Nombre <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                    placeholder="Ej: Juan Pérez"
                    className={`w-full p-2 text-sm border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none ${error ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
                  />
                  {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">Dirección (Opcional)</label>
                  <input
                    type="text"
                    value={userInfo.address}
                    onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                    placeholder="Ej: Calle 123 # 45-67"
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
                  />
                </div>
                
                 <div>
                  <label className="block text-xs text-gray-500 mb-1">Observaciones (Opcional)</label>
                  <textarea
                    value={userInfo.notes}
                    onChange={(e) => setUserInfo({ ...userInfo, notes: e.target.value })}
                    placeholder="Ej: Sin salsa, portería..."
                    rows={2}
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none resize-none"
                  />
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20 transition-all active:scale-95"
              >
                <Send size={20} />
                Realizar Pedido en WhatsApp
              </button>
              <p className="text-xs text-center text-gray-400">
                Serás redirigido a WhatsApp para enviar tu pedido.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};