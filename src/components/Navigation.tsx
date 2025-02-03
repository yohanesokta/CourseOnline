import { Link } from "react-router"
import "../app.css"
import { IoSearchSharp } from "react-icons/io5";
import { FiAlignJustify } from "react-icons/fi";
import { useState, useEffect } from "react";
import logo from "/icon.svg"

export const Navigation = () => {
  const [Open, SetOpen] = useState(true)
  const [hasShadow, setHasShadow] = useState(false);
  function OpenSide() {
    if (Open) { SetOpen(false) } else { SetOpen(true) }
  }


  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return (<>
    <nav id="navbar" className={` w-full  py-10 h-13 flex z-50 bg-white  items-center  ${hasShadow ? "shadow-md fixed top-0 anim-navbar" : "relative"}`}>
      <div className="h-10 flex justify-center items-center mx-5 xl:mx-10 ">
        <img src={logo} className="w-7 h-7 xl:w-8 xl:h-8" alt="" />
        <span className="logo-name ml-2 font-semibold font-poppins">SerbaIlmu ID</span>
      </div>
      


      <div className={Open ? "nav-open flex flex-col shadow-md h-0 py-0 px-10  overflow-hidden absolute w-full top-18 bg-white xl:top-0 xl:w-auto xl:shadow-none xl:p-0 xl:flex-row xl:h-11 xl:relative" : " h-[370px] nav-open flex flex-col px-10 py-10 shadow-md  overflow-hidden absolute w-full top-18 bg-white xl:top-0 xl:w-auto xl:shadow-none xl:p-0 xl:flex-row xl:h-11 xl:relative "}>
        <ul className="order-2 flex flex-col xl:flex h-full xl:flex-row gap-5 font-medium text-gray-700 text-md  justify-center xl:items-center font-opensans " >
          <li>
            <Link className="hover:text-black" to={"/"}>Home</Link>
          </li>
          <li>
            <Link className="hover:text-black" to={"/hello"}>Course Tutorial</Link>
          </li>
          <li>
            <Link className="hover:text-black" to={"/hello"}>Category</Link>
          </li>
          <li>
            <Link className="hover:text-black" to={"/hello"}>Learning Path</Link>
          </li>
          <li>
            <Link className="hover:text-black" to={"/hello"}>About</Link>

          </li>
        </ul>

        <div className="order-1  py-3 flex mb-10 sm:flex md:w-[50%]  md:mx-0 md:mr-30 xl:order-2 xl:w-auto xl:h-11 xl:py-0 xl:mx-10  pr-5  input-search rounded-md border-1 border-gray-400 focus-within:border-gray-600 focus-within:border-2 ">
          <div className="h-full flex justify-center items-center px-2 text-gray-500">
            <IoSearchSharp size={18} />
          </div>
          <input className="border-0 w-full focus:border-0" type="text" placeholder="Cari kelas kalian" name="" id="" />
        </div>
      </div>

      <div className=" h-full top-0 absolute right-2 xl:right-10 flex justify-center items-center gap-4">
        <button className="order-2 p-3 xl:hidden" onClick={OpenSide}>
          <FiAlignJustify size={24} />
        </button>
        <button className="order-1 hover:bg-slate-800 hover:border-white hover:text-white  xl:block px-5 font-normal py-2 border-gray-500 border-1 rounded-md">Masuk</button>
        <button className="hover:bg-slate-800 hover:border-white hover:text-white hidden xl:block px-5 font-normal py-2 text-white border-gray-600 bg-gray-600 border-1 rounded-md">Daftar</button>
      </div>

    </nav>

    <div className={`w-full h-19 ${hasShadow ? "" : "hidden"}`}></div>
  </>
  )
}