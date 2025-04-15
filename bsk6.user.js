// ==UserScript==
// @name         Znacznik Teleportów NI
// @version      0.6
// @description  Znacznik Teleportów
// @author       besiak
// @match        https://*.margonem.pl/
// @grant        none
// @updateURL    https://github.com/besiak6/signstone-ni/raw/refs/heads/main/bsk6.user.js
// @downloadURL  https://github.com/besiak6/signstone-ni/raw/refs/heads/main/bsk6.user.js
// ==/UserScript==
//v0.6 fixed addon initialization
"use strict";
(function() {
    const date = new Date();
    const version = `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;
    const build = "https://addons2.margonem.pl/get/152/152603dev.js";
    const script = document.createElement("script");
    script.src = `${build}?v=${version}`;
    document.body.appendChild(script);
})();
