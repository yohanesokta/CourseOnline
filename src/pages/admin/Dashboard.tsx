import { AdminNavigation } from "../../components/AdminNavigation"


const App = () =>{
  return (
    <div className="p-3">
      <h1 className="font-bold font-poppins ">Mentor</h1>
    </div>
  )
}


export const DashboardAdmin = () => {
  return (
    <>
      <AdminNavigation childern={<App/>}/>
    </>
  )
}
