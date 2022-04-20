import { useEffect, useState } from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"

import Index from "./pages"
import Login from "./pages/login"
import Register from "./pages/register"
import SplashScreen from "./pages/splashScreen"
import "./styles/global.scss"

const App = () => {
  const [loading,setLoading] = useState<boolean>(false)
  useEffect(() => setLoading(true),[])

  const id   = localStorage.getItem("id")
  const user = localStorage.getItem("user")
  let login  = "";

  if (id != undefined && user != undefined){
    login = "exist"
  }


  function ListenSplashScreen(props:any){
    if (loading == true){
      return <SplashScreen load={setLoading} />
    }
    return props.component
  }

  function RouteLoged(){
    if (login === "exist"){
      return (
        <Routes>
          <Route path="*" element={<ListenSplashScreen component={<Index/>} />} />
          <Route path="/app" element={<Index/>} />
        </Routes>
      )
    } else {
      return (
        <Routes>
          <Route path="*" element={ <ListenSplashScreen component={<Login />} /> } />
          <Route path="/register" element={<Register />} />
        </Routes>
      )
    }
  }

  return (
    <BrowserRouter>
        <RouteLoged />
    </BrowserRouter>
  ) 
}

export default App