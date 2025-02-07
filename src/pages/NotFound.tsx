import { Navigation } from "../components/Navigation"
import NotFoundSvg from "../assets/cry.jpg"
export const NotFound = () => {
  return (
    <>
        <Navigation/>
        <div className="w-full flex flex-col xl:flex-row xl:w-[700px]  xl:mx-auto xl:my-10">
            <img src={NotFoundSvg} alt="cry" className=" h-60 xl:h-70 mx-auto" />
            <div className="font-poppins px-5 py-10 flex flex-col gap-3 xl:my-auto">
                <h3 className="font-bold text-2xl text-center">Awww.. Don't Cry</h3>
                <h4 className="font-bold text-center text-gray-600">it's just <span className="text-black">404</span> error!</h4>
                <p className="text-center text-gray-600">Mungkin halaman sedang di perbaiki , dibuat , atau ya memang gak ada</p>
            </div>
            
        </div>
    </>
  )
}
