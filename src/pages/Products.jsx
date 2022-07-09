import React, { useEffect } from "react";

export const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <>
      Products
      <div>Products</div>
      <div>Categorías</div>
      <div>Filtro</div>
      <div>Alls</div>
    </>
  );
};
