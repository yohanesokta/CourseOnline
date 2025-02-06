import { BrowserRouter, Routes , Route } from "react-router"
import Home from "./pages/home"
import Login from "./auth/login"
import Sign from "./auth/sign"
import { GoogleCallback } from "./api/GoogleCallback"
import { Logout } from "./auth/logout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/auth/login" element={<Login/>}/>
        <Route path="/auth/sign" element={<Sign/>}/>
        <Route path="/auth/google" element={<GoogleCallback/>}/>
        <Route path="/auth/logout" element={<Logout/>}/>
        <Route path="*" element={<><p>NOT FOUND</p></>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App