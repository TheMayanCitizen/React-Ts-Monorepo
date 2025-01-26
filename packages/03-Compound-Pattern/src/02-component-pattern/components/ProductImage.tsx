import { useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg"
export const ProductImage = ({ img = "" }) => {//De esta manera hacermos "opcional" el parametro

  const { product } = useContext(ProductContext)
  let imgToSHow: string

  if (img) {
    imgToSHow = img
  } else if (product.img) {
    imgToSHow = product.img
  } else {
    imgToSHow = noImage
  }
  return (
    <img className={styles.productImg} src={imgToSHow} alt="Product name" />
  )
}