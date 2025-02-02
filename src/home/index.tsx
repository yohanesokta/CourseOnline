import { Navigation } from "../components/Navigation"
import frame_1 from "../assets/frame_1.svg"
import frame_2 from "../assets/FrontGroup.svg"
import { FaCheckCircle } from "react-icons/fa"
import { Card } from "../components/Card"
const Home = () => {
  return (
    <div>
      <Navigation />

      <div className="">
        <div className="w-full h-[600px] absolute z-[-1]">
          <img className="w-full h-full object-cover" src={frame_1} alt="boxies frame" />
        </div>

        <div className="px-2 py-10 w-full flex flex-col justify-center items-center md:block md:px-20 md:py-10">
          <button className="py-2 px-5 text-sm border-1 relative rounded-4xl md:text-xs xl:text-xl">Bikin skill mu meluncur di dunia teknologi</button>
          <h3 className="py-10 text-3xl text-center font-semibold font-poppins md:text-left md:w-[600px] xl:text-5xl xl:w-[800px] xl:leading-14">Ruang Belajar Yang Menarik Seru dan inovatif, dengan ilmu terkini dan modern</h3>
        </div>
      </div>

      <div className="w-full md:flex">
        <div className="h-full w-full md:w-[50%] md:h-[600px] p-5 justify-center items-center flex">
          <img className="h-full" src={frame_2} alt="frame product" />
        </div>

        <div className="px-5 xl:w-[40%] font-poppins h-full my-auto">
          <button className="py-2 px-5 text-sm border-1 relative rounded-4xl md:text-xs xl:text-xl">Mengapa harus belajar di kurson</button>
    
          <h3 className="m-1 md:text-3xl text-xl font-semibold font-poppins px-1 py-3 ">
          Sistem belajar yang setara dengan apa yang kalian suka
          </h3>
        
          <p className="mx-2 mb-4 md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores eaque corporis recusandae maxime, maiores velit beatae tempora eveniet modi!.</p>

          <p className="m-1 text-sm font-semibold flex gap-2 md:text-[12pt]"><FaCheckCircle color="green" size={20}/>100 + Online Course inside</p>
          <p className="m-1 text-sm font-semibold flex gap-2 md:text-[12pt]"><FaCheckCircle color="green" size={20}/>Online or Offline Course</p>
        </div>
      </div>

    <div className="md:flex">
      <div className="p-4 mt-10 md:w-max md:mx-auto">
        <div className="flex gap-2 py-5">
          <div className="w-4 h-4 text-sm rounded-full my-auto bg-gray-600 "></div>
          <span className="text-black xl:text-xl">Rekomendasi Kelas</span>
          <a href="#" className=" xl:text-xl xl:px-2 underline text-blue-400 text-sm flex-1 text-right">lainya</a>
        </div>
      <div className="w-full overflow-x-auto flex">
         <div className="flex gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home