import { motion } from "framer-motion";
import { SlideInFromOutside, buttonClick } from "../assets/animations";
import {
  BiChevronsRight,
  FcClearFilters,
  HiCurrencyRupee,
} from "../assets/icons";
import "tailwind-scrollbar";
import CartItem from "./CartItem";
const Cart = ({ setIsCard }) => {
  return (
    <motion.div
      {...SlideInFromOutside}
      className="fixed z-50 top-0 right-0 w-300 md:w-508 bg-lightOverlay backdrop-blur-md shadow-md h-screen"
    >
      <div className="w-full flex items-center justify-between py-2 pb-12 px-3">
        <motion.i
          onClick={() => setIsCard(false)}
          {...buttonClick}
          className="cursor-pointer"
        >
          <BiChevronsRight className="text-[50px] text-textColor hover:text-red-500" />
        </motion.i>
        <p className="text-xl text-headingColor font-semibold font-poppins">
          Sizin Səbət
        </p>
        <motion.i {...buttonClick} className="cursor-pointer">
          <FcClearFilters className="text-[30px] text-textColor" />
        </motion.i>
      </div>
      <div className="flex flex-1 flex-col items-start justify-start rounded-t-3xl bg-zinc-900 h-full py-6 gap-3 relative">
        <div className="flex flex-col items-start justify-start gap-3 w-full h-[70%] overflow-y-scroll px-4 scrollbar-none">
          <CartItem index={1} />
          <CartItem index={2} />
          <CartItem index={3} />
          <CartItem index={4} />
          <CartItem index={5} />
        </div>

        {/* <h2 className="text-3xl font-semibold text-primary text-center w-full">
          Səbət boşdur!
        </h2> */}

        <div className="flex  flex-col items-center justify-start px-4 py-3 pt-10 gap-24 w-full h-[30%] bg-zinc-800 rounded-t-[60px]">
          <div className="w-full flex items-center justify-evenly">
            <p className="text-2xl text-zinc-500 font-semibold">Total:</p>
            <p className="text-2xl text-zinc-500 font-semibold">
              <span className="text-primary flex items-center">
                <HiCurrencyRupee className="text-red-400" />
                40.00
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
