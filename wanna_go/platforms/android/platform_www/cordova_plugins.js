cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-sms/www/SMS.js",
        "id": "cordova-plugin-sms.SMS",
        "pluginId": "cordova-plugin-sms",
        "clobbers": [
            "window.SMS"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.0",
    "cordova-plugin-sms": "1.0.4",
    "cordova-plugin-console": "1.0.2"
}
// BOTTOM OF METADATA
});