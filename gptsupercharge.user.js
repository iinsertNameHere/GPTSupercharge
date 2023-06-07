// ==UserScript==
// @name         ChatGPT auto Continue
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Clicks the ChatGPT Continue button indefinitely
// @icon         https://img.icons8.com/?size=120&id=63264&format=png
// @author       iinsert
// @match        https://chat.openai.com/*
// @grant        none
// ==/UserScript==

// Add Function to get a element by XPath
document.getElementByXPath = function(xpath){ return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue; };


// Function to be runn once the webpage is fully Loaded
function onLoad() {
    // Get Continue Button by XPath
    var continueButton = document.getElementByXPath("/html/body/div[1]/div[2]/div[2]/div/main/div[3]/form/div/div[1]/div/button[2]")

    // Check if Button exsits
    if (continueButton != null) {

        // Click Button if it exsits
        continueButton.click();
    }

    // Whait 500ms befor executing Function again
    setTimeout(onLoad, 500);
}


// Entry Function
(function() {
    'use strict';

    // Set the onLoad function to be executed if the webpage is fully loaded
    window.addEventListener('load', onLoad, false);
})();
