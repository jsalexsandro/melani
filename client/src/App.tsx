import { useState } from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Index from "./pages"
import SplashScreen from "./pages/splashScreen"


const App = () => {
  const [loading,setLoading] = useState<boolean>(true)

  function ConfigRoutes(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Index/>
          } />
        </Routes>
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