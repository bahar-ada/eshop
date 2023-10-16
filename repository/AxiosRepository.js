import axios from "axios"
import server from "../configuration/Constants.json"
export const GET = (url) => {
   return axios.get(`${server.SERVER_ADDRESS}${url}`)
}