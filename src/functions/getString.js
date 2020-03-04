import post from './request.js';

import {getCached, storeCached} from './cache.js';

export default function getString(textname, defaulttxt = "getString:undefined", language = "user") {

    language = language.toUpperCase();
    textname = textname.toUpperCase();
    if (language === 'USER') {
        language = 'EN'; //TODO...
    }
    let cached = getCached(`functions.getString.${ language }.${ textname }`);
    if (cached) {
        // We are not 0, and we assume that it's ok.
        return cached;
    }

    //Example request

    let request = {
        "urid": "UniqueRequestId",
        "method": "getString",
        "params": {
            "textname": textname,
            "language": language
        }
    }

    /*
    let response = {
        "request": request,
        "ok": true,
        "urid": request.urid,
        "response": textname+":"+defaulttxt,
        "error": null
    }
    */
    let response = post(request);
    storeCached(`functions.getString.${ language }.${ textname }`,response.response);
    return response.response;
}
