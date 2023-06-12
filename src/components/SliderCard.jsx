import { buttonClick } from "../assets/animations";
import { HiCurrencyRupee, IoBasket } from "../assets/icons";
import { motion } from "framer-motion";
const SliderCard = ({ data }) => {
  return (
    <div className="bg-lightOverlay hover:drop-shadow-lg backdrop-blur-md rounded-xl flex items-center justify-center relative px-4 py-2 w-full md:w-340 md:min-w-350 gap-3">
      <img src={data.img} alt="" className="w-48 h-48 object-contain" />
      <div className="relative pt-12">
        <p className="text-xl text-headingColor font-semibold">{data.title}</p>
        <p className="text-lg text-emerald-500 font-semibold flex items-center justify-center gap-1">
          <HiCurrencyRupee className="text-emerald-500" />
          {parseFloat(data.price.toFixed(2))}
        </p>
        <motion.div
          {...buttonClick}
          className="w-8 h-8 bg-emerald-500 flex items-center justify-center absolute -top-4 right-2 cursor-pointer"
        >
          <IoBasket className="text-2xl text-primary" />
        </motion.div>
      </div>
    </div>
  );
};

export default SliderCard;
