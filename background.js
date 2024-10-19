// Background script for handling notifications and storage
chrome.runtime.onInstalled.addListener(() => {
    console.log('Roblox Toolkit installed!');
});

// Function to send notifications (optional)
function sendNotification(title, message) {
    chrome.notifications.create({
        type: 'basic',
        title: title,
        message: message,
        priority: 2
    });
}
