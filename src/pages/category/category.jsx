import React from "react";
import { useParams } from "react-router-dom";
import { useGetCIngleCategory } from "./service/useGetCIngleCategory";
import { ProductCard } from "../../components/card/product-card/product-card";

export const Category = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetCIngleCategory(slug);

  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-3">
        {data?.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
