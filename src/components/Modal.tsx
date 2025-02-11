import { useState } from "react"

interface modal {
    active: boolean
    state : React.Dispatch<React.SetStateAction<boolean>>
    action: any
}
export const Modal = (request: modal) => {
    const [Disable,SetDisable] = useState(false)
    async function onAccept() {
        SetDisable(true)
        await request.action();
        request.state(false)
        SetDisable(false)
    }

    return (<>
        {(request.active) ?
            <div className="xl:absolute top-0 left-0 xl:bg-[rgba(255,255,255,.9)] xl:w-full h-full flex ">
                <div className="flex w-max flex-col m-auto">
                    <h1 className="font-semibold font-poppins py-4 text-xl">Apakah anda yakin?</h1>
                    <div className="text-white flex gap-2 h-max mx-auto">
                        {(Disable) ?
                        <>
                        <button className="cursor-pointer w-20 py-2 rounded bg-red-300">Wait</button>
                        <button className=" cursor-pointer w-20 py-2 rounded bg-gray-300">No</button>
                        </> 
                        :
                        <>
                        <button onClick={onAccept} className="cursor-pointer w-20 py-2 rounded bg-red-500">Yes</button>
                        <button onClick={()=> {request.state(false)}} className=" cursor-pointer w-20 py-2 rounded bg-gray-500">No</button>
                        </>                         
                        
                        }
                    </div>
                </div>
            </div>

            : ""
        }
    </>

    )
}
