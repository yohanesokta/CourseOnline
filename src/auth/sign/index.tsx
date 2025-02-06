import { Navigation } from "../../components/Navigation"
import GoogleIcon from "../../assets/google-icon.svg"
import { BsEyeFill, BsEyeSlash } from "react-icons/bs"
import { useState, useRef } from "react"
import { endpoint_api, endpoint_app, userSign } from "../../api/auth.controller"
import { useNavigate } from "react-router"

const Sign = () => {
  const [TypeInput, SetTypeInput] = useState("password")
  const [Retype, SetRetype] = useState("password");
  const [messageEmail, SetmessageEmail] = useState(false)
  const [messagePassword, SetmessagePassword] = useState(false)
  const [messageRePassword, SetmessageRePassword] = useState(false)
  const [messageBroker, SetMessageBroker] = useState("")
  const [DisableButton, SetDisableButton] = useState(false)

  const username = useRef<any>()
  const email = useRef<any>()
  const password = useRef<any>()
  const repassword = useRef<any>()

  const navigate = useNavigate()
  const changeTypePassword = () => {
    (TypeInput == "password") ? SetTypeInput("text") : SetTypeInput("password")
  }
  const changeRetype = () => {
    (Retype == "password") ? SetRetype("text") : SetRetype("password")
  }
  const resetMessage = () => {
    SetmessageEmail(false); SetmessagePassword(false); SetmessageRePassword(false);
  }

  const FormHandler = async (e: any) => {
    e.preventDefault()
    resetMessage();
    if (!DisableButton) {
      if (String(password.current.value).length < 8) { SetmessagePassword(true) } else
        if (password.current.value != repassword.current.value) { SetmessageRePassword(true) }
        else {
          try {
            SetDisableButton(true)
            const data = await userSign({
              username: username.current.value,
              email: email.current.value,
              password: password.current.value,
              repassword: repassword.current.value
            })

            if (data?.status == 200) {
              navigate("/auth/login");
            }


          } catch (error: any) {

            SetDisableButton(false)
            if (error.response.data.message = "Email is already registered") {
              SetmessageEmail(error.response.data.message)
            } else {
              SetMessageBroker(error.response.data.message)
            }
          }
        }
    }
  }


  return (
    <>
      <Navigation />

      <div className="w-full md:flex md:mt-15">
        <div className="w-full p-5 font-poppins md:w-[770px] md:mx-auto ">
          <h1 className="text-center text-blue-600 font-bold text-xl md:text-2xl">Daftar</h1>
          <p className="md:text-sm font-light text-[9pt] text-gray-600 text-center">daftarkan akun atau <a href="/auth/login" className="text-blue-500 font-semibold">Login</a></p>
          <form onSubmit={FormHandler} className="w-full flex flex-col gap-3 mt-10">
            <input required type="text" name="username" id="username" ref={username} className="w-full border-1 border-gray-300 rounded text-sm md:text-[12pt] p-3 md:p-4" placeholder="Enter username" />

            <input required type="email" id="email" name="email" ref={email} className="w-full border-1 border-gray-300 rounded text-sm md:text-[12pt] p-3 md:p-4" placeholder="Enter email addres" />
            <p className={(messageEmail) ? "text-sm text-red-500" : "hidden"}>Email sudah terdaftar</p>


            <div className="flex input-search border-2 border-gray-300 focus-within:border-gray-600 rounded">
              <input required type={TypeInput} id="password" name="password" ref={password} className="w-full  text-sm py-3 px-3 md:text-[12pt] md:p-4" placeholder="Enter password" />
              <button type="button" className="px-4" onClick={changeTypePassword}>{(TypeInput == "text") ? <BsEyeFill /> : <BsEyeSlash />}</button>
            </div>
            <p className={(messagePassword) ? "text-sm text-red-500" : "hidden"}>password harus lebih dari 8 karakter</p>

            <div className="flex input-search border-2 border-gray-300 focus-within:border-gray-600 rounded">
              <input required type={Retype} id="repassword" name="repassword" ref={repassword} className="w-full  text-sm py-3 px-3 md:text-[12pt] md:p-4" placeholder="Enter again password" /><button type="button" className="px-4" onClick={changeRetype}>{(Retype == "text") ? <BsEyeFill /> : <BsEyeSlash />}</button>
            </div>
            <p className={(messageRePassword) ? "text-sm text-red-500" : "hidden"}>password tidak sama</p>
            <a href="" className="text-[9pt] text-right text-blue-400 underline">Lupa password?</a>

            <button type="submit" className={`py-3 ${(DisableButton) ? "bg-blue-300" : "bg-blue-600"} text-white font-bold rounded`}>{(DisableButton) ? "Please Wait" : "Daftar"}</button>
            <p className={(messageBroker.length != 0) ? "text-sm text-red-500" : "hidden"} >{messageBroker}</p>
            <a href={endpoint_api + "/auth/google?redirect=" + endpoint_app + "/auth/google"} className=" cursor-pointer border-1 border-gray-300 py-[20px] flex text-sm"><img src={GoogleIcon} className="h-[20px] px-5" alt="" />Masuk Pakai Google</a>

          </form>
        </div>
      </div>
    </>
  )
}

export default Sign