chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.type === "twitterOrNot")
    {
        // window.stage = 4;
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


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.type === "getData")
    {
        fetch("https://recall-smoky.vercel.app/api/token").then((response) => {
            if (response.ok)
                return response.json(); // Convert the response to JSON
            else
                throw new Error("Error fetching data");
        }).then((data) => {
            sendResponse({ data: data }); // Use the parsed JSON data
        }).catch((error) => {
            console.error(error);
        });
        // sendResponse({data: "hello"});
        return true;
    }
})