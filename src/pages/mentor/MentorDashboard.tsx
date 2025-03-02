import { AdminNavigation } from "../../components/AdminNavigation"
import { mentor_config } from "../../utility/NavigationConfig"

export const MentorDashboard = () => {
  return (
    <AdminNavigation childern={<></>} position="Dashboard" config={mentor_config}/>
  )
}
