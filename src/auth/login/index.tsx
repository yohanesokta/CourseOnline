import { Navigation } from "../../components/Navigation"
import GoogleIcon from "../../assets/google-icon.svg"
import { useRef, useState } from "react"
import { BsEyeFill, BsEyeSlash } from "react-icons/bs"
import { endpoint_api, endpoint_app, userLogin } from "../../api/auth.controller"
import { useNavigate } from "react-router"

const Login = () => {
  const [TypeInput, SetTypeInput] = useState("password")
  const [messageBroker, SetmessageBroker] = useState(false)
  const [DisableButton, SetDisableButton] = useState(false)
  const navigate = useNavigate()

  const email = useRef<any>()
  const password = useRef<any>()

  const changeTypePassword = () => {
    (TypeInput == "password") ? SetTypeInput("text") : SetTypeInput("password")
  }

  const FormHandler = async (e: any) => {
    SetmessageBroker(false)
    e.preventDefault()
    if (!DisableButton) {
      SetDisableButton(true)
      try {
        const data = await userLogin({
          email: email.current.value,
          password: password.current.value
        })

        if (data?.status == 200) {
          navigate("/")
        }
        console.log(data)
      } catch (error) {
        SetmessageBroker(true)
        SetDisableButton(false)
      }
    }

  }

  return (
    <>
      <Navigation />

      <div className="w-full md:flex md:mt-15">
        <div className="w-full p-5 font-poppins md:w-[770px] md:mx-auto ">
          <h1 className="text-center text-blue-600 font-bold text-xl md:text-2xl">Masuk</h1>
          <p className="md:text-sm font-light text-[9pt] text-gray-600 text-center">gunakan akun atau <a href="/auth/sign" className="text-blue-500 font-semibold">Daftar</a></p>
          <form onSubmit={FormHandler} className="w-full flex flex-col gap-3 mt-10">
            <input required type="text" ref={email} id="email" name="email" className="w-full border-1 border-gray-300 rounded text-sm md:text-[12pt] p-3 md:p-4" placeholder="Enter email addres" />
            <div className="flex input-search border-2 border-gray-300 focus-within:border-gray-600 rounded">
              <input required type={TypeInput} ref={password} id="password" name="password" className="w-full  text-sm py-3 px-3 md:text-[12pt] md:p-4" placeholder="Enter password" /><button type="button" className="px-4" onClick={changeTypePassword}>{(TypeInput == "text") ? <BsEyeFill /> : <BsEyeSlash />}</button></div>
            <a href="" className="text-[9pt] text-right text-blue-400 underline">Lupa password?</a>
            <p className={(messageBroker) ? "text-sm text-red-500" : "hidden"}>Gagal masuk dengan email dan sandi</p>
            <button type="submit" className={`cursor-pointer py-3 ${(DisableButton ? "bg-blue-300" : "bg-blue-600")} text-white font-bold rounded`}>{(DisableButton) ? "Please Wait" : "Masuk"}</button>
            <a href={endpoint_api + "/auth/google?redirect=" + endpoint_app + "/auth/google"} className="border-1 border-gray-300 py-[20px] flex text-sm"><img src={GoogleIcon} className="h-[20px] px-5" alt="" />Masuk Pakai Google</a>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login