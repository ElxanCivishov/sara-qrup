import { motion } from "framer-motion";
import { staggerFadeInOut } from "../assets/animations";
import f6 from "/img/f6.png";
import { HiCurrencyRupee } from "../assets/icons";
const CartItem = ({ index }) => {
  return (
    <motion.div
      {...staggerFadeInOut(index)}
      className="w-full flex items-center justify-start bg-zinc-800 rounded-md shadow-md px-4 gap-4"
    >
      <img src={f6} alt="" className="w-24 min-w-[94px] h-24 object-contain" />
      <div className="flex items-center justify-start gap-1 w-full">
        <p className="text-lg  text-primary font-semibold">
          Nar
          <span className="text-sm block capitalize text-gray-400">Drink</span>
        </p>
        <p className="text-sm font-semibold gap-1 flex items-center justify-center ml-auto text-emerald-400">
          <HiCurrencyRupee /> 20.00
        </p>
      </div>
    </motion.div>
  );
};

export default CartItem;
