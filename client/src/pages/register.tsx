import { Fragment } from "react"
import "../styles/register.scss"

const Register = () => {
  return (
    <Fragment>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <div className="register-container">
        <div className="register-name">
          <h1>Cria Conta</h1>
          <i onClick={() => location.assign("/")} className="fa-solid fa-xmark icon-close"></i>
        </div>
        <div className="register-components">
          <p className="register-text">Usuario: </p>
          <input className="register-input register-user-input" />
          <p className="register-text">Senha: </p>
          <input className="register-input register-password-input" />
          <button className="register-register-button">
            Cria Conta
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Register