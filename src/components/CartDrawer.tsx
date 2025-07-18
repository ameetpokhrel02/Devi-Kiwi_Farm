import React, { useEffect } from 'react';
import { useCart } from './CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (isOpen) {
      console.log('Cart contents:', cart);
    }
  }, [isOpen, cart]);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      style={{ minWidth: 350 }}
    >
      {/* Debug Section - Remove after troubleshooting */}
      <div className="p-2 bg-yellow-50 text-xs text-yellow-800 border-b border-yellow-200">
        <strong>DEBUG:</strong> {JSON.stringify(cart)}
      </div>
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-2xl font-bold text-primary">Shopping Cart</h2>
        <button onClick={onClose} className="text-2xl text-gray-500 hover:text-destructive">&times;</button>
      </div>
      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4">
        {cart.length === 0 ? (
          <div className="text-center text-muted-foreground mt-10">Your cart is empty.</div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center bg-white rounded-lg shadow mb-4 p-3 border border-primary/30">
              <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover rounded mr-4 border border-primary/40" />
              <div className="flex-1">
                <div className="font-semibold text-primary">{item.name}</div>
                <div className="text-muted-foreground text-sm mb-1">Rs. {item.price}</div>
                <div className="flex items-center">
                  <button
                    className="text-primary border border-primary rounded-full w-7 h-7 flex items-center justify-center hover:bg-primary/10 disabled:opacity-50"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    –
                  </button>
                  <span className="mx-2 w-6 text-center">{item.quantity}</span>
                  <button
                    className="text-primary border border-primary rounded-full w-7 h-7 flex items-center justify-center hover:bg-primary/10"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="ml-4 text-destructive hover:bg-destructive/10 rounded-full w-8 h-8 flex items-center justify-center text-xl"
                onClick={() => removeFromCart(item.id)}
                title="Remove"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
      {/* Footer */}
      <div className="p-6 border-t bg-white">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-lg">Total:</span>
          <span className="font-bold text-xl text-primary">Rs. {total}</span>
        </div>
        <button
          className="w-full border border-primary text-primary py-2 rounded-full font-semibold mb-3 hover:bg-primary/10 transition disabled:opacity-50"
          onClick={clearCart}
          disabled={cart.length === 0}
        >
          Clear Cart
        </button>
        <button
          className="w-full bg-primary text-primary-foreground py-2 rounded-full font-semibold hover:bg-primary/90 transition disabled:opacity-50"
          disabled={cart.length === 0}
          onClick={() => alert('Checkout functionality coming soon!')}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDrawer; 