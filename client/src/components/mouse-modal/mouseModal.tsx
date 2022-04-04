import { Fragment } from "react"
import "./mouse-modal.scss"

type MouseModalTypes = {
  monitoring:boolean,
}

const MouseModal = (props:MouseModalTypes | any) => {
  const { monitoring:see } = props

  if (see == true){
    return (
      <Fragment>
        <div onMouseOut={props.onMouseOut} onMouseEnter={props.onMouseEnter} className={`mouse-modal ${props.className}`}>
          <i className="mouse-modal-icon">
          </i>
        	{props.children}
        </div>  
      </Fragment>
    )
  }
  return null
}

export default MouseModal