import { motion } from "framer-motion";
import FilterCard from "./FilterCard";
import { useState } from "react";
import { SliderCard } from "../containers";

const FilterSection = () => {
  const [category, setCategory] = useState("old");
  const categories = [
    { id: 1, title: "Drinks", cat: "drinks" },
    { id: 3, title: "Fresh", cat: "fresh" },
    { id: 5, title: "Assian", cat: "assian" },
    { id: 2, title: "Old", cat: "old" },
    { id: 4, title: "New", cat: "new" },
    { id: 6, title: "Cat1", cat: "cat1" },
    { id: 7, title: "Cat2", cat: "cat2" },
  ];
  const products = [
    {
      id: 1,
      title: "Gilas",
      price: 20,
      img: "https://images.unsplash.com/photo-1528820540591-4d090b2f6e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0JTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "old",
    },
    {
      id: 2,
      title: "Portagal",
      price: 10,
      img: "https://images.unsplash.com/photo-1645378193840-f4a90003285d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZydWl0JTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "old",
    },
    {
      id: 3,
      title: "Alma",
      price: 30,
      img: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXQlMjBwbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "fresh",
    },
    {
      id: 4,
      title: "Gilas",
      price: 20,
      img: "https://images.unsplash.com/photo-1528820540591-4d090b2f6e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0JTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "new",
    },
    {
      id: 5,
      title: "Portagal",
      price: 10,
      img: "https://images.unsplash.com/photo-1645378193840-f4a90003285d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZydWl0JTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "fresh",
    },
    {
      id: 6,
      title: "Alma",
      price: 30,
      img: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXQlMjBwbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "old",
    },
  ];
  return (
    <motion.div className="w-full flex flex-col items-start justify-start px-8 md:px-20 py-3 md:py-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-1 items-start justify-start">
          <p className="text-2xl text-textColor font-semibold">Kateqoriyalar</p>
          <div className="w-36 h-1 rounded-md bg-emerald-500 "></div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center overflow-x-auto gap-6 py-8 pt-6">
        {categories &&
          categories.map((data) => (
            <FilterCard
              category={category}
              setCategory={setCategory}
              data={data}
              key={data.id}
            />
          ))}
      </div>
      <div className="w-full flex flex-wrap items-center justify-evenly gap-4 mt-12">
        {products &&
          products
            .filter((data) => data.category === category)
            .map((data, i) => <SliderCard key={i} index={i} data={data} />)}
      </div>
    </motion.div>
  );
};

export default FilterSection;
