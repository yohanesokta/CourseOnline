import { useState } from "react"
import { AdminNavigation } from "../../../components/AdminNavigation"
import { mentor_config } from "../../../utility/NavigationConfig"
import { FaCirclePlus } from "react-icons/fa6"
import { AddProduct } from "./AddProduct"

const ProductDashboard = () => {

  const [OnAdd, SetOnAdd] = useState<boolean>(false)
  


  return (<>
    <div className="font-poppins w-full p-5 h-full">
      <h1 className="text-2xl font-bold">Product</h1>
      <p className="text-gray-700 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam voluptatem hic inventore a dolorum nostrum omnis quasi id ipsa modi!</p>
      <div className="w-full h-full my-5 p-5 flex flex-wrap gap-4 bg-gray-100 rounded-2xl">

        <div onClick={() => { SetOnAdd(!OnAdd) }} className="flex w-80 h-100 rounded-xl shadow-2xl border-2 hover:text-gray-300 text-gray-600 cursor-pointer border-gray-200 bg-white">
          <div className="m-auto flex  gap-5 flex-col justify-center">
            <FaCirclePlus className="mx-auto font-bold" size={40} />
            <span className="font-semibold">Add Product</span>
          </div>
        </div>

        <div className="flex w-80 h-100 rounded-xl shadow-2xl border-2 hover:text-gray-300 text-gray-600 cursor-pointer border-gray-200 bg-white">
          <div className="m-auto flex  gap-5 flex-col justify-center">
            <FaCirclePlus className="mx-auto font-bold" size={40} />
            <span className="font-semibold">Add Product</span>
          </div>
        </div>
      </div>
    </div>
    {(OnAdd) ?
      <AddProduct OnAdd={SetOnAdd}/>: ""
    }
  </>)
}

export const Product = () => {
  return (
    <AdminNavigation childern={<ProductDashboard />} position="Product" config={mentor_config} />
  )
}
