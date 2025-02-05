import { Navigation } from "../../components/Navigation"
import GoogleIcon from "../../assets/google-icon.svg"
import { useState } from "react"
import { BsEyeFill, BsEyeSlash } from "react-icons/bs"

const Sign = () => {
  const [TypeInput, SetTypeInput] = useState("password")
  const changeTypePassword = () => {
    (TypeInput == "password") ? SetTypeInput("text") : SetTypeInput("password")
  }
  const [Retype,SetRetype] = useState("password");
  const changeRetype = () =>{
    (Retype == "password") ? SetRetype("text") : SetRetype("password")
  }
  const FormHandler = (e: any) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <>
      <Navigation />

      <div className="w-full md:flex md:mt-15">
        <div className="w-full p-5 font-poppins md:w-[770px] md:mx-auto ">
          <h1 className="text-center text-blue-600 font-bold text-xl md:text-2xl">Daftar</h1>
          <p className="md:text-sm font-light text-[9pt] text-gray-600 text-center">daftarkan akun atau <a href="/auth/login" className="text-blue-500 font-semibold">Login</a></p>
          <form onSubmit={FormHandler} className="w-full flex flex-col gap-3 mt-10">
            <input type="text" className="w-full border-1 border-gray-300 rounded text-sm md:text-[12pt] p-3 md:p-4" placeholder="Enter username" />
            <input type="text" className="w-full border-1 border-gray-300 rounded text-sm md:text-[12pt] p-3 md:p-4" placeholder="Enter email addres" />

            <div className="flex input-search border-2 border-gray-300 focus-within:border-gray-600 rounded">
              <input type={TypeInput} className="w-full  text-sm py-3 px-3 md:text-[12pt] md:p-4" placeholder="Enter password" /><button className="px-4" onClick={changeTypePassword}>{(TypeInput == "text") ? <BsEyeFill /> : <BsEyeSlash />}</button>
            </div>
            <div className="flex input-search border-2 border-gray-300 focus-within:border-gray-600 rounded">
              <input type={Retype} className="w-full  text-sm py-3 px-3 md:text-[12pt] md:p-4" placeholder="Enter again password" /><button className="px-4" onClick={changeRetype}>{(Retype == "text") ? <BsEyeFill /> : <BsEyeSlash />}</button>
            </div>
            <a href="" className="text-[9pt] text-right text-blue-400 underline">Lupa password?</a>

            <button type="submit" className="py-3 bg-blue-600 text-white font-bold rounded">Daftar</button>
            <button className="border-1 border-gray-300 py-[20px] flex text-sm"><img src={GoogleIcon} className="h-[20px] px-5" alt="" />Masuk Pakai Google</button>

          </form>
        </div>
      </div>
    </>
  )
}

export default Sign