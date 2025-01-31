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

        <div className="px-20 py-20">
          <button className="border-1 px-5 py-2 relative rounded-4xl">Bikin skill mu meluncur di dunia teknologi</button>
          <h3 className="py-10 text-5xl w-[50%] font-semibold font-poppins " style={{lineHeight : "50px", wordSpacing : "8px"}}>Ruang Belajar Yang Menarik Seru dan inovatif, dengan ilmu terkini dan modern</h3>
        </div>
      </div>
    </div>
  )
}

export default Home