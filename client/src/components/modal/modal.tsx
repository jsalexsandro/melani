import React,{ useState,useEffect,Fragment } from "react"
import "./modal.scss"

const Modal =(props:any) => {
  const { children } = props
  return (
    <Fragment>
      <section className={`modal ${props.className}`}>
        { children }
      </section>
    </Fragment>
  )
}

export default Modal