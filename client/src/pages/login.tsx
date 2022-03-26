import { Fragment,useState } from "react"
import "../styles/login.scss"

function Register(){
  return <></>
}

function Login(){
  const [typeInput,setTypeInput] = useState("password")
  const [icon,setIcon] = useState("fas fa-eye-slash")

  function setVisiblePasswordFunc(){
    if (typeInput == "password"){
      setIcon("fas fa-eye")
      setTypeInput("text")
    } else {
      setIcon("fas fa-eye-slash")
      setTypeInput("password")
    }
  }

  // PROFONT AWESOME v5.10 USADA
  // NÃO PODE SER OUTRA VERSÂO 
  // ACHA UMA SOLUÇÃO MELHOR
  return (
    <Fragment>  
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
      <div className="login-container">
        <section className="login-name">
          <h1>
            Faça Login
          </h1>
        </section>
        <section className="login-components">
          <input type="email" placeholder="Email" className="login-input" />
          <div className="login-input-component">
            <input type={typeInput} placeholder="Senha" className="login-input login-input-password"/>
            <section onClick={setVisiblePasswordFunc} className="login-icon-div">
              <i className={icon}></i>
            </section>
          </div>
          <button className="login-button">
            Login
          </button>
        </section>
      </div>
    </Fragment>
  )
}

const LoginRegister = () => {
  const [type,setType] = useState<number>(0)

  function Render(){
    if (type == 0){
      return <Login />
    } else { 
      return <Register />
    }
  }

  return <Render />
}

export default LoginRegister