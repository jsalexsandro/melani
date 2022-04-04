import { Fragment,useState } from "react"
import Modal from "../components/modal/modal"
import Database from "../model/Database"
import "../styles/login.scss"

import User from "../types/user"

const Login = () => {
  const [typeInput,setTypeInput] = useState<string>("password")
  const [icon,setIcon] = useState<string >("far fa-eye-slash")
  
  const [user,setUser] = useState<string>("")
  const [pass,setPass] = useState<string>("")
  const [update,setUpdate] = useState<number>(0)
  const [modalText,setModalText] = useState<string>("")

  function updateModal(text:string){
    if (update == 0){
      setModalText(text)
      setUpdate(1)
      setTimeout(() => {
        setUpdate(0)
      },3000)
    }
  }

  function eventLogin(){
    if (user != "" && pass != ""){
      new Database().read((object:{ error:string | boolean,values:User[] }) => {
        let values = object.values
        let searchedUser = false
        let searchedPass = false
        for (let u of values){
          if (u.name == user){
            searchedUser = true
            if (u.password == pass){
              searchedPass = true
            }
            break;
          } 
        }

        if (searchedUser == false){
          updateModal("Usuario Não encontrado")
        } else if (searchedUser == true && searchedPass == false){
          updateModal("Senha incoreta")
        } else if (searchedUser == true && searchedPass == true){
          updateModal("Usuario logado com sucesso")
        }
      })
    } else {
      updateModal("Preencha todos os Campos")
    }
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
    <>  
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <section className="local-register">
        <button onClick={() => location.assign("/register")} className="button-register">
          <p>Cria Conta</p>
        </button>
      </section>
      <div className="login-container">
        <section className="login-name">
          <h1>
            FAZER LOGIN
          </h1>
        </section>
        <section className="login-components">
          <input onChange={(e) => setUser(e.target.value)} type="text" placeholder="Usúario" className="login-input login-input-user" />
          <div className="login-input-component">
            <input onChange={(e) => setPass(e.target.value)} type={typeInput} autoComplete="current_password" placeholder="Senha" className="login-input login-input-password"/>
            <section onClick={setVisiblePasswordFunc} className="login-icon-div">
              <i className={icon}></i>
            </section>
          </div>
          <button onClick={eventLogin} className="login-button">
            FAZER LOGIN
          </button>
          <button onClick={() => location.assign("/register")} id="to-register" className="to-register-button">
            CRIAR UMA CONTA
          </button>
        </section>
        { update != 0 ? <Modal className="modal-1">{modalText}</Modal> : null }
      </div> 
      { update != 0 ? <Modal  className="modal-2">{modalText}</Modal> : null }
    </>
  )
}

export default Login