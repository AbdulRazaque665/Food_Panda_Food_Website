import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Cheeseburger", price: 5.99, description: "A tasty cheeseburger" },
  { id: 2, name: "Pepperoni Pizza", price: 8.99, description: "Large pizza with pepperoni toppings" },
  { id: 3, name: "Caesar Salad", price: 4.99, description: "Fresh salad with Caesar dressing" },
  { id: 4, name: "Chicken Sandwich", price: 6.99, description: "Crispy chicken sandwich" },
  { id: 5, name: "French Fries", price: 2.99, description: "Crispy golden fries" },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const selectProducts = (state) => state.products;
export default productSlice.reducer;
