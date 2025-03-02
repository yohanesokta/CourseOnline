import { useEffect, useState } from "react"
import { FaCirclePlus } from "react-icons/fa6"
import { Category } from "../../../utility/ineterfaceModule"
import { findMentorCategory } from "../../../api/mentor.controller"


export const AddProduct = ({OnAdd} : {OnAdd : (params : boolean) => void}) => {
    const [ShowOption,SetShowOption] = useState<boolean>(false)
    const [Option, SetOption] = useState<string>("")
    const [DataCategory,SetDataCategory] = useState<Array <Category> | undefined>([])
    useEffect(()=> {
        findMentorCategory().then((data)=> {
            if (data) {
                SetDataCategory(data)
            }
        })
    },[])
    return (
      <div className="w-full h-full bg-gray-200 flex z-0 fixed top-14 mx-4 py-5">
        <form action="" className="p-5 bg-white flex flex-col gap-4 rounded-xl h-max w-max-xl w-xl">
          <h1 className="font-bold">Tambah Kelas</h1>
          <p className="text-red-300">*Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor ducimus est aliquam quas in eos, natus atque quasi aperiam quidem.</p>
          <input type="text" id="product-name" placeholder="nama kelas" name="product-name" className="focus:outline-0 border-2 w-full focus:border-gray-600 border-gray-300 p-3 rounded" />
          <textarea rows={5} id="product-desc" name="product-desc" placeholder="Description" className="focus:outline-0 border-2 w-full focus:border-gray-600 border-gray-300 resize-none p-2 rounded" />

          <div className="w-full h-auto">
            <div onClick={()=>{SetShowOption(!ShowOption)}} className="w-full h-13 border-2 items-center rounded border-gray-300 flex">
              <input type="text"  id="product-category" category-id='0' name="product-category" placeholder="Kategori" className="px-4 pointer-events-none" value={Option}/>
            </div>
            {(ShowOption) ? 
            <div className="w-full border-2 border-gray-300">
            
                {DataCategory?.map((element , index)=> {
                    return <button key={String(index)} onClick={()=> {
                      SetShowOption(false); SetOption(element.name)
                    }} type="button" className="text-gray-500 flex items-center gap-2 p-4 w-full hover:bg-gray-200">{element.name}</button>
                })}

              <button  type="button" className="text-gray-500 flex items-center gap-2 p-4 w-full hover:bg-gray-200"><FaCirclePlus /> Tambah</button>
            </div> : ""
          }
          </div>
          <div className="flex p-3 border-gray-300 border-2 rounded text-gray-800">
            <span className="text-gray-800 font-semibold px-2">Rp</span>
            <input type="number" name="" id="" placeholder="00 (Harga)" className="flex-1 focus:outline-0" />
          </div>
          <div className="flex items-center p-2 gap-2">
            <p className="flex-1"> Waktu Yang Dibutuhkan :</p>
            <input type="number" placeholder="Hari" className="w-17 p-2 border-1 border-gray-500 rounded" />
            <input type="number" placeholder="Jam" className="w-15 p-2 border-1 border-gray-500 rounded" />
            <input type="number" placeholder="Menit" className="w-19 p-2 border-1 border-gray-500 rounded" />
            <input type="number" placeholder="Detik" className="w-15 p-2 border-1 border-gray-500 rounded" />
          </div>

          <button type="submit" className="w-full p-2 bg-blue-400 font-semibold text-white rounded">Save</button>
          <button type="button" onClick={() => { OnAdd(false) }} className="w-full p-2 bg-red-500 font-semibold text-white rounded">Cancel</button>


        </form>
      </div>

    )
  }