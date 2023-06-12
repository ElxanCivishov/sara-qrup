import { BsTelephoneFill, FaEnvelope } from "../assets/icons";
import { Instagram, Fcbk } from "../assets";
const Topbar = () => {
  return (
    <div className="fixed top-0 z-50 inset-x-0 flex items-center justify-between px-6 md:px-20 py-4 bg-transparent">
      <div className="flex gap-4">
        <p className="flex items-center gap-1 text-[14px] md:text-[18px] text-white">
          <BsTelephoneFill /> *1650
        </p>
        <p className="flex items-center gap-1 text-[14px] md:text-[20px] text-white">
          <FaEnvelope /> saragrup@gmail.com
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <a href="" target="_blank" className="w-8 md:w-10">
          <img className="w-full" src={Instagram} alt="" />
        </a>
        <a href="" target="_blank" className="w-[23px] md:w-[27px]">
          <img className="w-full" src={Fcbk} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Topbar;
