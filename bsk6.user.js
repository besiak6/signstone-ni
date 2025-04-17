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
"use strict";
(function() {
    const version = Date.now();
    const build = "https://addons2.margonem.pl/get/152/152603dev.js";
    const script = document.createElement("script");
    script.src = `${build}?v=${version}`;
    document.body.appendChild(script);
})();
