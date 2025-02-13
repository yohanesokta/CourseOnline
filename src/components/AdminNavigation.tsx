import {  useEffect, useState } from "react"
import Logo from "/icon.svg"
import { getuserdata } from "../api/auth.controller"
import { useNavigate } from "react-router"
import {  IoSettings } from "react-icons/io5"
import { BiHome, BiLogOut, BiMenu, BiUser } from "react-icons/bi"
import { BsEye } from "react-icons/bs"
import { FaUserSlash } from "react-icons/fa"
import { FiSettings } from "react-icons/fi"

interface wrapperProps {
  childern : React.ReactNode;
  position : string
}

export const AdminNavigation :React.FC<wrapperProps> = ({childern,position}) => {
  const [ProfileView , SetProfileView] = useState(false)
  const [Userdata, SetUserData] = useState<any>()
  const token = localStorage.getItem("usertoken")
  const [HideSideBar,SetHideSideBar] = useState(true)

  const ProfileAction = () =>{
    SetProfileView(!ProfileView)
  }
  const HideSideFunc = () => {
    if (HideSideBar) {SetHideSideBar(false)} else {SetHideSideBar(true)}
  }

  const navigate = useNavigate()
  useEffect(() => {
    if (token) {
      getuserdata(token).then((element) => {
        if (element.role != "admin") {
          navigate("/")
        }
        SetUserData(element)
      })
    } else {
      navigate("/auth/login")
    }
  },[])

  return (
    <>
    <nav className="h-14 w-full shadow-md border-gray-400 p-3 bg-white flex fixed">
      <button className="xl:hidden" onClick={HideSideFunc}>
        <BiMenu size={24}/>
      </button>
      <div className="px-5 h-full w-auto flex justify-center items-center gap-3">
        <img src={Logo} className="h-[80%]" alt="logo" />
        <a href="/" className="font-poppins font-semibold">SerbaIlmu ID</a>
      </div>
      <div className="w-14 h-full absolute top-0 right-10">
        <div className="w-full h-full skeleton rounded-full scale-75 overflow-hidden cursor-pointer relative" onClick={ProfileAction}>
          {(Userdata) ? <>
            <div className="uppercase font-bold font-poppins flex w-full h-full justify-center items-center bg-gray-600 text-white">
              {Userdata.username.split("")[0]}
            </div>

            <div className="w-full h-full  absolute top-0" style={{ backgroundImage: `url(${Userdata.profile_picture_url})`, backgroundSize: "cover" }}>

            </div>
          </>
            : ""}
        </div>
      </div>

      <div className={(ProfileView) ? "bg-white shadow-xl border-2 border-gray-200 w-50 absolute top-12 right-15 rounded-b-2xl rounded-l-2xl h-max flex flex-col gap-5 p-5" : "hidden"}>
        <a href="/" className="flex gap-2 items-center"><BiHome/> Home</a>
        <a href="/Profile" className="flex gap-2 items-center"><BiUser/> Profile</a>
        <a href="/Setting" className="flex gap-2 items-center"><FiSettings/> Setting</a>
        <a href="/auth/logout" className="flex gap-2 items-center"><BiLogOut/> Logout</a>
      </div>
    </nav>
    <section className={`fixed top-14  overflow-hidden border-r-1 z-10  h-screen bg-white border-gray-400 ${(HideSideBar) ? "w-0 xl:w-60" : " w-60  "}`}>
        <ul className="flex flex-col gap-2 font-poppins font-semibold text-gray-600 py-3 px-4">
          <li onClick={()=>{navigate("/admin/dashboard")}} className={`flex  gap-3  items-center cursor-pointer p-2 ${(position == "dashboard") ? "bg-blue-500 rounded text-white" : ""}`}><BiHome/> Dashboard</li>
          <li onClick={()=>{navigate("/admin/dashboard/mentor")}} className={`flex  gap-3  items-center cursor-pointer p-2 ${(position == "mentor") ? "bg-blue-500 rounded text-white" : ""}`}><BiUser/>Mentor Control</li>
          <li className={`flex  gap-3  items-center cursor-pointer p-2 ${(position == "content") ? "bg-gray-400 rounded text-white" : ""}`}><IoSettings/> Content Setting</li>
          <li className={`flex  gap-3  items-center cursor-pointer p-2 ${(position == "monitor") ? "bg-gray-400 rounded text-white" : ""}`}><BsEye/> Monitor</li>
          <li className={`flex  gap-3  items-center cursor-pointer p-2 ${(position == "user") ? "bg-gray-400 rounded text-white" : ""}`}><FaUserSlash/> User & Blacklist</li>
        </ul>
    </section>
    <div className={`bg-gray-100 min-h-screen w-full h-60 pt-14  xl:pl-60`}>
      {childern}
    </div>
    </>
  )
}
