// Content script that runs on Roblox pages
console.log('Roblox Toolkit content script loaded');

// Example function to add functionality to the page
function addCustomElements() {
    const header = document.createElement('h2');
    header.textContent = 'Welcome to Roblox Toolkit!';
    document.body.prepend(header);
}

addCustomElements();
