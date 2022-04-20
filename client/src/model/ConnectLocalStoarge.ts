export function setLocalStorage(user:string,id:string){
  localStorage.setItem("user",user)
  localStorage.setItem("id",id)
  location.assign("/app")
}