import { BiPen } from "react-icons/bi"
import { AdminNavigation } from "../../components/AdminNavigation"
import { CgAdd } from "react-icons/cg"

import image from "../../assets/users-available.svg"
import { useEffect, useRef, useState } from "react"
import { addusermentor, getusermentor } from "../../api/admin.controller"
import { useNavigate } from "react-router"


const App = () => {
  const [ViewAdd, SetViewAdd] = useState(false)
  const [ButtonAdd, SetButtonAdd] = useState("Tambah")
  const [MesBroker, SetMesBroker] = useState("")
  const [MentorData, SetMentorData] = useState([])
  const add_username = useRef<any>();
  const add_email = useRef<any>();
  const add_password = useRef<any>();
  const addOpen = () => {
    SetViewAdd(!ViewAdd)
  }

  const navigate = useNavigate()

  useEffect(() => {
    getusermentor().then(e => {
      SetMentorData(e.users)
    })
  }, [])

  const addMentor = () => {
    if (add_username.current.value && add_email.current.value && add_password.current.value) {
      SetButtonAdd("Please Wait");
      SetMesBroker("")
      addusermentor({
        username: add_username.current.value,
        email: add_email.current.value,
        password: add_password.current.value
      }).then(e => {
        if (e && e == 200) {
          window.location.reload()
        } else {
          SetButtonAdd("Tambah")
          SetMesBroker(e)
        }
      })
    }
  }


  return (
    <div className="p-3 xl:p-5  py-5 font-poppins">
      <div className="flex gap-6">
        <h1 className="font-bold text-[14pt] xl:text-2xl">Data Mentor</h1>

        <button onClick={addOpen} className="cursor-pointer text-[10pt] px-2 rounded bg-blue-500 text-white flex items-center gap-2"><CgAdd /> Tambah</button>
      </div>
      <p className="md:max-w-md pt-4">Atur user mentor yang akan di gunakan sebagai actor utama dalam membuat menjawab dan memberikan meteri dalam kursus. <a className="text-blue-400 underline" href="/">Learn more</a></p>
      {(ViewAdd) ? <div className="md:max-w-md bg-white p-5 rounded-xl mt-5 flex flex-col gap-4  ">
        <input ref={add_username} className="border-b-1 p-2 border-gray-400 focus:border-2" required type="text" placeholder="Username" />
        <input ref={add_email} className="border-b-1 p-2 border-gray-400 focus:border-2" required type="email" placeholder="Email" />
        <input ref={add_password} className="border-b-1 p-2 border-gray-400 focus:border-2" required type="password" placeholder="Password" />
        {(MesBroker) ? <p className="text-sm text-red-500 py-1">{MesBroker}</p> : ""}

        <button onClick={addMentor} className={`${(ButtonAdd == "Tambah") ? "bg-blue-400" : "bg-blue-200"} text-white text-center flex items-center justify-center gap-2 p-2 rounded`}> {ButtonAdd}</button>
      </div> : ""}
      <div className="w-full rounded-2xl my-5 p-5  bg-white xl:w-[1000px]">
        <form action="" className="w-max flex gap-2 ">
          <input name="s" type="text" className="w-35 xl:w-max font-sm py-2 px-2 border-b-[1.5px] outline-0 focus:border-b-2  bg-white border-gray-400" placeholder="serach" />
          <div className="flex my-auto gap-3 items-center w-max">
            <p>Tampilkan</p>
            <select className="py-1 px-2 rounded bg-white  border-2 border-gray-300" name="Jumlah" id="jumlah">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </form>

        {(MentorData.length != 0) ? 
        <table className=" mt-10 w-full my-5 text-left text-sm xl:text-[14pt]">
        <thead>
          <tr >
            <th >name</th>
            <th>status</th>
            <th className="hidden xl:block">email</th>
            <th className="text-center">action</th>
          </tr>
        </thead>
        <tbody>
          {MentorData.map((element:any) =>
            <tr key={element.user_email}>
              <td className="max-w-28 pt-2 xl:pt-8 pr-2"><div className="flex w-full h-full "><img src={image} className="hidden xl:block h-10 mx-4 my-2 rounderd-full" alt="image" /><p className="text-[12pt] xl:font-semibold flex items-center">{element.username}</p></div></td>
              <td className="pt-2 xl:pt-8 " ><span className="py-1 px-2 rounded bg-green-300 text-white">active</span></td>
              <td className="pt-2 xl:pt-8 hidden xl:block">{element.user_email}</td>
              <td className="pt-2 text-center xl:pt-8"><button onClick={()=>{navigate(`/admin/dashboard/mentor/${btoa(element.id)}`)}} className="bg-blue-400 text-white rounded-2xl p-2 cursor-pointer active:bg-red-500"><BiPen /></button></td>
            </tr>
          )}
        </tbody>

      </table>
        :
        <>
        <div className="my-4 flex flex-col gap-2">
        <div className="w-30 h-5 skeleton rounded-2xl" ></div>
        <div className="w-50 h-5 skeleton rounded-2xl" ></div>
        <div className="w-20 h-5 skeleton rounded-2xl" ></div>

        </div>
        </>
        }
        


      </div>
    </div>
  )
}


export const MentorControl = () => {
  return (
    <>
      <AdminNavigation childern={<App />} position="mentor" />
    </>
  )
}
