// ==UserScript==
// @name         Allfaucet
// @namespace    AutoClaim
// @version      2.0
// @description  Auto Claim from manual faucet
// @author       Moryata
// @match        https://allfaucet.xyz/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=allfaucet.xyz
// @grant        GM_info
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// ==/UserScript==
(function() {
    'use strict';
    setInterval(function() {
        if (unsafeWindow.hcaptcha && unsafeWindow.hcaptcha.getResponse() && unsafeWindow.hcaptcha.getResponse().length) {
            document.querySelector(".claim-button").click();
        }
    }, 2500);

    var site = "https://allfaucet.xyz/faucet";

    setTimeout(function() {
        if ($("*:contains('An Error Was Encountered')").length > 0) {
            window.location.href = site;
        }
    }, 250);

    setTimeout(function() {
        window.location.assign(site);
    }, 120000);

})();
