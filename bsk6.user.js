// ==UserScript==
// @name         Znacznik Teleportów NI
// @version      0.5
// @description  Znacznik Teleportów
// @author       besiak
// @match        https://*.margonem.pl/
// @grant        none
// @updateURL    https://github.com/besiak6/signstone-ni/raw/refs/heads/main/bsk6.user.js
// @downloadURL  https://github.com/besiak6/signstone-ni/raw/refs/heads/main/bsk6.user.js
// ==/UserScript==
//v.0.5 - Naprawiono inicjacje dodatku
//v.0.4 - Poprawiono mechanikę dodatku
//v.0.3 - Naprawione ładowanie dodatku
//v.0.2 - Poprawiona czcionka tekstu
"use strict";
(function() {
    const date = new Date();
    const version = `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;
    const build = "https://addons2.margonem.pl/get/152/152603dev.js";
    const script = document.createElement("script");
    script.src = `${build}?v=${version}`;
    document.body.appendChild(script);
})();
