chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.type === "siteName")
    {
        chrome.tabs.query({ active: true}, function(tabs){
            const currentTab = tabs[0];
            if(currentTab.url.includes("x.com"))
            {
                sendResponse({check: true})
            }
            else{
                sendResponse({check: false})
            }
        })
    }
    return true;
});