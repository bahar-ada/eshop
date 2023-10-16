import React from "react";
import styles from "./ChangeCountButtons.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  removeProduct,
} from "@/redux/features/shoppingCart/ShoppingCartSlice";
import { BsFillTrash3Fill } from "react-icons/bs";

const ChangeCountButtons = ({ productId }) => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const thisItemCount = shoppingCart.items.filter(
    (item) => item.id === productId
  )[0].count;
  return (
    <div className={`${styles.outerContainer}`}>
      <label
        onClick={() => {
          dispatch(increaseCount(productId));
        }}
      >
        +
      </label>
      <label>{thisItemCount}</label>
      <label>
        {thisItemCount === 1 ? (
          <BsFillTrash3Fill
            onClick={() => dispatch(removeProduct(productId))}
          />
        ) : (
          <span onClick={() => dispatch(decreaseCount(productId))}>-</span>
        )}
      </label>
    </div>
  );
};

export default ChangeCountButtons;
