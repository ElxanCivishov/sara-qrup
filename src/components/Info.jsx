import { motion } from "framer-motion";
import { slideTop } from "../assets/animations";
const Info = () => {
  return (
    <div className="flex gap-10 flex-wrap items-center justify-center  py-10 mt-5">
      <motion.div
        {...slideTop}
        className="group group/item w-[80%] md:w-[270px] p-[20px] bg-slate-100 rounded-[10px]
         hover:bg-emerald-500 shadow-lg hover:shadow-lg "
      >
        <span className="flex items-center justify-between">
          <h1 className="text-textColor text-[16px] font-semibold group-hover:text-white">
            hello
          </h1>
          <span className="flex items-center text-[#ccc] group-hover:text-white">
            as
          </span>
        </span>
        <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          repellat soluta voluptate ipsam unde totam recusandae officiis maiores
          necessitatibus impedit?
        </p>
      </motion.div>
      <motion.div
        {...slideTop}
        className="group group/item w-[80%] md:w-[270px] p-[20px] bg-slate-100 rounded-[10px]
         hover:bg-emerald-500 shadow-lg hover:shadow-lg transition-all"
      >
        <span className="flex items-center justify-between">
          <h1 className="text-textColor text-[16px] font-semibold group-hover:text-white">
            hello
          </h1>
          <span className="flex items-center text-[#ccc] group-hover:text-white">
            as
          </span>
        </span>
        <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          repellat soluta voluptate ipsam unde totam recusandae officiis maiores
          necessitatibus impedit?
        </p>
      </motion.div>
      <motion.div
        {...slideTop}
        className="group group/item w-[80%] md:w-[270px] p-[20px] bg-slate-100 rounded-[10px]
         hover:bg-emerald-500 shadow-lg hover:shadow-lg "
      >
        <span className="flex items-center justify-between">
          <h1 className="text-textColor text-[16px] font-semibold group-hover:text-white">
            hello
          </h1>
          <span className="flex items-center text-[#ccc] group-hover:text-white">
            as
          </span>
        </span>
        <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          repellat soluta voluptate ipsam unde totam recusandae officiis maiores
          necessitatibus impedit?
        </p>
      </motion.div>
      <motion.div
        {...slideTop}
        className="group group/item w-[80%] md:w-[270px] p-[20px] bg-slate-100 rounded-[10px]
         hover:bg-emerald-500 shadow-lg hover:shadow-lg "
      >
        <span className="flex items-center justify-between">
          <h1 className="text-textColor text-[16px] font-semibold group-hover:text-white">
            hello
          </h1>
          <span className="flex items-center text-[#ccc] group-hover:text-white">
            as
          </span>
        </span>
        <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          repellat soluta voluptate ipsam unde totam recusandae officiis maiores
          necessitatibus impedit?
        </p>
      </motion.div>
    </div>
  );
};

export default Info;
