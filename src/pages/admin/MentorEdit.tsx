import { useNavigate, useParams } from "react-router"
import { AdminNavigation } from "../../components/AdminNavigation"
import { useEffect, useState } from "react"
import { delete_data_mentor, getuserdatamentor } from "../../api/admin.controller"
import img from "../../assets/users-available.svg"
import { BiEdit } from "react-icons/bi"
import { Modal } from "../../components/Modal"
const App = () => {
  const param = useParams()
  const [MentorData, SetMentorData] = useState<any>()
  const [DeleteModal,SetDeleteModal] = useState(false)
  const userid = atob(param.mentor_id!)
  const navigate = useNavigate()

  useEffect(() => {
    getuserdatamentor(userid!).then((element) => {
      if (element) {
        SetMentorData(element)
      } else {
        navigate('/admin/dashboard/mentor/')
      }
    })
  }, [])

  function deleteMentor () {
      delete_data_mentor(MentorData.id).then(() => {
       navigate("/admin/dashboard/mentor")
      })
  }

  return <div className="p-3 flex flex-col font-poppins md:max-w-md md:p-5">
    {(MentorData) ? <>
      <div className=" xl:bg-white xl:w-md xl:p-4 xl:my-2 xl:rounded-md xl:shadow-md">
        <h1 className="font-semibold xl:text-2xl">Profile Mentor</h1>
        <p className="py-2 text-sm text-gray-600 xl:text-[12pt]">Kelola profile mentor anda dengan hak akses admin. Peringatan ini dapat menggati informasi sekaligus hal hal yang sudah di tetapkan sebelumnya</p>
      </div>

      <div className="relative xl:bg-white xl:py-4 xl:rounded-2xl xl:w-md xl:shadow-md xl:flex xl:flex-col xl:items-center">
        <h1 className="font-semibold my-2 xl:text-xl">Info Dasar</h1>
        <div className="w-20 h-auto relative  xl:w-30" >
          <img className="my-2" src={img} alt="foto profile" />
          <button className="bg-[rgba(0,0,0,.3)] flex w-full h-10 xl:h-15  absolute top-10 xl:top-17 rounded-b-full"><BiEdit className="m-auto" size={24} color="white" /></button>
          <button className="px-3 py-1 bg-blue-400 text-white text-sm rounded-md mx-2 xl:text-[12pt] xl:mx-6">Ganti</button>
        </div>

       

        <div className="mt-2 xl:mt-4">
          <h3 className="font-semibold xl:text-center xl:text-[14pt]">Nama</h3>
          <h1 className="">{MentorData.username!} <button className="bg-blue-400 text-white p-1 rounded-md"><BiEdit /></button></h1>
        </div>

        <h3 className="font-semibold mt-4 xl:mt-6 xl:text-[14pt]">Email</h3>
        <h1 className="">{MentorData.user_email!} <button className="bg-blue-400 text-white p-1 rounded-md"><BiEdit /></button></h1>
        <h3 className="font-semibold mt-4 xl:mt-6 xl:text-[14pt]">Role</h3>
        <h1 className="">{MentorData.role} <button className="bg-blue-400 text-white p-1 rounded-md"><BiEdit /></button></h1>
        <h3 className="font-semibold mt-4">Danger Zone</h3>
        <Modal  active={DeleteModal} state={SetDeleteModal} action={deleteMentor} />
        
        <button onClick={()=>{SetDeleteModal(true)}} className="bg-red-500 text-white font-semibold p-2 w-max my-4 rounded">Delete</button>


      </div>
      

    </> : <>
      <div className="w-md h-200 skeleton rounded-2xl"></div>
    </>}

  </div>
}


export const MentorEdit = () => {
  return (
    <AdminNavigation childern={<App />} position="mentor" />
  )
}
