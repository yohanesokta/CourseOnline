import { useRef } from "react"

export const LinkedPop = ({execute} : {execute : any}) => {
    const refered = useRef<any>()
    const link = useRef<any>()
  return (
    <div className="w-full h-screen fixed bg bg-[rgba(0,0,0,.6)] flex justify-center items-center">
        <div className="w-100 rounded-xl shadow-2xl bg-zinc-800 p-8">
            <div className="flex flex-col">
                <label htmlFor="refered" className="text-white mb-2">Referensi Name</label>
                <input type="text" ref={refered} name="refered" placeholder="alternative text" id="refered" className="w-full h-10 rounded border-gray-400 border-1 px-5 text-white focus:outline-0 focus:border-2"  />
            </div>
            <div className="flex flex-col">
                <label htmlFor="link" className="text-white mb-2 mt-4">Link</label>
                <input type="text" ref={link} name="link" placeholder="link" id="link" className="w-full h-10 rounded border-gray-400 border-1 px-5 text-blue-300 focus:outline-0 focus:border-2"  />
            </div>
            <button onClick={()=>{execute(refered.current.value,link.current.value)}} className="p-2 w-full bg-green-800 px-6 rounded font-poppins cursor-pointer my-5 text-white">Apply</button>
        </div>
    </div>
  )
}
