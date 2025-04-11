import { useEffect, useRef, useState } from "react"
import { FaCirclePlus } from "react-icons/fa6"
import { Category } from "../../../utility/ineterfaceModule"
import { addCategoryClass, addClass, findMentorCategory } from "../../../api/mentor.controller"
import { AdminNavigation } from "../../../components/AdminNavigation"
import { mentor_config } from "../../../utility/NavigationConfig"

const AddProductComponents = () => {
    const [ShowOption,SetShowOption] = useState<boolean>(false)
    const [Option, SetOption] = useState<{id : number , text : string}>({id : 0 , text : ""})
    const [DisplayAddCategory,SetDisplayAddCategory] = useState<boolean>(false)
    const [DataCategory,SetDataCategory] = useState<Array <Category> | undefined>([])
    const [ErrorMessage,SetErrorMessage] = useState<string>("")

    const handleError = (message: string) => {
        SetErrorMessage(message);
        setTimeout(() => {
            SetErrorMessage("");
        }, 5000);
    }

    // Building Refence
    const inputRef = useRef<any>({})

    function getOfCategory() {
      findMentorCategory().then((data)=> {
        if (data) {
              SetDataCategory(data)
          }
      }).catch((error) => {
          handleError("Failed to fetch categories.");
      });
    }

    useEffect(()=> {
      getOfCategory()
    },[])


    function SubmitHandlingAddProduct(event : React.FormEvent) {
      event.preventDefault();
      
      const Time = 1
      const productName = inputRef.current.productName.value;
      const productDesc = inputRef.current.productDesc.value;
      const productCategory = Option.id;
      const productPrice = inputRef.current.productPrice.value;

      addClass({
        name: productName,
        description: productDesc,
        category_id: productCategory,
        requerement: "/n",
        price: parseFloat(productPrice),
        duration: Time
      }).then(event => {
        event.status ? window.location.href = "/mentor/dashboard/product/" : handleError(event.message); 
      }).catch(() => {
        handleError("An unexpected error occurred.");
      });

    }

    //  ADD Category Component
    const AddCategory = () => {
      const categoryName = useRef<any>()
      const categoryDesc = useRef<any>()
      const [ThisMessage,SetMessage] = useState<string>("")

      function displayMessage(message : string){
        SetMessage(message)
        setTimeout(()=>{
          SetMessage("")
        },5000)
      }

      const SubmitHandle = (events:React.FormEvent<HTMLFormElement>) => {
        const name = categoryName.current.value
        const desc = categoryDesc.current.value

        if (name && desc) {
          events.preventDefault()
          addCategoryClass(name,desc).then(e => {
            if (e.status){
              getOfCategory()
              SetDisplayAddCategory(false)
            } else {
              displayMessage(e.message)
            }
          })
        }
      }
      return (<>
          <div className="w-full fixed h-full top-0 left-0 bg-[rgba(0,0,0,0.5)] flex">
            <div onClick={()=>{SetDisplayAddCategory(false)}} className=" z-0 absolute w-full h-full top-0 left-0"></div>
            <div className="z-10 w-[400px] bg-white m-auto rounded-2xl">
              <form onSubmit={SubmitHandle} className="p-5 flex flex-col gap-3">
                <h1 className="font-bold text-2xl text-center pt-2">Add Category</h1>
                <input required ref={categoryName} type="text" placeholder="name category" name="name" id="name" className="w-full p-2 rounded-md border-1 border-gray-500" />
                <textarea required ref={categoryDesc} placeholder="desc category" name="desc" id="desc" className="w-full p-2 rounded-md border-1 border-gray-500" />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">Tambah</button>
                {(ThisMessage) ?
                <p className="text-sm text-red-600">{ThisMessage}</p>
                :""}
              </form>
            </div>
          </div>
      </>)
    }

    return (
      <div className="w-full h-full overflow-scroll bg-gray-200 flex z-0 fixed top-14 mx-4 py-5">
        <form onSubmit={SubmitHandlingAddProduct} action="" className="p-5 bg-white flex flex-col gap-4 rounded-xl h-max w-max-xl w-xl">
          <h1 className="font-bold">Tambah Kelas</h1>
          <p className="text-red-300">*Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor ducimus est aliquam quas in eos, natus atque quasi aperiam quidem.</p>
          <input required ref={(element)=>{inputRef.current.productName = element}} type="text" id="product-name" placeholder="nama kelas" name="product-name" className="focus:outline-0 border-2 w-full focus:border-gray-600 border-gray-300 p-3 rounded" />
          <textarea required ref={(element)=>{inputRef.current.productDesc = element}} rows={5} id="product-desc" name="product-desc" placeholder="Description" className="focus:outline-0 border-2 w-full focus:border-gray-600 border-gray-300 resize-none p-2 rounded" />

          <div className="w-full h-auto">
            <div onClick={()=>{SetShowOption(!ShowOption)}} className="w-full h-13 border-2 items-center rounded border-gray-300 flex">
              <input required type="text"  id="product-category" category-id='0' name="product-category" placeholder="Kategori" className="px-4 pointer-events-none" value={Option.text}/>
            </div>
            {(ShowOption) ? 
            <div className="w-full border-2 border-gray-300">
            
                {DataCategory?.map((element , index)=> {
                    return <button key={String(index)} onClick={()=> {
                      SetShowOption(false); SetOption({id : parseInt(element.id) , text: element.name})
                    }} type="button" className="text-gray-500 flex items-center gap-2 p-4 w-full hover:bg-gray-200">{element.name}</button>
                })}

              <button onClick={()=>{SetDisplayAddCategory(!DisplayAddCategory)}} type="button" className="text-gray-500 flex items-center gap-2 p-4 w-full hover:bg-gray-200"><FaCirclePlus /> Tambah</button>
            </div> : ""
          }
          </div>
          <div className="flex p-3 border-gray-300 border-2 rounded text-gray-800">
            <span className="text-gray-800 font-semibold px-2">Rp</span>
            <input required ref={(element)=>{inputRef.current.productPrice = element}} type="number" name="" id="" placeholder="00 (Harga)" className="flex-1 focus:outline-0" />
          </div>
          <div className="flex items-center p-2 gap-2">
            <p className="flex-1"> Waktu Yang Dibutuhkan :</p>
            <input type="number" placeholder="Hari" className="w-17 p-2 border-1 border-gray-500 rounded" />
            <input type="number" placeholder="Jam" className="w-15 p-2 border-1 border-gray-500 rounded" />
            <input type="number" placeholder="Menit" className="w-19 p-2 border-1 border-gray-500 rounded" />
            <input type="number" placeholder="Detik" className="w-15 p-2 border-1 border-gray-500 rounded" />
          </div>
          <p className="text-red-500">{ErrorMessage}</p>
          <button type="submit" className="w-full p-2 bg-blue-400 font-semibold text-white rounded">Save</button>
          <button onClick={()=>{window.location.href = "/mentor/dashboard/product/"}} type="button" className="w-full p-2 bg-red-500 font-semibold text-white rounded">Cancel</button>
        </form>
          {(DisplayAddCategory) ? <AddCategory/> : "" }
      </div>

    )
  }

export function AddProduct(){
  return (
    <AdminNavigation childern={<AddProductComponents />} config={mentor_config} position="Product"/>
  )
}