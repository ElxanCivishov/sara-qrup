import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInOut } from "../assets/animations";

const LoginInput = ({ type, placeHolder, value, name, setValue, icon }) => {
  const [isFocus, setIsFocus] = useState(false);

  const count = () => {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        sum += i * 10 + j;
      }
    }
    return sum;
  };
  console.log(count());
  let total = 0;
  for (let i = 0; i < 100; i++) {
    total += i;
  }
  console.log(total);
  return (
    <motion.div
      {...fadeInOut}
      className={`flex items-center justify-center gap-4 bg-white backdrop-blur-md rounded-md w-full px-4 py-2 ${
        isFocus ? "shadow-md shadow-emerald-700" : "shadow-none"
      }`}
    >
      {icon}

      <input
        type={type}
        placeholder={placeHolder}
        value={value || ""}
        name={name}
        onChange={(e) => setValue(e)}
        className="w-full h-full bg-transparent text-textColor text-lg font-semibold border-none outline-none "
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </motion.div>
  );
};

export default LoginInput;
