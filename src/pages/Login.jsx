import { useState } from "react";
import { LoginBg, Logo } from "../assets";
import { useNavigate } from "react-router-dom";
import { LoginInput, MainLoader } from "../containers";
import { motion } from "framer-motion";
import { FaLock, FaEnvelope } from "../assets/icons";
import { buttonClick, fadeInOut } from "../assets/animations";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = () => {
    navigate("/");
  };
  const register = () => {};
  console.log(user);

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return (
    <>
      <div className="w-screen h-screen overflow-hidden relative flex">
        {isLoading && (
          <motion.div
            {...fadeInOut}
            className="w-full h-full fixed z-50 inset-0 bg-lightOverlay backdrop-blur-md flex items-center justify-center"
          >
            <MainLoader />
          </motion.div>
        )}
        {/* background image */}
        <img
          src={LoginBg}
          className="w-full h-full absolute object-cover top-0 left-0"
          alt="login image"
        />
        <div className="z-10 h-full flex flex-col items-center bg-transparent md:bg-lightOverlay w-full md:w-460 md:backdrop-blur-md p-4 px-6 py-12 gap-6">
          {/* top section */}
          <div className="flex items-center justify-center gap-4 w-full">
            <img src={Logo} className="w-16 mt-10" alt="" />
          </div>

          {/* welcome message */}
          <p className="text-xl md:text-3xl font-semibold text-headingColor">
            Sara Qrupa xoş gəlmisiniz!
          </p>
          <p className="text-xl text-textColor -mt-4">
            {isSignUp ? "Yeni hesab yaradın!" : "Hesabınıza daxil olun!"}
          </p>

          <div className="w-full flex flex-col gap-6 px-2  pr-4 py-4 md:py-8">
            <LoginInput
              value={user.email}
              setValue={handleChange}
              type="email"
              name="email"
              placeHolder="Email"
              icon={<FaEnvelope className="text-xl text-textColor" />}
            />

            <LoginInput
              value={user.password}
              setValue={handleChange}
              type="password"
              name="password"
              placeHolder="Parol"
              icon={<FaLock className="text-xl text-textColor" />}
            />

            {isSignUp && (
              <LoginInput
                value={user.confirmPassword}
                setValue={handleChange}
                type="password"
                name="confirmPassword"
                placeHolder="Parol təkrar"
                icon={<FaLock className="text-xl text-textColor" />}
              />
            )}
            {!isSignUp ? (
              <p className="gap-2  flex justify-end px-2 pr-4 text-white ">
                Hesabınız yoxdur?
                <motion.button
                  {...buttonClick}
                  onClick={() => setIsSignUp(true)}
                  className="underline cursor-pointer font-semibold text-red-600 bg-transparent"
                >
                  Yarat
                </motion.button>
              </p>
            ) : (
              <p className="gap-2  flex justify-end px-2 text-white">
                Hesabınız var?
                <motion.button
                  {...buttonClick}
                  onClick={() => setIsSignUp(false)}
                  className="underline cursor-pointer font-semibold text-red-600 bg-transparent"
                >
                  Daxil ol
                </motion.button>
              </p>
            )}

            {isSignUp ? (
              <motion.button
                {...buttonClick}
                onClick={() => register()}
                className="w-full text-xl px-4 py-2  cursor-pointer rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-150"
              >
                Yarat
              </motion.button>
            ) : (
              <motion.button
                {...buttonClick}
                onClick={() => login()}
                className="w-full text-xl px-4 py-2  cursor-pointer rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-150"
              >
                Daxil ol
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
