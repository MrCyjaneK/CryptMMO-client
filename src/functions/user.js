import post from './request.js'
import urid from './uuidv4.js'

// async, to get .then working
export default async function user() {
    let request = {
        "urid": urid(),
        "method": "getUser",
        "params": null
    }
    let response = post(request);
    //post(request)
    //console.log(response);
    return response.response;
}
