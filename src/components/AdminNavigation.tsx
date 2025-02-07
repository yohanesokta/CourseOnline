import {  useEffect, useState } from "react"
import Logo from "/icon.svg"
import { getuserdata } from "../api/auth.controller"
import { useNavigate } from "react-router"
import { IoArrowBack } from "react-icons/io5"

interface wrapperProps {
  childern : React.ReactNode;
}

export const AdminNavigation :React.FC<wrapperProps> = ({childern}) => {
  const [Userdata, SetUserData] = useState<any>()
  const token = localStorage.getItem("usertoken")
  const [HideSideBar,SetHideSideBar] = useState(false)

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
    }
  },[])

  return (
    <>
    <nav className="h-14 w-full shadow-md border-gray-400 p-3 bg-white flex fixed">
      <a href="/" className="px-5 h-full w-auto flex justify-center items-center gap-3">
        <img src={Logo} className="h-[80%]" alt="logo" />
        <p className="font-poppins font-semibold">SerbaIlmu ID</p>
      </a>
      <div className="w-14 h-full absolute top-0 right-10">
        <div className="w-full h-full skeleton rounded-full scale-75 overflow-hidden cursor-pointer relative" onClick={() => { navigate("/") }}>
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
    </nav>
    <section className={`fixed top-14  overflow-hidden border-r-1 shadow-md h-screen bg-white border-gray-400 ${(HideSideBar) ? "w-4 xl:w-60" : " w-60  "}`}>
          <button onClick={HideSideFunc} className={`cursor-pointer p-2 w-full bg-gray-100 flex justify-end xl:hidden ${(HideSideBar) ? "h-screen" : ""}`}><IoArrowBack size={18}/></button>
        <ul className="flex flex-col gap-2 font-poppins font-semibold text-gray-600 py-3 px-4">
          <li className="cursor-pointer p-2 bg-blue-500 rounded text-white">User Mentor</li>
          <li className="cursor-pointer p-2">Mentor Control</li>
          <li className="cursor-pointer p-2">Content Setting</li>
          <li className="cursor-pointer p-2">Monitor</li>
          <li className="cursor-pointer p-2">User & Blacklist</li>

        </ul>
    </section>
    <div className={`w-full h-60 pt-14  xl:pl-60 ${(HideSideBar) ? "pl-4" : ""}`}>
      {childern}
    </div>
    </>

  )
}
