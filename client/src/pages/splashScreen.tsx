import { useEffect } from "react"

type ISplashScreen = {
  load:any
}

const SplashScreen = (props:ISplashScreen) => {
  useEffect(() => {
    setTimeout(() => {
      props.load(false)
    },3000)
  },[])

  return (
    <div>
      <h1>
        Olá, Mundo!
      </h1>
    </div>
  )
}

export default SplashScreen