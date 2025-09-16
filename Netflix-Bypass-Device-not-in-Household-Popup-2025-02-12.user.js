// ==UserScript==
// @name         Netflix-Bypass-Device-not-in-Household-Popup
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  Removes Netflix Device not in Household Popup
// @author       Glock A.
// @match        https://www.netflix.com/browse/*
// @match        https://www.netflix.com/latest/*
// @match        https://www.netflix.com/watch/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=netflix.com
// @updateURL    https://github.com/Glock-Atom/NetflixRemoveHouseholdPopUp/blob/main/Netflix-Bypass-Device-not-in-Household-Popup-2025-02-12.user.js
// @downloadURL  https://github.com/Glock-Atom/NetflixRemoveHouseholdPopUp/blob/main/Netflix-Bypass-Device-not-in-Household-Popup-2025-02-12.user.js
// @grant        none
// ==/UserScript==

(function () {
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
        removeClassFromElements("nf-modal");;

        // Hide and clear elements
        hideAndClearElements(".e1qcljkj0");

        // Add controls to videos because Netflix controls wont be visible
        addControlsToVideos();
    });

    let hasIgnoredUpdate = false;
    const updateCheck = true;

    if(updateCheck) checkForUpdate();

    function checkForUpdate() {

        if (!(window.location.href.includes("netflix.com"))) {
            return;
        }

        if (hasIgnoredUpdate) {
            return;
        }

        const scriptUrl = 'https://raw.githubusercontent.com/Glock-Atom/NetflixRemoveHouseholdPopUp/main/Netflix-Bypass-Device-not-in-Household-Popup-2025-02-12.user.js';

        fetch(scriptUrl)
            .then(response => response.text())
            .then(data => {
                // Extract version from the script on GitHub
                const match = data.match(/@version\s+(\d+\.\d+)/);
                if (match) {
                    const githubVersion = parseFloat(match[1]);
                    const currentVersion = parseFloat(GM_info.script.version);

                    if (githubVersion > currentVersion) {
                        console.log('A new version is available. Please update your script.');

                        var result = window.confirm("A new version is available. Please update your script.");

                        if (result) {
                            window.location.replace(scriptUrl);
                        }

                    } else {
                        console.log('You have the latest version of the script.');
                    }
                } else {
                    console.error('Unable to extract version from the GitHub script.');
                }
            })
            .catch(error => {
                hasIgnoredUpdate = true;
                console.error('Error checking for updates:', error);
            });
    }

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
