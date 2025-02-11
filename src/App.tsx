import { BrowserRouter, Routes , Route } from "react-router"
import Home from "./pages/home"
import Login from "./auth/login"
import Sign from "./auth/sign"
import { GoogleCallback } from "./api/GoogleCallback"
import { Logout } from "./auth/logout"
import { MentorControl } from "./pages/admin/MentorControl"
import { NotFound } from "./pages/NotFound"
import { Dashboard } from "./pages/admin/Dashboard"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/auth/login" element={<Login/>}/>
        <Route path="/auth/sign" element={<Sign/>}/>
        <Route path="/auth/google" element={<GoogleCallback/>}/>
        <Route path="/auth/logout" element={<Logout/>}/>
        <Route  path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/dashboard/mentor" element={<MentorControl/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App