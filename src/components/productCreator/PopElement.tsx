import { FaImage } from "react-icons/fa"
import { ImYoutube } from "react-icons/im"
import { MdOutlineTextFields } from "react-icons/md"

export const PopElement = () => {
  return (<>
    <div className="w-full h-screen fixed top-0 left-0 flex bg-[rgba(255,255,255,0.3)]">
        <div className="p-4 bg-gray-400 flex shadow-xl m-auto rounded-xl gap-3">
            <button className="cursor-pointer w-30 rounded-xl h-30 border-2 text-white border-white hover:border-5 flex justify-center items-center">
                <MdOutlineTextFields size={48}/>
            </button>
            <button className="cursor-pointer w-30 rounded-xl h-30 border-2 text-white border-white hover:border-5 flex justify-center items-center">
                <FaImage size={48}/>
            </button>
            <button className="cursor-pointer w-30 rounded-xl h-30 border-2 text-white border-white hover:border-5 flex justify-center items-center">
                <ImYoutube size={48}/>
            </button>
        </div>
    </div>
  </>
  )
}
