"use client";

import { FaBox } from "react-icons/fa";
import { useScrolling } from "../../common/hooks/useScrolling";
import "./style.css";
import { useRouter } from "next/navigation"; // Import from next/navigation

const FABProduct = () => {
  const router = useRouter();
  const scrolling = useScrolling({ fallbackTime: 750 });

  const handleProductClick = () => {
    router.push("/products");
  };
  return (
    <button
      onClick={handleProductClick}
      className={`fab-product ${!scrolling ? "visible" : "hidden"}`}
    >
      <FaBox className="fab-product-icon" />
      <p className="paraProduct">visit here for products</p>
    </button>
  );
};

export default FABProduct;
