import { useNavigate, useParams } from "react-router"
import { AdminNavigation } from "../../components/AdminNavigation"
import { useEffect, useState } from "react"
import { delete_data_mentor, getuserdatamentor } from "../../api/admin.controller"
import img from "../../assets/users-available.svg"
import { BiEdit } from "react-icons/bi"
import { Modal } from "../../components/Modal"
import { supabase_get_bucket } from "../../api/supabase.controller"
import imageCompression from "browser-image-compression"
const App = () => {
  const param = useParams()
  const [MentorData, SetMentorData] = useState<any>()
  const [DeleteModal,SetDeleteModal] = useState(false)
  const [isLoadImage,SetLoadImage] = useState<boolean>(false)

  const [ImageUpdates,SetImageUpdates] = useState("");
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

  function ImageUpdate (event:any) {
    const SelectedImage = event.target.files[0]
    if (SelectedImage && MentorData) {
      SetLoadImage(true)
      const option = { maxSizeKB: 100, maxWidthOrHeight: 128, useWebWorker: true };
      imageCompression(SelectedImage,option).then( async (images)=>{
        SetImageUpdates(URL.createObjectURL(images))
        await supabase_get_bucket(images,MentorData.id)
        SetLoadImage(false)
      })
    }
  }


  return <div className="p-3 flex flex-col font-poppins md:max-w-md md:p-5">
    {(MentorData) ? <>
      <div className=" bg-white xl:w-md p-4 xl:my-2 rounded-md shadow-md">
        <h1 className="font-semibold xl:text-2xl">Profile Mentor</h1>
        <p className="py-2 text-sm text-gray-600 xl:text-[12pt]">Kelola profile mentor anda dengan hak akses admin. Peringatan ini dapat menggati informasi sekaligus hal hal yang sudah di tetapkan sebelumnya</p>
      </div>

      <div className="relative mt-4 bg-white py-4 rounded-2xl xl:w-md shadow-md flex flex-col items-center">
        <h1 className="font-semibold my-2 xl:text-xl">Info Dasar</h1>
        <div className="w-20 h-auto relative  xl:w-30" >
          
          <img className={`my- w-full h-20 xl:h-30 rounded-full object-cover ${(isLoadImage) ? "animate-pulse" : ""}`} src={(ImageUpdates) ? ImageUpdates : (MentorData.profile_picture_url) ? MentorData.profile_picture_url : img} alt="foto profile" />
          <label htmlFor="img" className="bg-[rgba(0,0,0,.3)] cursor-pointer flex w-full h-10 xl:h-15  absolute top-10 xl:top-15 rounded-b-full"><BiEdit className="m-auto" size={24} color="white" /></label>
        </div>
        <input onInput={ImageUpdate} type="file" id="img" className="hidden" />

       

        <div className="mt-2 xl:mt-4">
          <h3 className="font-semibold text-center xl:text-[14pt]">Nama</h3>
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
