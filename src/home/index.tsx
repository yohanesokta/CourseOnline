import { Navigation } from "../components/Navigation"
import frame_1 from "../assets/frame_1.svg"
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
    </div>
  )
}

export default Home