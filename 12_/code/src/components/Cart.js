import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/slice/cartSlice";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import PaymentDetails from "./PaymentDetails";
import useSimpleConfirm from "../hooks/useSimpleConfirm";
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
  const { confirm, ConfirmModal } = useSimpleConfirm();

  // dispatching an action which will call the reducer
  const dispatch = useDispatch();

  // Never do this
  // const store = useSelector((store) => store);
  // const cartItems = store.cart.cartItems;

  // Subscribing to the cart
  const cart = useSelector((store) => store.cart.cartItems);
  const cartItems = Object.values(cart);

  const handleClearCart = async () => {
    confirm("Do you want to Clear the Cart?", (result) => {
      if (result) {
        dispatch(clearCart());
      }
    });
  };

  return (
    <div className="min-h-[calc(100vh-142px)] w-full flex flex-col items-center justify-center bg-[#f1f1f1] py-8">
      {cartItems.length ? (
        <div className="w-[70%] flex flex-col gap-4">
          {/* Cart Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
              Your Shopping Cart 🛒
            </h1>
            <button
              onClick={handleClearCart}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all duration-200"
            >
              <FiTrash2 size={20} />
              Clear Cart
            </button>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center gap-[20px]">
            {/* Items Card */}
            <div className="w-full">
              <div className="bg-white rounded-md">
                {cartItems.map((item) => (
                  <CartItem key={item?.item?.id} details={item} />
                ))}
              </div>
            </div>
            {/* Bill Card */}
            <div className="bg-white w-full rounded-md">
              <PaymentDetails cartItems={cartItems} />
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
      {ConfirmModal}
    </div>
  );
};

export default Cart;
