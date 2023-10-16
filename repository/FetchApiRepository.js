
import server from "../configuration/Constants.json"
export const GET = (url) => {
   return fetch(`${server.SERVER_ADDRESS}${url}`)
}