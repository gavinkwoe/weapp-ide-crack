"use strict";

function init() {
    var t, e, i = require("events").EventEmitter,
        o = require("../common/log/log.js"),
        n = (require("../utils/tools.js"), 50),
        r = 37,
        s = 0,
        c = JSON.parse(localStorage.getItem("userInfo")) || {},
        u = {},
        a = {},
        f = JSON.parse(localStorage.getItem("setting")) || {},
        S = f.proxyType || "SYSTEM",
        E = Object.assign({}, i.prototype, {
            upSdkErrNum: function(t, e) {
                o.info("windowStores.js upSdkErrNum " + t + " " + e), this.emit("UP_SDK_ERRNUM", t, e)
            },
            showTipsMsg: function(t) {
                this.emit("SHOW_TIPS_MSG", t)
            },
            getProxySetting: function() {
                return S
            },
            updataProxySetting: function(t, e) {
                S = t, o.info("windowStores.js updataProxySetting " + t);
                var i = require("../common/proxy/setAppProxy.js");
                i.up(function() {
                    e()
                })
            },
            getInitInfo: function() {
                return o.info("windowStores.js getInitInfo " + JSON.stringify(u) + " " + JSON.stringify(a)), {
                    urlConfig: u,
                    clientConfig: a
                }
            },
            showJSONview: function(t) {
                this.emit("SHOW_JSON_VIEW", t)
            },
            showAbout: function() {
                this.emit("SHOW_ABOUT_LAYER")
            },
            showLoginLayer: function() {
                this.emit("SHOW_LOGIN_LAYER")
            },
            getItemH: function() {
                return t
            },
            clearUserInfo: function(t) {
                c = {}, localStorage.removeItem("userInfo"), this.emit("UPDATA_USER_INFO", c), this.showLoginLayer()
            },
            getAutoComplete: function() {
                return e = JSON.parse(localStorage.getItem("autoComplete")) || []
            },
            setAutoComplete: function(t) {
                e || (e = []);
                var i = e.findIndex(function(e) {
                    return e === t
                });
                i === -1 && t.indexOf("chrome-extension") === -1 && (e.push(t), localStorage.setItem("autoComplete", JSON.stringify(e))), this.emit("UPDATA_AUTOCOMPLETE", e)
            },
            getUserInfo: function() {
                if (c) {
                    var t = +new Date;
                    t > c.signatureExpiredTime && (c = {}, localStorage.removeItem("userInfo"))
                }
                return o.info("windowStores.js getUserInfo " + JSON.stringify(c)), c;
            },
            updateUserInfo: function(t) {
                c = t;
                var e = JSON.stringify(t);
                localStorage.setItem("userInfo", e), o.info("windowStores.js updateUserInfo " + e), this.emit("UPDATA_USER_INFO", t)
            },
            upUserTikcet: function(t, e) {
                //c.newticket = t, c.ticketExpiredTime = e, localStorage.setItem("userInfo", JSON.stringify(c)), o.info("windowStores.js upUserTikcet newticket: " + t + " ticketExpiredTime: " + e)
            },
            delUserTicket: function() {
                //c.ticketExpiredTime = +new Date - 100, localStorage.setItem("userInfo", JSON.stringify(c)), o.info("windowStores.js delUserTicket ticketExpiredTime: " + c.ticketExpiredTime)
            },
            resize: function(e) {
                t = e - n - r, this.emit("TOGGLE_SHARE_MENUS", t)
            },
            bodyClick: function(t) {
                this.emit("BODY_CLICK", t)
            },
            focusAddressBar: function(t) {
                this.emit("FOCUS_ADDRESSBAR", t)
            },
            clearAddressHistory: function(t) {
                e = [], localStorage.setItem("autoComplete", JSON.stringify(e)), this.emit("UPDATA_AUTOCOMPLETE", e, t), t.callBack && t.callBack()
            },
            showSetting: function() {
                this.emit("SHOW_SETTING")
            },
            changeDevtools: function() {
                this.emit("CHANGE_DEVTOOLS")
            },
            disAbleURLBar: function() {
                this.emit("DISABLE_URLBAR")
            },
            ableURLBar: function() {
                this.emit("ABLE_URLBAR")
            },
            getSetting: function() {
                var t = localStorage.getItem("setting");
                return t && (t = JSON.parse(t), t.currentProxyHost = t.proxyHost, t.currentProxyPort = t.proxyPort, void 0 === t.device && (void 0 === t.os && (t.os = "iOS"), "iOS" === t.os ? t.device = "iPhone 6" : t.device = "Nexus 5x")), t
            },
            saveSetting: function(t) {
                var e = Object.assign(f, t);
                t = JSON.stringify(e), o.info("windowStores.js saveSetting: " + t + " "), localStorage.setItem("setting", t)
            },
            getCurrentWebviewID: function() {
                return s
            },
            changeUrl: function(t, e) {
                s = e, this.emit("CHANGE_WEBVIEW_URL", t, e)
            },
            closeDevtools: function(t) {
                this.emit("CLOSE_WEBVIEW_DEVTOOLS", t)
            },
            openDevtools: function(t, e, i) {
                this.emit("OPEN_WEBVIEW_DEVTOOLS", t, e, i)
            },
            setInfo: function(t) {
                var e = t.device,
                    i = e.os,
                    o = this.getSetting();
                o.os === i && o.device === e || (o.os = i, o.device = e, this.saveSetting(o)), this.emit("SET_WEBVIEW_INFO", t)
            },
            appEnterBackground: function() {
                this.emit("APP_ENTER_BACKGROUND")
            },
            appEnterForeground: function() {
                this.emit("APP_ENTER_FOREGROUND")
            },
            clickToolsbar: function(t) {
                this.emit("CLICK_TOOLSBAR", t)
            },
            operateMusicPlayer: function(t) {
                this.emit("OPERATE_MUSIC_PLAY", t)
            },
            getMusicPlayState: function(t) {
                this.emit("GET_MUSIC_PLAY_STATE", t)
            },
            startDebuggee: function(t, e) {
                this.emit("START_WEBVIEW_DEBUGGEE", t, e)
            },
            changeWebviewID: function(t) {
                this.emit("WINDOW_CHANGE_WEBVIEW_ID", t)
            },
            getWeappError: function(t, e, i) {
                this.emit("WINDOW_GET_WEBAPP_ERROR", t, e, i)
            }
        });
    _exports = E
}
var _exports;
init(), module.exports = _exports;
