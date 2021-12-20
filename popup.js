const button = document.getElementById('button');

button.onclick = function () {
    chrome.tabs.create(
        { url: "https://github.com/virgilecheminot/BetterLNB" },
        callback
    );
}

function callback(data) {
    console.log(data);
}