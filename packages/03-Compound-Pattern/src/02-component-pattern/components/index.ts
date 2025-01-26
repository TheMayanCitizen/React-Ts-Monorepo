import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProdcutTitle } from "./ProductTitle";
import { ProductButtons } from './ProductButtons';
import { ProductImage } from "./ProductImage";
import { ProductCardHOCProps } from "../interfaces/interfaces";


//Estamos asignandole a ProductCardHOC la nuevas propiedades para poder usar la forma <ProductCard.Title/> etc...
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProdcutTitle,
  Buttons: ProductButtons,
  Image: ProductImage
})

//Esta es una forma de exportarlo
export default ProductCard


export { ProdcutTitle } from "./ProductTitle";
export { ProductButtons } from './ProductButtons';
export { ProductImage } from "./ProductImage";
// export { ProductCard } from "./ProductCard";
//Los exports corresponden a la forma 
/* 
<ProductCard product={product} >
  <ProductImage />
  <ProdcutTitle />
  <ProductButtons />
</ProductCard> 
*/

