import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // const { price, name } = cartItems[0]?.card?.info;

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  // console.log(price);
  // console.log(cartItems[0]?.card?.info.price / 100);

  const subtotal = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity) / 100,
    0
  );

  const deliveryFee = 50;
  const total = subtotal + deliveryFee;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-5 text-gray-600">
            Your cart is empty
          </h2>
          <p className="text-gray-500">
            Add some items to your cart to get started.
          </p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Item List */}
          <div className="w-full lg:w-8/12 bg-white shadow-lg rounded-lg p-4">
            <ItemList items={cartItems} />

            <div className="flex justify-between mt-6">
              <button
                onClick={handleClearCart}
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200 text-sm"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-4/12 bg-white shadow-lg rounded-lg p-4 lg:ml-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Order Summary
            </h2>

            <div className="text-base mb-2 flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="text-base mb-4 flex justify-between text-gray-700">
              <span>Delivery</span>
              <span>₹{deliveryFee.toFixed(2)}</span>
            </div>

            <hr className="my-4 border-gray-300" />

            <div className="text-xl font-bold flex justify-between mb-4 text-gray-800">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <button className="w-full px-4 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-200">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
