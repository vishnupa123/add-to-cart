import React, { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";
import Cards from "./Cards";
import Hero from "./Hero";

import Footer from '../components/Footer'

const Products = () => {

  const [page, setPage] = useState(1);
  const limit = 16; // 16 products per page

  const fetchProducts = async () => {

    const skip = (page - 1) * limit;

    const res = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );

    return res.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["products", page],
    queryFn: fetchProducts,
    placeholderData: keepPreviousData
  });

  if (isLoading) return <h1>Loading...</h1>;

  const totalPages = Math.ceil(data.total / limit);

  return (
    <div className="max-w-7xl mx-auto px-4">
<br />
      <Hero />

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">

        {data.products.map((product) => (
          <Cards key={product.id} product={product} />
        ))}

      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-2 mt-10">

        {[...Array(totalPages)].map((_, index) => (

          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={`px-3 py- border rounded-full text-sm
            ${page === index + 1 ? "bg-rose-400 text-white" : "bg-white"}`}
          >
            {index + 1}
          </button>

        ))}

      </div>


<div>

 
</div>



 

    </div>
  );
};

export default Products;
