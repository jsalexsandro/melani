import { Fragment, useEffect } from "react"
import "../styles/splash.scss"

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
    <Fragment>
      <div className="splash-container">
        <i className="fa-solid fa-gamepad"></i>
      </div>
      {/* <script src="https://kit-pro.fontawesome.com/releases/v6.0.0-beta1/js/pro.min.js" data-auto-a11y="true" data-auto-fetch-svg="" data-fetch-svg-from="https://kit-pro.fontawesome.com/releases/v6.0.0-beta1/svgs" defer={true} /> */}
    </Fragment>
  )
}

export default SplashScreen