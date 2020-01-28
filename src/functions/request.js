import urid from './uuidv4.js';
import { setCookie, getCookie, cleanCookies } from './cookie.js'
import renderDialog from './renderDialog';
export default function post(data,isLogin = false) {
    try {
        if (isLogin) {
            // Remove all cookies
            return userLogin();
        }
        let params = data;
        params.auth = {
            "cookie": getCookie('authtoken')
        }
        let resp = sendData(params);
        // Check if response is ok.
        if (resp.ok) {
            return resp;
        } else {
            //renderDialog("An critical (probably) server-side error happened.\nHowever, server have provided following information:\n"+resp.error.message, "Engine crashed!", 'alert');
            console.error(resp);
        }
    } catch (e) {
        renderDialog("We had some troubles with client-sever communication.", "Engine crashed!", 'alert');
        console.error(e);
    }

    function userLogin() {
        cleanCookies();
        let cookie = sendData({
            "urid": urid(),
            "method": 'login',
            "params": data
        });
        setCookie('authtoken', cookie.response.cookie);
        window.location.href = "/"; //Reload
        return 0;
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
