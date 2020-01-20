import urid from './uuidv4.js';
import { setCookie, getCookie, cleanCookies } from './cookie.js'
import renderDialog from './renderDialog';
export default function post(data,isLogin = false) {
    try {
        if (isLogin) {
            // Remove all cookies
            cleanCookies()
            let cookie = sendData(
                {
                    "urid": urid(),
                    "method": 'login',
                    "params": data
                }
            )
            setCookie('authtoken',cookie.response.cookie);
            window.location.href = "/"; //Reload
            return 0;
        }
        let params = data;
        params.auth = {
            "cookie": getCookie('authtoken')
        }
        let resp = sendData(params);
        return resp;
    } catch (e) {
        renderDialog("We had some troubles with client-sever communication.", "Engine crashed!", 'alert');
        console.error(e);
        return null;
    }
}
function sendData (params) {
    return sendToUrl("http://cryptmmo.mrcyjanek.net:69/api.php",params);
}
function sendToUrl(url,params) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", url, false); // true for asynchronous
                                      // TODO.................
    xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlHttp.send(JSON.stringify(params));
    return JSON.parse(xmlHttp.responseText);
}

/*
    // https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=
*/