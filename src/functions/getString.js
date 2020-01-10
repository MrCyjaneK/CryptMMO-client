export default function getString(textname, defaulttxt = "getString:undefined", language = "user") {

    language = language.toUpperCase();
    textname = textname.toUpperCase();
    if (language === 'USER') {
        language = 'EN'; //TODO...
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

    let response = {
        "request": request,
        "ok": true,
        "urid": request.urid,
        "response": textname+":"+defaulttxt,
        "error": null
    }
    
    return response.response;
}