import axios from "axios"
import server from "../configuration/Constants.json"
export const GET = (url) => {
   return axios.get(`${server.SERVER_ADDRESS}${url}`)
}

export const POST = (url , requestBody) =>{
   return axios.post(`${server.SERVER_ADDRESS}${url}` , requestBody ,{
      headers:{'Content-Type':'application/json'}
   })
}