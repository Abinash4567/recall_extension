chrome.runtime.sendMessage({ type: "twitterOrNot" }, function (response) {
    if (response.check) 
    {
        console.log("Recall Extension Triggered!!!");

        setInterval(()=>{
            const parentDiv = document.querySelector('#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-f8sm7e.r-13qz1uu.r-1ye8kvj > section > div > div');

            let arrYCoordinates = [];
            parentDiv.childNodes.forEach((child)=>{
                let individualChildY = child.attributes.style.value.split('(')[1].split('p')[0];
                // console.log(individualChildY);
                arrYCoordinates.push(individualChildY);
            })

            let count = [];
            for(let i=0; i<arrYCoordinates.length-1; i++)
            {
                let check = arrYCoordinates[i+1] - arrYCoordinates[i] > 480 ? true : false;
                if(check)
                    count.push(i);
            }

            if(count.length > 0)
            {
                let expectedPosts = 0.2 * arrYCoordinates.length;
                for(let i=0; i<count.length; i++)
                {
                    //replace Child
                    expectedPosts--;
                    if(expectedPosts===0)
                        break;
                }
            }
        }, 2000);
    }
    else 
    {
        console.log("NO");
    }
});