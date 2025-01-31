import { Link } from "react-router"
import "../app.css"
import { IoSearchSharp } from "react-icons/io5";
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";


export const Navigation = () => {
  const [Open, SetOpen] = useState(false)
  function OpenSide() {
    if (Open) { SetOpen(false) } else { SetOpen(true) }
  }

  const OpenUp = () => {
    return (<>
      <div className=" z-51 fixed top-0 left-0 w-full h-full p-3 bg-white">
        <div className="flex w-full">
          <div className="focus-within:border-gray-600 focus-within:border-2 border-1 border-gray-400 flex justify-center items-center w-full p-2 rounded-2xl mx-3">
            <IoSearchSharp className="mx-4" size={18} />
            <input type="text" placeholder="Cari" className="border-0 outline-0" style={{ flex: "1" }} />
          </div>
          <button className="px-2" onClick={OpenSide}>
            <IoMdCloseCircle size={28} />
          </button>
        </div>
          <div className="flex flex-col text-gray-800 font-poppins font-medium text-x gap-2 p-4">
          <Link className="hover:text-black border-b-1 border-gray-300 p-1" to={"/"}>Home</Link>
          <Link className="hover:text-black border-b-1 border-gray-300 p-1" to={"/"}>Course Tutorial</Link>
          <Link className="hover:text-black border-b-1 border-gray-300 p-1" to={"/"}>Category</Link>
          <Link className="hover:text-black border-b-1 border-gray-300 p-1" to={"/"}>About</Link>

          </div>
      </div>
    </>)
  }


  return (<>
    <nav className="w-full py-10 h-13 flex z-50 bg-white  items-center fixed">

      <div className="h-10 flex justify-center items-center mx-10">
        <div className="bg-black w-10 h-10"></div>
      </div>


      <ul className="hidden xl:flex gap-5 h-full font-medium text-gray-700 text-md  justify-center items-center font-opensans " >
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
      <div className="hidden sm:flex md:w-full md:mx-0 md:mr-30 xl:w-auto h-11 xl:mx-10  pr-5  input-search rounded-md border-1 border-gray-400 focus-within:border-gray-600 ">
        <div className="h-full flex justify-center items-center px-2 text-gray-500">
          <IoSearchSharp size={18} />
        </div>
        <input className="border-0 w-full focus:border-0" type="text" placeholder="Cari kelas kalian" name="" id="" />
      </div>

      <div className="h-full top-0 absolute right-10 flex justify-center items-center gap-4">
        <button className="p-3 xl:hidden" onClick={OpenSide}>
          <FiAlignJustify size={24} />
        </button>
        <button className="hidden xl:block px-5 font-normal py-2 border-gray-500 border-1 rounded-md">Masuk</button>
        <button className="hidden xl:block px-5 font-normal py-2 text-white border-gray-600 bg-gray-600 border-1 rounded-md">Daftar</button>
      </div>
    </nav>

    {(Open) ? <OpenUp /> : ""}

    <div className="w-full h-19"></div>
  </>
  )
}