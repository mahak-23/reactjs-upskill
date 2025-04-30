import RestaurantMenuItemList from "./RestaurantMenuItemList";
import { MdKeyboardArrowUp } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

const RestaurantMenuCategory = ({ data, showMenuItems, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-full shadow-md px-[20px] bg-gray-50  rounded-md py-[10px] my-[10px]">
        {/* Category Header */}
        <div
          className="flex justify-between items-center text-xl font-[700] cursor-pointer"
          onClick={handleClick}
        >
          <span
            className="truncate"
            title={data?.title}
          >{`${data?.title} (${data?.itemCards?.length})`}</span>
          <div className="text-[40px]">
            {showMenuItems ? <MdKeyboardArrowUp /> : <RiArrowDownSLine />}
          </div>
        </div>

        {/* Category Body */}
        {showMenuItems && <RestaurantMenuItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
