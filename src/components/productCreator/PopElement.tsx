import { useEffect, useRef, useState } from "react"
import { FaUpload } from "react-icons/fa"
import { get_mentor_media, supabase_upload_media_image } from "../../api/supabase.controller"
import imageCompression from "browser-image-compression"

interface execute  {
    execute : (refered : string, link : string) => void
}

export const LinkedPop = ({execute} : execute) => {
    const refered = useRef<any>()
    const link = useRef<any>()
  return (
    <div className="w-full h-screen fixed  bg-[rgba(0,0,0,.6)] flex justify-center items-center">
        <div onClick={()=> {execute("","")}} className="w-full h-full  fixed"></div>
        <div className="w-100 rounded-xl shadow-2xl bg-zinc-800 p-8 z-10">
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



export const ImagePop = ({execute , user_id } : {user_id : string, execute : (refered : string, link : string) => void}) => {
    const [DataImage , SetDataIamge] = useState<any>([])
    const [HandleError,SetHandleError] = useState<boolean>(false)
    const Input = useRef<any>()
    function submitLink(event : any) {
        event.preventDefault()
        execute("alt",Input.current.value)
    }
    useEffect(()=>{
        get_mentor_media().then((element)=> {
            SetDataIamge(element.data)
        })
    },[])
    
    function enableError() {
        SetHandleError(true);
        setTimeout(()=>{
            SetHandleError(false)
        },3000)
    }
    async function ImageUploader(event : any) {
        try {

            const ImageTarget = event.target.files[0]
            let data = [...DataImage,"loading.true"]
            SetDataIamge(data)
    
    
            const option = { maxSizeKB: 500, useWebWorker: true };
            const image = await imageCompression(ImageTarget,option)
            const element = await  supabase_upload_media_image(image,user_id)
            SetDataIamge(element.data)
        } catch ( error) {
            let data = [...DataImage]
            data.pop()
            SetDataIamge(data)
            enableError()
        }
    }
    return (<>
        <div className="w-full h-full justify-center items-center fixed z-10 flex  bg-[rgba(0,0,0,.6)] ">
        <div className="w-full h-full fixed " onClick={()=>{execute("","")}}></div>

        <div className={`w-80  p-3 rounded-xl bg-red-800 absolute z-40 right-3 top-3 error-handle opacity-0 ${(HandleError) ? "opacity-100" : ""}`}>
            <p className="text-white text-left text-xl font-bold font-poppins">Fail</p>
            <span className="text-white my-4">fail of excution image</span>
        </div>
            <div className="text-white flex flex-col z-30 p-4 w-228 h-120 bg-zinc-800 rounded-xl shadow-2xl shadow-amber-100">
                <form onSubmit={submitLink} className="flex mb-5">
                    <input ref={Input} className="py-2 px-4 flex-1 focus:outline-0 border-2 border-gray-400 rounded" name="link" id="link" type="text" placeholder="link external"/>
                    <button className="px-5 rounded ml-4 bg-gray-600" type="submit">use</button>
                </form>
                <div className="flex-1 border-2 p-3 rounded border-gray-400 overflow-y-auto flex flex-wrap gap-2">
                    <label htmlFor="imagefile" className="flex cursor-pointer hover:bg-gray-700 flex-col w-40 h-40 border-2 text-gray-200 rounded-xl border-gray-400">
                        <FaUpload className="mx-auto mt-10" size={30}/>
                        <span className="w-full text-center p-5 font-semibold">Upload</span>
                    </label>
                    <input onInput={ImageUploader} type="file" accept=".svg,.jpg,.jpeg,.png,.webp" id="imagefile"  name="imagefile" className="hidden" />
                    {(DataImage.reverse().map((element: any,index:any)=> {
                        return (element == "loading.true") ? 
                        <button key={String(index)} className="flex cursor-pointer skeleton  w-40 h-40  opacity-50 rounded-xl border-gray-400">
                        </button> :
                        <button key={String(index)} onClick={() => {execute("image",element.media_url)}} className="flex opacity-70 hover:opacity-100 skeleton cursor-pointer overflow-hidden flex-col w-40 h-40 border-2 text-gray-200 rounded-xl border-gray-400">
                            <img src={element.media_url} alt="" className="w-full h-full object-cover " />
                        </button>
                    }))}
                </div>
            </div>
        </div>
    </>)
}