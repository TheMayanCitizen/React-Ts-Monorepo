
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";

import { ProductCardProps, ProductContextProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext


export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct()
  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }
    }>
      <div className={styles.productCard}>

        {children}

        {/* children sustituye a todo este codigo  */}
        {/* <ProductImage img={product.img} /> */}
        {/* <img className={styles.productImg} src={noImage} alt="coffee mug" /> */}
        {/* <ProdcutTitle title={product.title} /> */}

        {/* <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  )
}
