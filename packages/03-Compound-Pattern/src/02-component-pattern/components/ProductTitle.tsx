import { useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from "../styles/styles.module.css";


export const ProdcutTitle = ({ title }: { title?: string }) => { //Asi indicamos que es opcional

  const { product } = useContext(ProductContext)
  return (
    <span className={styles.productDescription}>{title ? title : product.title}</span>
  )
}