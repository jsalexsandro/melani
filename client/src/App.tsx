import { Fragment, useEffect, useState } from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Index from "./pages"
import Login from "./pages/login"
import SplashScreen from "./pages/splashScreen"


const App = () => {
  const [loading,setLoading] = useState<boolean>(false)
  useEffect(() => setLoading(true),[])
  const login = localStorage.getItem("loginExist")

  function RouteLoged(){
    if (login === "exist"){
      return (
        <Routes>
          <Route path="/" element={ <Index/>} />
        </Routes>
      )
    } else {
      return (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      )
    }
  }

  function ConfigRoutes(){
    return (
      <BrowserRouter>
          <RouteLoged />
      </BrowserRouter>
    )
  }

  function Render(){
    if (loading == true){
      return <SplashScreen load={setLoading} />
    }
    return <ConfigRoutes />
  }

  return (
    <Render />
  ) 
}

export default App