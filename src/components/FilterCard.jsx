import { motion } from "framer-motion";
import { IoFastFood } from "../assets/icons";
const FilterCard = ({ data, category, setCategory }) => {
  return (
    <motion.div
      key={data.id}
      onClick={() => setCategory(data.cat)}
      className={`group w-28 min-w-[128px] cursor-pointer rounded-md py-6 ${
        category === data.cat ? "bg-emerald-500" : "bg-primary"
      } hover:bg-emerald-500 shadow-md flex flex-col items-center justify-center gap-4`}
    >
      <div
        className={`w-10 h-10 rounded-full ${
          category === data.cat ? "bg-primary" : "bg-emerald-500"
        } group-hover:bg-primary shadow-md flex  items-center justify-center`}
      >
        <IoFastFood
          className={` ${
            category === data.cat ? "text-emerald-500" : "text-primary"
          } group-hover:text-emerald-500`}
        />
      </div>
      <p
        className={` ${
          category === data.cat ? "text-primary" : "text-textColor"
        } group-hover:text-primary`}
      >
        {data.title}
      </p>
    </motion.div>
  );
};

export default FilterCard;
