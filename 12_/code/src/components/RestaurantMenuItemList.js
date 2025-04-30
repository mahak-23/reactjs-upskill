import { IMG_CDN_URL } from "../../../../assets/constant.js";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/slice/cartSlice.js";
import useSimpleConfirm from "../hooks/useSimpleConfirm";

const RestaurantMenuItemList = ({ items }) => {
  const dispatch = useDispatch();
  const { confirm, ConfirmModal } = useSimpleConfirm();

  // Subscribing to the cart
  const cart = useSelector((store) => store.cart.cartItems);

  const handleAddToCart = (item) => {
    confirm(
      <>
        Are you sure you want to add{" "}
        <span className="text-[#e07000] font-bold animate-pulse">
          {item.name}
        </span>{" "}
        to the cart?
      </>,
      (result) => {
        if (result) {
          dispatch(addItemToCart(item));
        }
      }
    );
  };

  const handleRemoveFromCart = (item) => {
    confirm(
      <>
        Are you sure you want to remove{" "}
        <span className="text-[#e07000] font-bold animate-pulse">
          {item.name}
        </span>{" "}
        from the cart?
      </>,
      (result) => {
        if (result) {
          dispatch(removeItemFromCart(item));
        }
      }
    );
  };

  return (
    <div>
      {items.map((item) => {
        const { id, name, price, defaultPrice, ratings, imageId, description } =
          item.card.info;
        const avgRatingString = ratings?.aggregatedRating?.rating || 3.8;
        const cartItem = cart && cart[id] ? cart[id] : null;

        return (
          <div
            key={id}
            className="flex justify-between items-center gap-[50px] py-[20px] border-b border-[#5b5b5b]"
          >
            <div className="flex flex-col gap-[5px] w-[75%]">
              <h2 className="text-[20px] font-bold text-gray-700">{name}</h2>
              <h4 className="font-semibold text-gray-700">
                🏷️ ₹{price / 100 || defaultPrice / 100}
              </h4>
              <p className="text-gray-600">
                {(description && description.slice(0, 140)) || "Dummy Data"}
              </p>
              <h4 className="flex font-semibold">
                ⭐
                <span className="text-[#484747]">
                  {avgRatingString} (
                  {ratings?.aggregatedRating?.ratingCountV2 || 6})
                </span>
              </h4>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                className="w-[150px] h-[100px] object-cover rounded-[8px]"
                src={IMG_CDN_URL + imageId}
                alt={name}
              />
              {cartItem ? (
                <div className="w-[100px] text-[#ff8c00] bg-white font-semibold rounded-md text-[1.2rem] relative bottom-[15px] flex items-center justify-between">
                  <button
                    className="rounded-l-md px-[12px] py-[5px] cursor-pointer border-none hover:bg-gray-300 hover:text-[#e46f20] transition-all 0.3s"
                    onClick={() => handleRemoveFromCart(cartItem.item)}
                  >
                    -
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                    className="rounded-r-md px-[12px] py-[5px] cursor-pointer border-none hover:bg-gray-300 hover:text-[#e46f20] transition-all 0.3s"
                    onClick={() => handleAddToCart(cartItem.item)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleAddToCart(item.card.info)}
                  className="text-[#ff8c00] bg-white font-semibold rounded-md text-[1.2rem] px-[30px] py-[5px] cursor-pointer border-none relative bottom-[15px] hover:bg-gray-300 hover:text-[#e46f20] transition-all 0.3s"
                >
                  ADD <span>{cartItem?.quantity}</span>
                </button>
              )}
            </div>
          </div>
        );
      })}
      {ConfirmModal}
    </div>
  );
};

export default RestaurantMenuItemList;
