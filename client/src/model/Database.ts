import axios from "axios"

class Database {
  public url:any;
  public constructor(){
    this.url =  import.meta.env.VITE_URL
  }

  public read(calback:any){
    let uri = `${this.url}/list/${import.meta.env.VITE_PASSWORD}/`
    axios.get(uri)
    .then((a) => {
      calback(a.data)
    })
  }

  public write(user:String,password:String,calback:any){
    let uri = `${this.url}/write/${import.meta.env.VITE_PASSWORD}/value/{"name":"${user}","password":"${password}"}`
    axios.get(uri)
    .then((a) => {
      calback(a.data)
    })

  }

}

export default Database