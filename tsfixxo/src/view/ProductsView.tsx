import React, { useEffect } from "react";
import MainMenuSection from "../sections/MainMenuSection";
import BreadcrumbSection from "../sections/BreadcrumbSection";
import { ProductContextType, useProductContext} from "../contexts/ProductContext"
import ProductTiles from "../sections/ProductTiles";
import FooterSection from "../sections/FooterSection";


const ProductsView: React.FC = () => {
  const {products, getAll} = useProductContext() as ProductContextType

  useEffect(() => {
    getAll()
  }, [])

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductTiles title="Products" items={products} />
      <FooterSection />
    </>
  )
}

export default ProductsView