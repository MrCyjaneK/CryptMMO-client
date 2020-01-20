import post from './request.js'
import urid from './uuidv4.js'

export default async function user() {
    let request = {
        "urid": urid(),
        "method": "getUser",
        "params": null
    }
    response = await post(request);
    return response.response;
}