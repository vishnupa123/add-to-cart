import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../assets/store/cartSlice";
import { useNavigate } from "react-router-dom";

const Cards = ({ product }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();   // ✅ correct

  // redux store cart items
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = cartItems.find(item => item.id === product.id);

  const addtocart = (e) => {
    e.stopPropagation(); // ✅ prevents card click navigation
    dispatch(add(product));
  };

  return (
    <div
      className="w-[300px] bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)} // ✅ correct navigation
    >

      {/* Image Section */}
      <div className="bg-yellow-100 p-8 flex justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-40 object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 text-center">

        <h2 className="text-lg font-semibold truncate">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-center gap-3 mt-4">
          <span className="w-4 h-4 bg-red-400 rounded-full"></span>
          <span className="w-4 h-4 bg-teal-400 rounded-full"></span>
          <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
        </div>

        <div className="flex justify-between items-center mt-6">

          <h3 className="text-lg font-bold text-gray-800">
            ${product.price}
          </h3>

          <button
            onClick={addtocart}
            className={`text-xs border-2 cursor-pointer px-4 py-2 rounded transition 
            ${isInCart ? "bg-rose-400 text-white border-rose-400" : "bg-white text-black border-rose-400"}`}
          >
            {isInCart ? "Added" : "Add to Cart"}
          </button>

        </div>

      </div>
    </div>
  );
};

export default Cards;
