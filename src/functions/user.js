//import { setCookie, getCookie } from './cookie.js'

export default function user() {
    let request = {
        "urid": "UniqueRequestId",
        "method": "getUser",
        "params": null
    }
    let response = {
        "request": request,
        "ok": true,
        "urid": request.urid,
        "response": {
            "name": "UserName",
            "balance": 15.00,
            "loggedin": false
        },
        "error": null
    }
    return response.response;
}