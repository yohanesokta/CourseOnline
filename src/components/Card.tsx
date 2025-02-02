import { FaMoneyBillAlt, FaUser } from "react-icons/fa"
import course from "../assets/course.jpg"
import { IoTime } from "react-icons/io5"

export const Card = () => {
  return (
    <div className="w-[250px] relative h-[490px] xl:w-[280px] xl:h-[520px]  border-1 border-gray-300  rounded-2xl overflow-hidden">
        <div className="w-full h-[200px] relative">
            <img src={course} alt=""  className="w-full h-full object-cover"/>
            <div className="absolute bottom-2 right-2 px-3 py-2 rounded-full bg-[rgba(0,0,0,0.65)]">
                <span className="flex gap-2 text-white text-sm"> <FaUser className="my-auto" color="white" size={12}/> 120</span>
            </div>
        </div>
        <div className="px-3 font-poppins">
            <h1 className="font-semibold py-3 xl:text-xl" >Mahir Elektronik dalam
            seminggu</h1>
            <p className="font-normal text-sm xl:text-[12pt] h-[60px] xl:h-[80px] overflow-hidden" style={{textOverflow:"ellipsis"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eaque? aseasdada</p>
            <h3 className="py-2 text-sm xl:text-[12pt] flex gap-[5px] w-full max-h-[55px]overflow-hidden font-semibold"><span className="font-normal">By</span>Lorem ips </h3>
            <h4 className="flex font-normal text-sm xl:text-[11pt] gap-[5px]"><IoTime size={15} className="my-auto"/>waktu belajar : <span className="font-semibold">12 Jam</span></h4>
            <h5 className="py-2 text-green-600  text-[11pt] xl:text-[12pr] flex "><FaMoneyBillAlt color="green" size={20}/><span className="font-semibold ml-2">56</span>.000</h5>

            <div className="font-poppins flex gap-2 text-[10px] absolute bottom-2">
              <div className="px-2 py-1 border-1 rounded-full">technologi
              </div>
              <div className="px-2 py-1 border-1 rounded-full">small
              </div>
              <div className="px-2 py-1 border-1 rounded-full">beginer
              </div>
            </div>
        </div>
    </div>
  )
}
