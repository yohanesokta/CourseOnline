import { BrowserRouter, Routes , Route } from "react-router"
import Home from "./home"
import Login from "./auth/login"
import Sign from "./auth/sign"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/auth/login" element={<Login/>}/>
        <Route path="/auth/sign" element={<Sign/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App