chrome.runtime.sendMessage({ type: "twitterOrNot" }, function (response) {
    if (response.check) {
        console.log("Yes");
        window.onload = function () {
            setInterval(() => {
                const dd = document.querySelector("body > div:nth-of-type(1) > div > div > div:nth-of-type(2) > main > div > div > div > div:nth-of-type(1) > div > div:nth-of-type(5) > section > div > div");

                if(dd)
                console.log(dd.childNodes.length);

                let div = document.createElement('div');
                div.innerHTML = `<body style="background-color: black; font-family: Sans-serif; margin: 2px; position: absolute;">
        <div class="tweet" style="display: flex; width: min-content">
            <div style="width: 40px; margin-right: 8px">
                <img src="./assets/ayoub-moukhliss-423.jpeg" alt="avatar" width="40px" height="40px"
                    style="border-radius: 100%" />
            </div>
    
            <div>
                <div style="display: flex; justify-content: space-between">
                    <div style="display: flex">
                        <span style="
                    font-weight: 700;
                    font-size: 15px;
                    color: #e7e9ea;
                    margin-right: 5px;
                ">Abinash Ray</span>
                        <span style="color: #797c7c; font-size: 15px; margin-right: 4px">@rayyadav9845</span>
                        <span style="color: #797c7c; font-size: 15px">24 days</span>
                    </div>
    
                    <!-- <div><img src="./assets/ots.png" alt="three_dot"></div> -->
                </div>
    
                <div style="
                color: #e7e9ea;
                margin-top: 7px;
                font-size: 15px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 20px;
            ">
                    This is my first Tweet. Thats it.lsdkvn Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Illo iure ipsam, reprehenderit ipsum
                    excepturi, ut illum necessitatibus molestiae atque animi alias officia
                    facere! Necessitatibus reprehenderit eius facere totam. Cumque,
                    tempore.
                </div>
    
                <img src="./assets/pexels-vitalina-19392714.jpg" height="320px" width="520px"
                    style="object-fit: cover; margin-top: 10px; border-radius: 2%" />
    
                <div style="
                color: #71767b;
                display: flex;
                justify-content: space-between;
                margin-top: 12px;
            ">
                    <div>
                        <img src="./assets/comment.png" alt="commet"
                            style="height: 18px; width: 18px; margin-right: 5px" /><span
                            style="margin-right: 75px">12</span>
                        <img src="./assets/repost.png" style="height: 15px; width: 18px; margin-right: 5px"
                            alt="repost" /><span style="margin-right: 75px">12</span>
                        <img src="./assets/love.png" alt="love" style="height: 16px; width: 18px; margin-right: 5px" /><span
                            style="margin-right: 70px">12</span>
                        <img src="./assets/impression.png" alt="imporession"
                            style="height: 18px; width: 18px; margin-right: 5px" /><span
                            style="margin-right: 70px">12</span>
                    </div>
    
                    <div style="display: flex">
                        <img src="./assets/bookmark.png" alt="bookmark"
                            style="height: 18px; width: 18px; margin-right: 15px" />
                        <img src="./assets/upload.png" alt="upload" style="height: 18px; width: 18px" />
                    </div>
                </div>
            </div>
        </div>`;

            dd.appendChild(div);
            }, 2000);
        }
    }
    else 
    {
        console.log("NO")
    }
})