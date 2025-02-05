import { BrowserRouter, Routes , Route } from "react-router"
import Home from "./home"
import Login from "./auth/login"
import Sign from "./auth/sign"
import { GoogleCallback } from "./api/GoogleCallback"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/auth/login" element={<Login/>}/>
        <Route path="/auth/sign" element={<Sign/>}/>
        <Route path="/auth/google" element={<GoogleCallback/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App