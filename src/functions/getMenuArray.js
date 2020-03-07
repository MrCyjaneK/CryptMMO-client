export default function getMenuArray () {

    // Example request
    let request = {
        "urid": "UniqueRequestId",
        "method": "getMenu",
        "params": null
    }

    // Example response
    let response = {
        "request": request,
        "ok": true,
        "urid": request.urid,
        "response": {
            "menu": [
                [
                    {
                        "text": "Castle",
                        "icon": "Home",
                        "key": "drawerCastle",
                        "action": "render:Castle"
                    },
                    {
                        "text": "Quest",
                        "icon": "Map",
                        "key": "drawerQuest",
                        "action": "render:Quest"
                    },
                    {
                        "text": "Social",
                        "icon": "Telegram",
                        "key": "drawerSocial",
                        "action": "render:Social"
                    }
                ],
                [
                    {
                        "text": "USER_NAME",
                        "icon": "Face",
                        "key": "drawerHero",
                        "action": "render:Hero"
                    },
                    //{
                    //    "text": "Scanner",
                    //    "icon": "Public",
                    //    "key": "drawerTheScanner",
                    //    "action": "render:TheScanner/index"
                    //}
                ]
            ]
        },
        "error": null
    }
    return response.response.menu;
}
