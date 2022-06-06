// ==UserScript==
// @name         Helidrops Free coins Auto Claim
// @namespace    Auto Claim Helidrop
// @version      1.1
// @description  Auto Claim from manual faucet
// @author       Moryata
// @match        https://helidrops.io/coins.php
// @icon         https://www.google.com/s2/favicons?sz=64&domain=https://helidrops.io
// @grant        GM_info
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// ==/UserScript==
(function() {
    'use strict';
    let site = "https://helidrops.io/coins.php";

    // solve the captcha and press the claim button
    setInterval(function() {
        if (unsafeWindow.hcaptcha && unsafeWindow.hcaptcha.getResponse() && unsafeWindow.hcaptcha.getResponse().length) {
            document.querySelector(".btn-warning-fancy").click();
        }
    }, 3000);

    // refresh page after 60 secondes
    setTimeout(function() {
        window.location.assign(site);
    }, 30000);

})();