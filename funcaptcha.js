// ==UserScript==
// @name         Autofucaptcha
// @namespace    http://tampermonkey.net/
// @version      1.0  09/12/2020
// @description  automatica funcaptchas!
// @author       mcdouglasx
// @noframes
// @exclude      https://greasyfork.org/*
// @exclude      http://autom4tic4.000webhostapp.com/*
// @exclude      https://www.mariott.com/*
// @exclude      https://www.autoscout24.de/*
// @exclude      https://services.isb.az/*
// @exclude      https://www.ourtime.com/*
// @exclude      https://localbitcoins.net/*
// @exclude      https://www.mobile.de/*
// @exclude      https://evas2.urm.lt/*
// @exclude      https://hideout.tv/*
// @exclude      https://vatstrange.com/*
// @exclude      https://trifleaardvark.com/*
// @exclude      https://revolutionaryraw.com/*
// @exclude      https://pendulumfocused.com.br/*
// @exclude      https://litigationwife.com/*
// @exclude      https://expedite.com/*
// @exclude      https://honeyydew.com/*
// @exclude      https://www.truthfinder.com/*
// @exclude      https://perpendicular.com/*
// @exclude      https://medirian.com/*
// @exclude      https://foyer.com/*
// @exclude      https://catamaranbra.com/*
// @exclude      https://trussspecials.com.uk/*
// @exclude      https://calendartangle.com/*
// @exclude      https://suitcase.com/*
// @exclude      https://leisurebeet.com/*
// @exclude      https://mileplaying.com/*
// @exclude      https://reclinerequal.com/*
// @exclude      https://www1.ticketmaster.com/*
// @exclude      https://concerts1.liven/*
// @exclude      wftc3.e-travel.com/*
// @exclude	     https://www.idax.pro/*
// @exclude      https://pointeraspen.com/*
// @exclude      https://lungfishdolce.com/*
// @exclude      https://eunex.co/*
// @exclude      https://granndparent.com/*
// @exclude      https://usgraduate.com/
// @exclude      https://tealdecennium.com/
// @exclude      https://bitrabbit.io/*
// @exclude      https://newdawnroaster.com/*
// @exclude      https://caliroots.com/*
// @exclude      https://bloggrow.com/*
// @exclude      https://birosag.hu/*
// @exclude      https://afterlife.com/*
// @include      http://*/*
// @include      https://*
// @include      http://*
// @run-at       document-end
// @grant        none
// ==/UserScript==
setTimeout(func, 8500);
function func() {
    document.getElementById("funcaptcha-response").value = "complete";
    }