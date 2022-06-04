// ==UserScript==
// @name         Allfaucet
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Auto Claim from manual faucet using hcaptcha solver! Open https://allfaucet.xyz/?r=6755 and go to manual faucet claim
// @author       Bidmaster777 (with kind help of neerk)
// @match        https://allfaucet.xyz/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=allfaucet.xyz
// @grant        GM_info
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function() {
        if(unsafeWindow.hcaptcha && unsafeWindow.hcaptcha.getResponse() && unsafeWindow.hcaptcha.getResponse().length) {
            document.querySelector(".claim-button").click();
        }
            }, 1000);

var site = "https://allfaucet.xyz/faucet";

    setTimeout(function() {
        if($("*:contains('An Error Was Encountered')").length > 0) {
            window.location.href = site;
        }
            }, 1000);

})();