import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { remove } from "../assets/store/cartSlice";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  const removecart = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Cart Items */}
        <div className="flex-1 w-full">
          {cartItems.length === 0 ? (
            <p className="text-gray-400 text-sm">Your cart is empty.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex items-center gap-4 py-5 border-b border-gray-200">
                {/* Image */}
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full animate-pulse bg-gray-200" />
                  )}
                </div>

                {/* Details */}
                <div className="flex flex-1 justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="text-base font-bold text-gray-900">${item.totalPrice.toFixed(2)}</span>
                    <span className="text-xs text-gray-400">${item.price.toFixed(2)} each</span>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removecart(item.id)}
                  className="text-gray-400 hover:text-red-500 transition ml-2"
                >
                  <FaTimes size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        {cartItems.length > 0 && (
          <div className="w-full lg:w-64 border border-gray-200 rounded-xl p-5 bg-gray-50 shrink-0">
            <h2 className="text-base font-bold text-gray-900 mb-4">Order Summary</h2>

            <div className="flex justify-between text-sm mb-3">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm mb-4">
              <span className="text-gray-500">Shipping</span>
              <span className="font-semibold text-green-700">FREE</span>
            </div>

            <hr className="border-gray-200 mb-4" />

            <div className="flex justify-between items-center mb-5">
              <span className="text-base font-bold text-gray-900">Total</span>
              <span className="text-2xl font-extrabold text-gray-900">${subtotal.toFixed(2)}</span>
            </div>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm py-3 rounded-lg transition">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
