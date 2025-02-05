import { Navigation } from "../components/Navigation"
import frame_1 from "../assets/frame_1.svg"
import frame_2 from "../assets/FrontGroup.svg"
import { FaCheckCircle, FaPlus } from "react-icons/fa"
import { Card } from "../components/Card"
import { Helmet } from "../utility/Helmet"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"
import { useRef } from "react"

const Home = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -260,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: +260,
        behavior: "smooth",
      });
    }
  };

  Helmet({
    title: "SerbaIlmu Indonesia",
    description: "Buat hidupmu jadi lebih berkarya"
  })

  return (<>
    <div className="w-screen">
      <Navigation />
      <div className="w-full">
        <div className="w-full h-[600px] absolute z-[-1]">
          <img className="w-full h-full object-cover" src={frame_1} alt="boxies frame" />
        </div>

        <div className="px-2 py-10 w-full flex flex-col justify-center items-center md:block md:px-20 md:py-10">
          <button className="py-2 bg-white px-5 text-sm border-1 relative rounded-4xl md:text-xs xl:text-xl">Bikin skill mu meluncur di dunia teknologi</button>
          <h3 className="py-10 text-3xl text-center font-semibold font-poppins md:text-left md:w-[600px] xl:text-5xl xl:w-[800px] xl:leading-14">Ruang Belajar Yang Menarik Seru dan inovatif, dengan ilmu terkini dan modern</h3>
        </div>
      </div>

      <div className="w-full md:flex md:w-screen ">
        <div className="h-full w-full md:w-[50%]  md:h-[600px] p-5 justify-center items-center flex">
          <img className="h-full" src={frame_2} alt="frame product" />
        </div>

        <div className="px-5 md:w-[40%] font-poppins h-full my-auto">
          <button className="py-2 px-5 text-sm border-1 relative rounded-4xl md:text-xs xl:text-xl">Mengapa harus belajar disini?</button>

          <h3 className="m-1 md:text-3xl text-xl font-semibold font-poppins px-1 py-3 ">
            Sistem belajar yang setara dengan apa yang kalian suka
          </h3>

          <p className="mx-2 mb-4 md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores eaque corporis recusandae maxime, maiores velit beatae tempora eveniet modi!.</p>

          <p className="m-1 text-sm font-semibold flex gap-2 md:text-[12pt]"><FaCheckCircle color="green" size={20} />100 + Online Course inside</p>
          <p className="m-1 text-sm font-semibold flex gap-2 md:text-[12pt]"><FaCheckCircle color="green" size={20} />Online or Offline Course</p>
        </div>
      </div>

      <div className="md:flex ">
        <div className="p-4 mt-10 md:w-full xl:w-max md:mx-auto">
          <div className="flex gap-2 py-5">
            <div className="w-4 h-4 text-sm rounded-full my-auto bg-gray-600 "></div>
            <span className="text-black xl:text-xl">Rekomendasi Kelas</span>
            <a href="#" className=" xl:text-xl xl:px-2 underline text-blue-400 text-sm flex-1 text-right">lainya</a>
          </div>
          <div className="w-full pb-4 overflow-x-auto flex">
            <div className="flex gap-5">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>


      {/* New Card */}

      <div className="md:flex ">
        <div className="p-4 mt-10 md:w-full xl:w-[1200px] md:mx-auto relative">

          <div onClick={scrollLeft} className="hidden absolute z-10 h-full xl:flex left-[-20px] ">
            <button className=" my-auto opacity-30 hover:opacity-70 cursor-pointer">
              <IoIosArrowDropleftCircle style={{ color: "#6EABF1" }} size={50} />
            </button>
          </div>
          <div className="hidden absolute z-10 h-full xl:flex right-[-20px] ">
            <button onClick={scrollRight} className="my-auto opacity-30 hover:opacity-70 cursor-pointer">
              <IoIosArrowDroprightCircle style={{ color: "#6EABF1" }} size={50} />
            </button>
          </div>


          <div className="">
            <h1 className="font-semibold font-poppins xl:text-xl">Belajar skill baru dengan banyak pilihan kelas</h1>
            <div className="overflow-x-auto pt-1">
              <div className="py-3 flex gap-3 w-max">
                <button className="text-sm py-1 px-3 rounded-3xl border-1 border-green-400 text-green-400">Desain Grafis</button>
                <button className="text-sm py-1 px-3 rounded-3xl border-1 ">Creative Product</button>
                <button className="text-sm py-1 px-3 rounded-3xl border-1 ">Technologi</button>
                <button className="text-sm py-1 px-3 rounded-3xl border-1 ">Programming</button>
              </div>
            </div>
          </div>

          <div className="flex gap-2 py-5">
            <div className="flex flex-col">
              <p className="text-black xl:text-xl xl:font-semibold font-poppins">Desainer Grafis</p>
              <p className="text-sm h-10 overflow-hidden text-gray-500 w-[70%] xl:text-[12pt] xl:w-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, architecto!</p>
            </div>
            <a href="#" className=" xl:text-xl xl:px-2 underline text-blue-400 text-sm flex-1 text-right">lainya</a>
          </div>

          <div ref={scrollRef} className="w-full pb-4 hidden-scrollbar overflow-x-auto flex ">
            <div className=" flex gap-5 scrollbar-none " >
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>


      <div className="flex justify-center items-center pb-5">
        <button className="font-poppins text-sm px-5 py-2 rounded-full bg-black text-white xl:text-[14pt]">Telusuri semua kelas</button>
      </div>


      {/* quest */}


      <div className="px-5 py-10 w-full xl:flex justify-around ">
        <div className="font-poppins md:w-[50%] xl:w-[600px]">
          <button className="p-2 text-sm border-1 rounded-full xl:text-[12pt]">FaQ</button>
          <h1 className="font-semibold text-xl py-2 xl:text-3xl">Pertanyaan yang sering ditanyakan.</h1>
          <div className="flex justify-between">
            <p className="text-sm w-[50%] xl:text-xl">kamu punya pertanyaan lain
              tentang kami?</p>
            <button className="px-5 scale-90 h-[40px] bg-black rounded-3xl text-white text-sm xl:text-[12pt] xl:scale-86 xl:px-5 xl:py-2 xl:h-12 xl:rounded-full ">Beritahu Kami!</button>
          </div>
        </div>

        <div className="py-10 flex flex-col xl:max-w-[600px] gap-5">
          <div className="">
            <h3 className="text-sm flex font-semibold font-poppins  relative xl:text-xl ">Bagaimana cara mendaftarkan akun di SerbaIlmu? < FaPlus className="absolute right-0 xl:right-[-30px]" /> </h3>
          </div>
          <div className="">
            <h3 className="xl:text-xl text-sm flex font-semibold font-poppins  relative">Bagaimana cara menjadi mentoring di sini ? < FaPlus className="absolute right-0 xl:right-[-30px]" /> </h3>
          </div>
          <div className="">
            <h3 className="xl:text-xl text-sm flex font-semibold font-poppins  relative">Apakah ada pengembalian uang jika tidak sesuai ? < FaPlus className="absolute right-0 xl:right-[-30px]" /> </h3>
          </div>
        </div>
      </div>

    </div>
  </>
  )
}

export default Home