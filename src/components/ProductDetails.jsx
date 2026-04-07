import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../assets/store/cartSlice";

const fetchProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
};

const ProductDetails = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  if (isLoading) return <h1 className="text-center mt-10">Loading...</h1>;

  const isInCart = cartItems.find((item) => item.id === data.id);

  const addtocart = () => {
    dispatch(add(data));
  };

  return (
    <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-10">

      {/* LEFT IMAGE */}
      <div className="bg-gray-100 p-10 rounded-xl flex justify-center">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="w-80 object-contain"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>

        <h1 className="text-2xl font-semibold mb-3">
          {data.title}
        </h1>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-bold text-red-500">
            ${data.price}
          </span>

          <span className="text-gray-500">
            ⭐ {data.rating}
          </span>
        </div>

        <p className="text-gray-600 mb-6">
          {data.description}
        </p>

        {/* COLOR */}
        <div className="mb-6">
          <p className="font-semibold mb-2">Color</p>

          <div className="flex gap-3">
            <span className="w-6 h-6 bg-blue-900 rounded-full border"></span>
            <span className="w-6 h-6 bg-gray-700 rounded-full border"></span>
            <span className="w-6 h-6 bg-black rounded-full border"></span>
          </div>
        </div>

        {/* QUANTITY */}
        <div className="flex items-center gap-4 mb-6">

          <select className="border px-3 py-2 rounded">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

          <button
            onClick={addtocart}
            className={`px-8 py-3 rounded font-semibold transition 
            ${isInCart ? "bg-gray-400 text-white" : "bg-rose-400 text-white hover:bg-rose-500"}`}
          >
            {isInCart ? "Added" : "Add to Cart"}
          </button>

        </div>

        <p className="text-gray-500">
          Category: {data.category}
        </p>

      </div>
    </div>
  );
};

export default ProductDetails;
