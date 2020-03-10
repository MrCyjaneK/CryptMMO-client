import post from './request.js'
import urid from './uuidv4.js'

// async, to get .then working
export default function user() {
    let request = {
        "urid": urid(),
        "method": "getUser",
        "params": null
    }
    // Make some caching here (Hourly update or something?)
    let response = post(request);
    //post(request)
    //console.log(response);
    return response.response;
}
