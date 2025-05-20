import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("❌ ไม่สามารถโหลดสินค้า:", error.message);
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">รายการสินค้า</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 text-center">
                {product.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
