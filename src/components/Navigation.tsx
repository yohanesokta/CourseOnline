import { Link, useNavigate } from "react-router"
import "../app.css"
import { IoSearchSharp } from "react-icons/io5";
import { FiAlignJustify } from "react-icons/fi";
import { useState, useEffect } from "react";
import logo from "/icon.svg"
import { getuserdata } from "../api/auth.controller";
import { useDispatch } from "react-redux";
import { setdata } from "../utility/slice";

export const Navigation = () => {
  const [Open, SetOpen] = useState(true)
  const [Login, SetLogin] = useState(false)
  const [ProfileView, SetProfileView] = useState(false)
  const [Userdata, SetUserdata] = useState<any>()
  const dispatch = useDispatch();
  const [hasShadow, setHasShadow] = useState(false);
  function OpenSide() {
    if (Open) { SetOpen(false) } else { SetOpen(true) }
  }

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("usertoken")
    if (token) {
      SetLogin(true)
      getuserdata(token).then((data) => {
        dispatch(setdata(data))
        SetUserdata(data)
      })
    }

    const handleScroll = () => {
      setHasShadow(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const GoProfil = () => {
    if (Userdata) {
      if (ProfileView) { SetProfileView(false) } else { SetProfileView(true) }
    }
  }


  return (<>
    <nav id="navbar" className={` w-full  py-10 h-13 flex z-50 bg-white  items-center  ${hasShadow ? "shadow-md fixed top-0 anim-navbar" : "relative"}`}>
      <a href="/" className="h-10 flex justify-center items-center mx-5 xl:mx-10 cursor-pointer">
        <img src={logo} className="w-7 h-7 xl:w-8 xl:h-8" alt="" />
        <span className="logo-name ml-2 font-semibold font-poppins">SerbaIlmu ID</span>
      </a>



      <div className={Open ? "nav-open flex flex-col shadow-md h-0 py-0 px-5  overflow-hidden absolute w-full top-18 bg-white xl:top-0 xl:w-auto xl:shadow-none xl:p-0 xl:flex-row xl:h-11 xl:relative" : " h-[290px] nav-open flex flex-col px-5 py-5 shadow-md  overflow-hidden absolute w-full top-18 bg-white xl:top-0 xl:w-auto xl:shadow-none xl:p-0 xl:flex-row xl:h-11 xl:relative "}>
        <ul className="mt-[-20px] xl:mt-0 order-2 flex flex-col xl:flex h-full xl:flex-row gap-3 font-medium text-gray-700 text-md  justify-center xl:items-center font-opensans " >
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

      <div className=" h-full top-0 absolute right-2 xl:right-10 flex justify-center items-center">
        <button className="order-2 p-3 xl:hidden" onClick={OpenSide}>
          <FiAlignJustify size={24} />
        </button>
        {(Login) ?
          <div className="relatif">
            <button className="w-10 h-10 xl:w-13 xl:h-13 rounded-full overflow-hidden relative skeleton cursor-pointer hover:opacity-70" onClick={GoProfil}>
              {(Userdata) ?
              <>
              <div className="w-full h-full flex justify-center items-center bg-gray-500 text-white uppercase font-bold">{Userdata.username.split("")[0]}</div>
              <div className="w-full h-full absolute top-0" style={{ backgroundImage: `url(${Userdata.profile_picture_url})`, backgroundSize: "cover" }}></div>
              </>
                : ""}
            </button>
            <div className={(ProfileView) ? "w-40 xl:w-50  xl:gap-4 xl:p-4 xl:px-7 p-3 gap-3  bg-white border-1 border-gray-300 flex flex-col absolute top-19 right-0 rounded-l-xl rounded-b-xl shadow-md overflow-hidden" : "hidden"}>
              <a href="">Profile</a>
              <a href="">Setting</a>
              <a href="/auth/logout">Logout</a>
              <p className="text-sm text-gray-500 py-3">{(Userdata) ? Userdata.username : ""}</p>
            </div>
          </div>
          :
          <div className="flex justify-center gap-4 items-center">
            <button className="order-1 hover:bg-slate-800 hover:border-white hover:text-white  xl:block px-5 font-normal py-2 border-gray-500 border-1 rounded-md" onClick={() => { navigate('/auth/login') }}>Masuk</button>
            <button onClick={() => { navigate('/auth/sign') }} className="hover:bg-slate-800 hover:border-white hover:text-white hidden xl:block px-5 font-normal py-2 text-white border-gray-600 bg-gray-600 border-1 rounded-md">Daftar</button>
          </div>
        }

      </div>

    </nav>

    <div className={`w-full h-19 ${hasShadow ? "" : "hidden"}`}></div>
  </>
  )
}