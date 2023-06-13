import { Link, NavLink } from "react-router-dom";
import { Logo } from "../assets";
import {
  isActiveStyled,
  isActiveStyledMobile,
  isNotActiveStyled,
  isNotActiveStyledMobile,
} from "../utils/styles";
import { motion } from "framer-motion";
import { MdClose, MdLogout, MdMenu, MdShoppingCart } from "../assets/icons";
import { buttonClick, slideTop } from "../assets/animations";
import { Us, Ru, Az } from "react-flags-select";
import { useEffect, useState } from "react";
import { Avatar } from "../assets";

const Header = ({ setIsCard }) => {
  const [isMenu, setIsMenu] = useState(false);
  const [isLang, setIsLang] = useState(false);
  const [currentUser, setCurrentUser] = useState(true);
  const [mobileNav, setMobileNav] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (mobileNav) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "auto";
  }

  const handleSignOut = () => {
    setCurrentUser(false);
  };

  return (
    <header
      className={`fixed z-50 inset-x-0  flex items-center justify-between px-6 md:px-20 py-3 md:py-4 transition-all duration-300 ${
        scrollPosition > 0 ? "bg-white top-0" : "bg-transparent top-[40px]"
      }`}
    >
      {/* {!mobileNav && ( */}
      <>
        <NavLink
          to="/"
          className="flex items-center justify-center  gap-4 z-[55]"
        >
          <img src={Logo} className="w-12" alt="" />
        </NavLink>
        <nav className="flex items-center justify-center gap-8">
          <ul className="hidden md:flex  items-center justify-center gap-8 ">
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyled : isNotActiveStyled
              }
              to="/"
            >
              Ana Səhifə
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyled : isNotActiveStyled
              }
              to="/about"
            >
              Məhsullar
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyled : isNotActiveStyled
              }
              to="/services"
            >
              Haqqımızda
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyled : isNotActiveStyled
              }
              to="/contactus"
            >
              Əlaqə
            </NavLink>
          </ul>
        </nav>
        <motion.div className="flex items-center justify-center gap-4 md:gap-8">
          <motion.div
            {...buttonClick}
            className="relative cursor-pointer"
            onClick={() => setIsCard(true)}
          >
            <MdShoppingCart className="text-2xl md:text-3xl text-textColor" />
            <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-red-500 flex items-center justify-center -top-2 md:-top-4 -right-1 absolute">
              <p className="text-base text-white font-semibold ">2</p>
            </div>
          </motion.div>

          {/* languages */}
          <div
            className="cursor-pointer relative "
            onMouseEnter={() => setIsLang(true)}
            onMouseLeave={() => setIsLang(false)}
          >
            <div className="px-2 md:px-4 text-base md:text-xl py-2 shadow-md bg-transparent rounded-md hover:bg-gray-100 hover:text-zinc-900  cursor-pointer relative flex items-center border  gap-2">
              <Az />
              Az
            </div>

            {isLang && (
              <motion.div
                onMouseLeave={() => setIsLang(false)}
                {...slideTop}
                className="bg-white backdrop-blur-md shadow-md rounded-md absolute top-12 px-2 md:px-4 py-2 gap-2 flex flex-col right-0   items-center justify-center"
              >
                <button className="text-base md:text-xl text-textColor hover:text-emerald-500 gap-2 flex items-center">
                  <Us /> En
                </button>
                <button className="text-base md:text-xl text-textColor hover:text-emerald-500 gap-2 flex items-center">
                  <Ru /> Ru
                </button>
              </motion.div>
            )}
          </div>

          {currentUser ? (
            <div
              className="cursor-pointer relative"
              onMouseEnter={() => setIsMenu(true)}
              onMouseLeave={() => setIsMenu(false)}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-md flex items-center justify-center">
                <motion.img
                  className="w-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  referrerPolicy="no-referrer"
                  src={currentUser?.picture ? currentUser?.picture : Avatar}
                />
              </div>
              {isMenu && (
                <motion.div
                  onMouseLeave={() => setIsMenu(false)}
                  {...slideTop}
                  className="bg-white backdrop-blur-md shadow-md rounded-md absolute top-12 px-6 py-6 gap-4 flex flex-col w-48 right-0"
                >
                  <Link
                    to="/dashboard/home"
                    className="text-xl text-textColor hover:text-emerald-500"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    className="text-xl text-textColor hover:text-emerald-500"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/user-orders"
                    className="text-xl text-textColor hover:text-emerald-500"
                  >
                    Orders
                  </Link>
                  <hr />
                  <motion.div
                    {...buttonClick}
                    onClick={() => handleSignOut()}
                    className="group flex items-center justify-center px-3 py-2 rounded-md shadow-md bg-gray-100 hover:bg-gray-200 gap-3"
                  >
                    <MdLogout className="text-2xl text-textColor group-hover:text-headingColor" />
                    <p>Sign out</p>
                  </motion.div>
                </motion.div>
              )}
            </div>
          ) : (
            <NavLink to="/login">
              <motion.button
                {...buttonClick}
                className="px-2 md:px-4 text-base md:text-xl py-2 shadow-md border rounded-md hover:bg-gray-100 hover:text-zinc-900 cursor-pointer"
              >
                Daxil ol
              </motion.button>
            </NavLink>
          )}
          {/* toogle mobile  */}
          <motion.div
            {...buttonClick}
            onClick={() => setMobileNav(!mobileNav)}
            className="group  md:hidden flex items-center justify-center px-2 py-2 rounded-md shadow-md z-[55] bg-gray-100 hover:bg-gray-200 gap-3"
          >
            {mobileNav ? (
              <MdClose className="text-2xl text-textColor cursor-pointer" />
            ) : (
              <MdMenu className="text-2xl text-textColor cursor-pointer" />
            )}
          </motion.div>
        </motion.div>
      </>
      {/* )} */}
      {mobileNav && (
        <motion.div className="fixed md:hidden z-[51] inset-x-0 top-0 flex flex-col px-4 py-6 pt-32 bg-lightOverlay backdrop-blur-md w-screen h-screen overflow-hidden ">
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyledMobile : isNotActiveStyledMobile
            }
            to="/"
          >
            Ana Sehife
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyledMobile : isNotActiveStyledMobile
            }
            to="/products"
          >
            Mehsullar
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyledMobile : isNotActiveStyledMobile
            }
            to="/haqqqimizda"
          >
            Haqqimizda
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyledMobile : isNotActiveStyledMobile
            }
            to="/gallery"
          >
            Qalereya
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyledMobile : isNotActiveStyledMobile
            }
            to="/contact"
          >
            Elaqe
          </NavLink>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
