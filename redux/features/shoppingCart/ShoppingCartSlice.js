const { createSlice } = require("@reduxjs/toolkit");

const INITIAL_STATE = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

const resetTotals = (state) => {
  state.totalCount = 0;
  state.totalPrice = 0;
  state.items.map((item) => {
    state.totalCount += item.count;
    state.totalPrice +=
      item.priceWithDiscount === 0
        ? item.price * item.count
        : item.priceWithDiscount * item.count;
  });
  return state;
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: INITIAL_STATE,
  reducers: {
    addProduct(state, action) {
      state.items.push({ ...action.payload, count: 1 });
      return resetTotals(state);
    },
    increaseCount(state, action) {
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.count++;
        }
      });
      return resetTotals(state);
    },
    decreaseCount(state, action) {
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.count--;
        }
      });
      return resetTotals(state);
    },
    removeProduct(state, action) {
      state = {
        items: state.items.filter((item) => item.id !== action.payload),
      };
      return resetTotals(state);
    },
  },
});

export const { addProduct, increaseCount, decreaseCount, removeProduct } =
  shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
