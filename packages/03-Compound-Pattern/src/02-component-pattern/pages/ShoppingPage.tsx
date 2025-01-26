import { ProdcutTitle, ProductButtons, ProductImage } from '../components';
import { ProductCard } from '../components';


const product = {
  id: "1",
  title: "Coffee Mug - Cool",
  img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1><hr />
      <ProductCard product={product} >

        <ProductCard.Image />
        <ProductCard.Title title={"Hello it's Tim"} />
        <ProductCard.Buttons />
      </ProductCard>
      <ProductCard product={product} >

        <ProductImage />
        <ProdcutTitle />
        <ProductButtons />

      </ProductCard>
    </div>
  )
}
