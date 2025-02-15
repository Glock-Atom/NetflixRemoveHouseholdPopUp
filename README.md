# NetflixRemoveHouseholdPopUp

**Before the Script:**  
![Before the Script](before.png)  
**After the Script:**  
![After the Script](after.png)  

## Introduction

This script removes the "Your device isn't part of the Netflix Household for this account" popup in Netflix. While it effectively removes the popup, it does come with some limitations on Netflix's full functionality. Please read the [Common Issues](#common-issues) section for more details.

## Preface

Although this script removes the popup, it will limit some of Netflix's functionalities. To regain full functionality, you can use the disconnecting from the internet trick:

1. **Open the Video**  
2. **Disconnect from the WiFi or unplug your Ethernet cable right before you get the popup (the video should be played for almost 1 second)**  
3. **Your video will continue to play. Connect back to WiFi or plug your Ethernet cable back in.**  

This method also works on your phone. Instead of turning off your WiFi, enable flight mode and then enter the Netflix app. Choose your profile, and you should be redirected to the homepage. Turn off flight mode, and you are good to go!

## Table of Contents

1. [Introduction](#introduction)  
2. [Preface](#preface)  
3. [Installation](#installation)  
4. [Common Issues](#common-issues)  
5. [Suggestions/Bug Reports](#suggestionsbug-reports)  

## Installation

1. **Install Tampermonkey**:  
   If you have not already installed Tampermonkey, install it using the links below:  
   - [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
   - [Tampermonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)  
   - [Tampermonkey for Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)  
   - [Tampermonkey for Opera/OperaGX](https://addons.opera.com/en-gb/extensions/details/tampermonkey-beta/)  

2. **Install the Script**:  
   [Click Here and Press Install](https://www.tampermonkey.net/script_installation.php#url=https://github.com/Glock-Atom/NetflixRemoveHouseholdPopUp/raw/refs/heads/main/Netflix-Bypass-Device-not-in-Household-Popup-2025-02-12.user.js).  

3. **Enable the Script**:  
   If not already enabled, enable the script by clicking the switch next to the script name in the Tampermonkey Dashboard.  

## Common Issues

- **Limited Netflix Controls**: You cannot use Netflix controls (pause button, next episode button, etc.) because the popup has been removed.  
- **Subtitles and Voiceovers**: You cannot turn on or off subtitles or voiceovers, as Netflix controls are not available.  
- **Skipping Videos**: You cannot skip the video too much or go back too much. This will lead to an error screen. Instead, skip little by little using the right arrow button on your keyboard. **You need to allow the buffer to load, or else an error screen will pop up.**  

## Suggestions/Bug Reports

If you have any suggestions or encounter any issues, feel free to create issues or pull requests on the [GitHub repository](https://github.com/Glock-Atom/NetflixRemoveHouseholdPopUp).
