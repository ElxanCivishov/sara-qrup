import { Slider } from "../containers";
import { motion } from "framer-motion";

const MainSlider = () => {
  const products = [
    {
      id: 1,
      title: "Gilas",
      price: 20,
      img: "https://images.unsplash.com/photo-1528820540591-4d090b2f6e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0JTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Portagal",
      price: 10,
      img: "https://images.unsplash.com/photo-1645378193840-f4a90003285d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZydWl0JTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Alma",
      price: 30,
      img: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXQlMjBwbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <motion.div className="w-full flex flex-col items-start justify-start px-8 md:px-20 py-3 md:py-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-1 items-start justify-start">
          <p className="text-2xl text-textColor font-semibold">Toxumlar</p>
          <div className="w-24 h-1 rounded-md bg-emerald-500 "></div>
        </div>
      </div>
      <Slider products={products} />
    </motion.div>
  );
};
export default MainSlider;
