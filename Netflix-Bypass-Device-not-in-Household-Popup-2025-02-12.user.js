// ==UserScript==
// @name         Netflix-Bypass-Device-not-in-Household-Popup
// @namespace    http://tampermonkey.net/
// @version      2025-02-12
// @description  Removes Netflix Device not in Household Popup
// @author       Glock A.
// @match        https://www.netflix.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=netflix.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const removeClassFromElements = (className) => {
        document.querySelectorAll(`.${className}`).forEach(el => {
            el.classList.remove(className);
            console.info(`${className} removed successfully!`);
        });
    };

    const hideAndClearElements = (selector) => {
        document.querySelectorAll(selector).forEach(el => {
            el.style.visibility = "hidden";
        });
    };

    const addControlsToVideos = () => {
        document.querySelectorAll('video').forEach(video => video.setAttribute("controls", ""));
    };

    let observer = new MutationObserver(() => {
        // Remove specified classes
        removeClassFromElements("default-ltr-cache-1hm8q18");
        removeClassFromElements("nf-modal");

        // Hide and clear elements
        hideAndClearElements(".e1qcljkj0");

        // Add controls to videos
        addControlsToVideos();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
