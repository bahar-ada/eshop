import { addProduct } from "@/redux/features/shoppingCart/ShoppingCartSlice";
import React from "react";
import { useDispatch } from "react-redux";
import styles from "./AddProductToShoppingCartButton.module.css";

const AddProductToShoppingCartButton = ({ product }) => {
  const dispatch = useDispatch();
  const addProductHandler = () => {
    dispatch(addProduct(product));
  };
  return (
    <label className={`${styles.button}`} onClick={addProductHandler}>
      افزودن به سبد
    </label>
  );
};

export default AddProductToShoppingCartButton;
