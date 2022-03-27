import { Fragment,useState } from "react"
import "../styles/login.scss"

function Login(){
  const [type,setType] = useState<boolean>(!false)
  const [typeInput,setTypeInput] = useState<string>("password")
  const [icon,setIcon] = useState<string >("far fa-eye-slash")

  function getNameType(otype=type){
    return otype == false ? "Fazer Login" : "Fazer Cadastro"
  }

  function setVisiblePasswordFunc(){
    if (typeInput == "password"){
      setIcon("far fa-eye")
      setTypeInput("text")
    } else {
      setIcon("far fa-eye-slash")
      setTypeInput("password")
    }
  }

  // FONT AWESOME v6.0 USADA VIA CDN
  return (
    <Fragment>  
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <section className="local-register">
      </section>
      <div className="login-container">
        <section className="login-name">
          <h1>
            {getNameType()}
          </h1>
        </section>
        <section className="login-components">
          <input type="text" placeholder="Usúario" className="login-input login-input-user" />
          <div className="login-input-component">
            <input type={typeInput} autoComplete="current_password" placeholder="Senha" className="login-input login-input-password"/>
            <section onClick={setVisiblePasswordFunc} className="login-icon-div">
              <i className={icon}></i>
            </section>
          </div>
          <button className="login-button">
            {getNameType()}
          </button>
          <button onClick={() => setType(!type)} id="to-register" className="to-register-button">
            {getNameType(!type)}
          </button>
        </section>
      </div>  
    </Fragment>
  )
}

export default Login