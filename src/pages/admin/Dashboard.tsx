import { AdminNavigation } from "../../components/AdminNavigation"
import { admin_config } from "../../utility/NavigationConfig"

const App = () => {
    return <>
        <h1 className="font-bold p-2 text-xl">Dashboard Belum Siap !</h1>
    </>
}


export const Dashboard = () => {
  return (
    <AdminNavigation childern={<App/>} position="Dashboard" config={admin_config}/>
  )
}
