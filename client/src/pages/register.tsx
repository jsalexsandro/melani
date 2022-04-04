import { Fragment,useState } from "react"
import Modal from "../components/modal/modal"
import MouseModal from "../components/mouse-modal/mouseModal"
import "../styles/register.scss"

const Register = () => {
  const [user,setUser] = useState("")
  const [pass,setPass] = useState("")
  
  const [update,setUpdate] = useState<number>(0)
  const [modalText,setModalText] = useState<string>("")

  const [mouse,setMouse] = useState<boolean>(false)

  function updateModal(text:string){
    if (update == 0){
      setModalText(text)
      setUpdate(1)
      setTimeout(() => {
        setUpdate(0)
      },3000)
    }
  }

  function eventRegister(){
    if (user != "" && pass != ""){
      if (user.search(" ") == -1){
        console.log("ISSO AI MEU TRUTA")
      } else {
        updateModal("O Campo de Usuario Não Pode ter espaços")
      }
    } else {
      updateModal("Preencha todos os Campos")
    }
  }

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
          <div className="register-user-div">
            <input onChange={(e) => setUser(e.target.value)} className="register-input register-user-input" />
            <div className="register-div-icon">
              <i onMouseOut={() => setMouse(true)}  onMouseEnter={() => setMouse(false)} className="fa-solid fa-circle-info register-info-icon"></i>
            </div>
          </div>
          <p className="register-text">Senha: </p>
          <input onChange={(e) => setPass(e.target.value)} className="register-input register-password-input" />
          <button onClick={eventRegister} className="register-register-button">
            Cria Conta
          </button>
        </div>
        <MouseModal className={`mouse-modal-1`} monitoring={!mouse}>
          <p>
            Lembre do Seu Nome de Usúario
            Pois será com ee que você ira fazer login
          </p>
        </MouseModal>
      </div>
      { update != 0 ? <Modal>{modalText}</Modal> : null }
    </Fragment>
  )
}
export default Register