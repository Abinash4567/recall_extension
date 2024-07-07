chrome.runtime.sendMessage({ type: "twitterOrNot" }, function (response) {
    if (response.check) {
        console.log("Recall Extension Triggered!!!");

        let postsData;
        chrome.runtime.sendMessage({type: "getData"}, function(data){
            postsData = data.data.subscriptionDetail.data;
            console.log(postsData);
        });

        let interval = 30000;
        let lim = 2;
        // console.log(window.stage);



        setInterval(() => {

            // setInterval(() => {
                const parentDiv = document.querySelector('#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1c4cdxw.r-1t251xo.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > div.css-175oi2r.r-f8sm7e.r-13qz1uu.r-1ye8kvj > section > div > div');

                // console.log(parentDiv.childNodes);

                let arrYCoordinates = [];
                parentDiv.childNodes.forEach((child) => {
                    let individualChildY = child.attributes.style.value.split('(')[1].split('p')[0];
                    arrYCoordinates.push(individualChildY);
                })

                console.log(arrYCoordinates);
                let count = 0;
                for (let i = 0; i < arrYCoordinates.length - 1; i++) {
                    let check = arrYCoordinates[i + 1] - arrYCoordinates[i] > 480 ? true : false;
                    if (check)
                    {
                        count++;
                        if(count > lim)
                            break;
                        // const newChild = document.createElement('div');
                        // newChild.className = 'css-175oi2r customdiv';
                        // newChild.setAttribute('data-testid', 'cellInnerDiv');
                        // newChild.style.transform = `translateY(${arrYCoordinates[i]}px)`;
                        // newChild.style.position = 'absolute';
                        // newChild.style.width = '100%';


                        let index = Math.floor(Math.random() * postsData.length);


                        let avatarImage = postsData[index].avatarImage;
                        let username = postsData[index].username;
                        let image = postsData[index].tweetImage;
                        let tweet = postsData[index].tweet;
                        let usernameHandle = postsData[index].handle;
                        console.log(avatarImage, username, image, tweet, usernameHandle);

    //                     let newTweet = `<div class="css-175oi2r r-1igl3o0 r-qklmqi r-1adg3ll r-1ny4l3l">
    //     <div class="css-175oi2r">
    //         <article
    //             aria-labelledby="id__lg4t3gimc5b id__khmr4m9416j id__4htr1ihvbwc id__lc610hrc51e id__8nw04vytd6y id__izju4ts7u8j id__1568o3kma15 id__0odbw4e3nh6 id__do7902fbeog id__7ck7yr3x4i4 id__sgs86zqn0d id__inypshhtq5q id__fd08whwytya id__uoxn58a0o0i id__f7ubbu1yckn id__0krwn6w4fey id__vu4zceoj9ih id__5kz7aefga64 id__ejurtn18phr"
    //             role="article" tabindex="0"
    //             class="css-175oi2r r-18u37iz r-1udh08x r-1c4vpko r-1c7gwzm r-o7ynqc r-6416eg r-1ny4l3l r-1loqt21"
    //             data-testid="tweet">
    //             <div class="css-175oi2r r-eqz5dr r-16y2uox r-1wbh5a2">
    //                 <div class="css-175oi2r r-16y2uox r-1wbh5a2 r-1ny4l3l">
    //                     <div class="css-175oi2r">
    //                         <div class="css-175oi2r r-18u37iz">
    //                             <div class="css-175oi2r r-1iusvr4 r-16y2uox r-ttdzmv"></div>
    //                         </div>
    //                     </div>
    //                     <div class="css-175oi2r r-18u37iz">
    //                         <div class="css-175oi2r r-18kxxzh r-1wron08 r-onrtq4 r-1awozwy">
    //                             <div class="css-175oi2r" data-testid="Tweet-User-Avatar">
    //                                 <div class="css-175oi2r r-18kxxzh r-1wbh5a2 r-13qz1uu">
    //                                     <div class="css-175oi2r r-1wbh5a2 r-dnmrzs">
    //                                         <div class="css-175oi2r r-bztko3 r-1adg3ll"
    //                                             data-testid="UserAvatar-Container-theitalyfocus"
    //                                             style="width: 40px; height: 40px;">
    //                                             <div class="r-1adg3ll r-13qz1uu" style="padding-bottom: 100%;"></div>
    //                                             <div class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu">
    //                                                 <div
    //                                                     class="css-175oi2r r-1adg3ll r-1pi2tsx r-13qz1uu r-45ll9u r-u8s1d r-1v2oles r-176fswd r-bztko3">
    //                                                     <div class="r-1adg3ll r-13qz1uu" style="padding-bottom: 100%;">
    //                                                     </div>
    //                                                     <div
    //                                                         class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu">
    //                                                         <div class="css-175oi2r r-sdzlij r-1udh08x r-5f1w11 r-u8s1d r-8jfcpp"
    //                                                             style="width: calc(100% + 4px); height: calc(100% + 4px);">
    //                                                             <a href="#" aria-hidden="true" role="link"
    //                                                                 tabindex="-1"
    //                                                                 class="css-175oi2r r-1pi2tsx r-13qz1uu r-o7ynqc r-6416eg r-1ny4l3l r-1loqt21"
    //                                                                 style="background-color: rgba(0, 0, 0, 0);">
    //                                                                 <div class="css-175oi2r r-sdzlij r-1udh08x r-633pao r-45ll9u r-u8s1d r-1v2oles r-176fswd"
    //                                                                     style="width: calc(100% - 4px); height: calc(100% - 4px);">
    //                                                                     <div class="css-175oi2r r-1pi2tsx r-13qz1uu"
    //                                                                         style="background-color: rgba(0, 0, 0, 0);">
    //                                                                     </div>
    //                                                                 </div>
    //                                                                 <div class="css-175oi2r r-sdzlij r-1udh08x r-633pao r-45ll9u r-u8s1d r-1v2oles r-176fswd"
    //                                                                     style="width: calc(100% - 4px); height: calc(100% - 4px);">
    //                                                                     <div
    //                                                                         class="css-175oi2r r-1pi2tsx r-13qz1uu r-kemksi">
    //                                                                     </div>
    //                                                                 </div>
    //                                                                 <div class="css-175oi2r r-sdzlij r-1udh08x r-633pao r-45ll9u r-u8s1d r-1v2oles r-176fswd"
    //                                                                     style="background-color: rgb(0, 0, 0); width: calc(100% - 4px); height: calc(100% - 4px);">
    //                                                                     <div class="css-175oi2r r-1adg3ll r-1udh08x"
    //                                                                         style="">
    //                                                                         <div class="r-1adg3ll r-13qz1uu"
    //                                                                             style="padding-bottom: 100%;"></div>
    //                                                                         <div
    //                                                                             class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu">
    //                                                                             <div
    //                                                                                 class="css-175oi2r r-1mlwlqe r-1udh08x r-417010 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af">
    //                                                                                 <div class="css-175oi2r r-1niwhzg r-vvn4in r-u6sd8q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw r-4gszlv"
    //                                                                                     style="background-image: url(${avatarImage});">
    //                                                                                 </div><img alt="" draggable="true"
    //                                                                                     src=${avatarImage}
    //                                                                                     class="css-9pa8cd"
    //                                                                                     crossorigin="anonymous">
    //                                                                             </div>
    //                                                                         </div>
    //                                                                     </div>
    //                                                                 </div>
    //                                                                 <div class="css-175oi2r r-sdzlij r-1udh08x r-45ll9u r-u8s1d r-1v2oles r-176fswd"
    //                                                                     style="width: calc(100% - 4px); height: calc(100% - 4px);">
    //                                                                     <div
    //                                                                         class="css-175oi2r r-172uzmj r-1pi2tsx r-13qz1uu r-o7ynqc r-6416eg r-1ny4l3l">
    //                                                                     </div>
    //                                                                 </div>
    //                                                             </a></div>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div class="css-175oi2r r-1iusvr4 r-16y2uox r-1777fci r-kzbkwu">
    //                             <div class="css-175oi2r r-zl2h9q">
    //                                 <div class="css-175oi2r r-k4xj1c r-18u37iz r-1wtj0ep">
    //                                     <div class="css-175oi2r r-1d09ksm r-18u37iz r-1wbh5a2">
    //                                         <div class="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l">
    //                                             <div class="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1awozwy r-18u37iz"
    //                                                 id="id__8nw04vytd6y" data-testid="User-Name">
    //                                                 <div class="css-175oi2r r-1awozwy r-18u37iz r-1wbh5a2 r-dnmrzs">
    //                                                     <div class="css-175oi2r r-1wbh5a2 r-dnmrzs"><a
    //                                                             href="/theitalyfocus" role="link"
    //                                                             class="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21">
    //                                                             <div
    //                                                                 class="css-175oi2r r-1awozwy r-18u37iz r-1wbh5a2 r-dnmrzs">
    //                                                                 <div dir="ltr"
    //                                                                     class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-1udh08x r-3s2u2q"
    //                                                                     style="text-overflow: unset; color: rgb(231, 233, 234);">
    //                                                                     <span
    //                                                                         class="css-1jxf684 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
    //                                                                         style="text-overflow: unset;"><span
    //                                                                             class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
    //                                                                             style="text-overflow: unset;">${username}</span></span>
    //                                                                 </div>
    //                                                                 <div dir="ltr"
    //                                                                     class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-xoduu5 r-18u37iz r-1q142lx"
    //                                                                     style="text-overflow: unset; color: rgb(231, 233, 234);">
    //                                                                     <span
    //                                                                         class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1awozwy r-xoduu5"
    //                                                                         style="text-overflow: unset;"></span></div>
    //                                                             </div>
    //                                                         </a></div>
    //                                                 </div>
    //                                                 <div class="css-175oi2r r-18u37iz r-1wbh5a2 r-1ez5h0i">
    //                                                     <div class="css-175oi2r r-1d09ksm r-18u37iz r-1wbh5a2">
    //                                                         <div class="css-175oi2r r-1wbh5a2 r-dnmrzs"><a
    //                                                                 href="#" role="link" tabindex="-1"
    //                                                                 class="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21">
    //                                                                 <div dir="ltr"
    //                                                                     class="css-146c3p1 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-18u37iz r-1wvb978"
    //                                                                     style="text-overflow: unset; color: rgb(113, 118, 123);">
    //                                                                     <span
    //                                                                         class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
    //                                                                         style="text-overflow: unset;">${usernameHandle}</span>
    //                                                                 </div>
    //                                                             </a></div>
    //                                                         <div dir="ltr" aria-hidden="true"
    //                                                             class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1q142lx r-n7gxbd"
    //                                                             style="text-overflow: unset; color: rgb(113, 118, 123);">
    //                                                             <span
    //                                                                 class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
    //                                                                 style="text-overflow: unset;">·</span></div>
    //                                                         <div class="css-175oi2r r-18u37iz r-1q142lx"><a
    //                                                                 href="/theitalyfocus/status/1802811956312809766"
    //                                                                 dir="ltr" aria-label="10 hours ago" role="link"
    //                                                                 class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-xoduu5 r-1q142lx r-1w6e6rj r-9aw3ui r-3s2u2q r-1loqt21"
    //                                                                 style="text-overflow: unset; color: rgb(113, 118, 123);"><time
    //                                                                     datetime="2024-06-17T21:13:59.000Z">${time}</time></a>
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                     <div class="css-175oi2r r-1kkk96v">
    //                                         <div class="css-175oi2r r-1awozwy r-18u37iz r-1cmwbt1 r-1wtj0ep">
    //                                             <div class="css-175oi2r r-1awozwy r-6koalj r-18u37iz">
    //                                                 <div class="css-175oi2r">
    //                                                     <div class="css-175oi2r r-18u37iz r-1h0z5md"><button
    //                                                             aria-expanded="false" aria-haspopup="menu"
    //                                                             aria-label="More" role="button"
    //                                                             class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l"
    //                                                             data-testid="caret" type="button">
    //                                                             <div dir="ltr"
    //                                                                 class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q"
    //                                                                 style="text-overflow: unset; color: rgb(113, 118, 123);">
    //                                                                 <div class="css-175oi2r r-xoduu5">
    //                                                                     <div
    //                                                                         class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l">
    //                                                                     </div><svg viewBox="0 0 24 24"
    //                                                                         aria-hidden="true"
    //                                                                         class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
    //                                                                         <g>
    //                                                                             <path
    //                                                                                 d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
    //                                                                             </path>
    //                                                                         </g>
    //                                                                     </svg>
    //                                                                 </div>
    //                                                             </div>
    //                                                         </button></div>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div class="css-175oi2r">
    //                                 <div dir="auto" lang="en"
    //                                     class="css-146c3p1 r-8akbws r-krxsd3 r-dnmrzs r-1udh08x r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-bnwqim"
    //                                     id="id__sgs86zqn0d" data-testid="tweetText"
    //                                     style="-webkit-line-clamp: 10; text-overflow: unset; color: rgb(231, 233, 234);">
    //                                     <span
    //                                         class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
    //                                         style="text-overflow: unset;">${tweet}</span></div>
    //                             </div>
    //                             <div aria-labelledby="id__njvoexqu68 id__n0d3cykonlf"
    //                                 class="css-175oi2r r-9aw3ui r-1s2bzr4" id="id__fd08whwytya">
    //                                 <div class="css-175oi2r r-9aw3ui">
    //                                     <div class="css-175oi2r">
    //                                         <div class="css-175oi2r">
    //                                             <div
    //                                                 class="css-175oi2r r-1kqtdi0 r-1phboty r-rs99b7 r-1867qdf r-1udh08x r-o7ynqc r-6416eg r-1ny4l3l">
    //                                                 <div class="css-175oi2r">
    //                                                     <div class="css-175oi2r r-16y2uox r-1pi2tsx r-13qz1uu"><a
    //                                                             href="#"
    //                                                             role="link"
    //                                                             class="css-175oi2r r-1pi2tsx r-1ny4l3l r-1loqt21">
    //                                                             <div class="css-175oi2r r-1adg3ll r-1udh08x">
    //                                                                 <div class="r-1adg3ll r-13qz1uu"
    //                                                                     style="padding-bottom: 66.7188%;"></div>
    //                                                                 <div
    //                                                                     class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu">
    //                                                                     <div aria-label="Image"
    //                                                                         class="css-175oi2r r-1mlwlqe r-1udh08x r-417010 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af"
    //                                                                         data-testid="tweetPhoto"
    //                                                                         style="margin: 0px;">
    //                                                                         <div class="css-175oi2r r-1niwhzg r-vvn4in r-u6sd8q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw r-4gszlv"
    //                                                                             style="background-image: url(&quot;${image}&quot;);">
    //                                                                         </div><img alt="Image" draggable="true"
    //                                                                             src=${image}
    //                                                                             class="css-9pa8cd">
    //                                                                     </div>
    //                                                                 </div>
    //                                                             </div>
    //                                                         </a></div>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>





















    //                             <div class="css-175oi2r">
    //                                 <div class="css-175oi2r">
    //                                     <div aria-label="2 replies, 16 reposts, 466 likes, 10 bookmarks, 9550 views"
    //                                         role="group"
    //                                         class="css-175oi2r r-1kbdv8c r-18u37iz r-1wtj0ep r-1ye8kvj r-1s2bzr4"
    //                                         id="id__ejurtn18phr">
    //                                         <div class="css-175oi2r r-18u37iz r-1h0z5md r-13awgt0"><button
    //                                                 aria-label="2 Replies. Reply" role="button"
    //                                                 class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l"
    //                                                 data-testid="reply" type="button">
    //                                                 <div dir="ltr"
    //                                                     class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q"
    //                                                     style="text-overflow: unset; color: rgb(113, 118, 123);">
    //                                                     <div class="css-175oi2r r-xoduu5">
    //                                                         <div
    //                                                             class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l">
    //                                                         </div><svg viewBox="0 0 24 24" aria-hidden="true"
    //                                                             class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
    //                                                             <g>
    //                                                                 <path
    //                                                                     d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z">
    //                                                                 </path>
    //                                                             </g>
    //                                                         </svg>
    //                                                     </div>
    //                                                     <div class="css-175oi2r r-xoduu5 r-1udh08x"><span
    //                                                             data-testid="app-text-transition-container"
    //                                                             style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span
    //                                                                 class="css-1jxf684 r-1ttztb7 r-qvutc0 r-poiln3 r-n6v787 r-1cwl3u0 r-1k6nrdp r-n7gxbd"
    //                                                                 style="text-overflow: unset;"><span
    //                                                                     class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
    //                                                                     style="text-overflow: unset;">2</span></span></span>
    //                                                     </div>
    //                                                 </div>
    //                                             </button></div>
    //                                         <div class="css-175oi2r r-18u37iz r-1h0z5md r-13awgt0"><button
    //                                                 aria-expanded="false" aria-haspopup="menu"
    //                                                 aria-label="16 reposts. Repost" role="button"
    //                                                 class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l"
    //                                                 data-testid="retweet" type="button">
    //                                                 <div dir="ltr"
    //                                                     class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q"
    //                                                     style="text-overflow: unset; color: rgb(113, 118, 123);">
    //                                                     <div class="css-175oi2r r-xoduu5">
    //                                                         <div
    //                                                             class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l">
    //                                                         </div><svg viewBox="0 0 24 24" aria-hidden="true"
    //                                                             class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
    //                                                             <g>
    //                                                                 <path
    //                                                                     d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z">
    //                                                                 </path>
    //                                                             </g>
    //                                                         </svg>
    //                                                     </div>
    //                                                     <div class="css-175oi2r r-xoduu5 r-1udh08x"><span
    //                                                             data-testid="app-text-transition-container"
    //                                                             style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span
    //                                                                 class="css-1jxf684 r-1ttztb7 r-qvutc0 r-poiln3 r-n6v787 r-1cwl3u0 r-1k6nrdp r-n7gxbd"
    //                                                                 style="text-overflow: unset;"><span
    //                                                                     class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
    //                                                                     style="text-overflow: unset;">16</span></span></span>
    //                                                     </div>
    //                                                 </div>
    //                                             </button></div>
    //                                         <div class="css-175oi2r r-18u37iz r-1h0z5md r-13awgt0"><button
    //                                                 aria-label="466 Likes. Like" role="button"
    //                                                 class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l"
    //                                                 data-testid="like" type="button">
    //                                                 <div dir="ltr"
    //                                                     class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q"
    //                                                     style="text-overflow: unset; color: rgb(113, 118, 123);">
    //                                                     <div class="css-175oi2r r-xoduu5">
    //                                                         <div
    //                                                             class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l">
    //                                                         </div><svg viewBox="0 0 24 24" aria-hidden="true"
    //                                                             class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
    //                                                             <g>
    //                                                                 <path
    //                                                                     d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z">
    //                                                                 </path>
    //                                                             </g>
    //                                                         </svg>
    //                                                     </div>
    //                                                     <div class="css-175oi2r r-xoduu5 r-1udh08x"><span
    //                                                             data-testid="app-text-transition-container"
    //                                                             style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span
    //                                                                 class="css-1jxf684 r-1ttztb7 r-qvutc0 r-poiln3 r-n6v787 r-1cwl3u0 r-1k6nrdp r-n7gxbd"
    //                                                                 style="text-overflow: unset;"><span
    //                                                                     class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
    //                                                                     style="text-overflow: unset;">466</span></span></span>
    //                                                     </div>
    //                                                 </div>
    //                                             </button></div>
    //                                         <div class="css-175oi2r r-18u37iz r-1h0z5md r-13awgt0"><a
    //                                                 href="/theitalyfocus/status/1802811956312809766/analytics"
    //                                                 aria-label="9550 views. View post analytics" role="link"
    //                                                 class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1ny4l3l r-1loqt21">
    //                                                 <div dir="ltr"
    //                                                     class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q"
    //                                                     style="text-overflow: unset; color: rgb(113, 118, 123);">
    //                                                     <div class="css-175oi2r r-xoduu5">
    //                                                         <div
    //                                                             class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l">
    //                                                         </div><svg viewBox="0 0 24 24" aria-hidden="true"
    //                                                             class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
    //                                                             <g>
    //                                                                 <path
    //                                                                     d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z">
    //                                                                 </path>
    //                                                             </g>
    //                                                         </svg>
    //                                                     </div>
    //                                                     <div class="css-175oi2r r-xoduu5 r-1udh08x"><span
    //                                                             data-testid="app-text-transition-container"
    //                                                             style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span
    //                                                                 class="css-1jxf684 r-1ttztb7 r-qvutc0 r-poiln3 r-n6v787 r-1cwl3u0 r-1k6nrdp r-n7gxbd"
    //                                                                 style="text-overflow: unset;"><span
    //                                                                     class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
    //                                                                     style="text-overflow: unset;">9.5K</span></span></span>
    //                                                     </div>
    //                                                 </div>
    //                                             </a></div>
    //                                         <div class="css-175oi2r r-18u37iz r-1h0z5md r-1wron08"><button
    //                                                 aria-label="Bookmark" role="button"
    //                                                 class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l"
    //                                                 data-testid="bookmark" type="button">
    //                                                 <div dir="ltr"
    //                                                     class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q"
    //                                                     style="text-overflow: unset; color: rgb(113, 118, 123);">
    //                                                     <div class="css-175oi2r r-xoduu5">
    //                                                         <div
    //                                                             class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l">
    //                                                         </div><svg viewBox="0 0 24 24" aria-hidden="true"
    //                                                             class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
    //                                                             <g>
    //                                                                 <path
    //                                                                     d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z">
    //                                                                 </path>
    //                                                             </g>
    //                                                         </svg>
    //                                                     </div>
    //                                                 </div>
    //                                             </button></div>
    //                                         <div class="css-175oi2r"
    //                                             style="justify-content: inherit; display: inline-grid; transform: rotate(0deg) scale(1) translate3d(0px, 0px, 0px);">
    //                                             <div class="css-175oi2r r-18u37iz r-1h0z5md"><button
    //                                                     aria-expanded="false" aria-haspopup="menu"
    //                                                     aria-label="Share post" role="button"
    //                                                     class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l"
    //                                                     type="button">
    //                                                     <div dir="ltr"
    //                                                         class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q"
    //                                                         style="text-overflow: unset; color: rgb(113, 118, 123);">
    //                                                         <div class="css-175oi2r r-xoduu5">
    //                                                             <div
    //                                                                 class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l">
    //                                                             </div><svg viewBox="0 0 24 24" aria-hidden="true"
    //                                                                 class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
    //                                                                 <g>
    //                                                                     <path
    //                                                                         d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z">
    //                                                                     </path>
    //                                                                 </g>
    //                                                             </svg>
    //                                                         </div>
    //                                                     </div>
    //                                                 </button></div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>



    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </article>
    //     </div>
    // </div>`;         
        let newTweet = `<div class="tweet" style="display: flex; width: min-content; padding: 6px;">
    <div style="width: 40px; margin-right: 8px">
        <img src=${avatarImage} alt="avatar" width="40px" height="40px" style="border-radius: 100%" />
    </div>

    <div>
        <div style="display: flex; justify-content: space-between">
            <div style="display: flex">
                <span style="font-weight: 700;
                            font-size: 15px;
                            color: #e7e9ea;
                            margin-right: 5px;">${username}
                </span>
                <span style="color: #797c7c; font-size: 15px; margin-right: 4px">@${usernameHandle}</span>
                <span style="color: #797c7c; font-size: 15px">24 days</span>
            </div>

            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
        </div>






        <div style="
        color: #e7e9ea;
        margin-top: 7px;
        font-size: 15px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 20px;
    ">${tweet}</div>

        <img src=${image} height="320px" width="520px"
            style="object-fit: cover; margin-top: 10px; border-radius: 2%" />











        <div style="
        color: #71767b;
        display: flex;
        justify-content: space-between;
        margin-top: 12px;">
            <div>
                <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg><span style="margin-right: 75px">12</span>
                    
                <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg><span style="margin-right: 75px">12</span>


                <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg><span style="margin-right: 70px">12</span>


                <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"><g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></g></svg><span
                style="margin-right: 70px">12</span>

            </div>

            <div style="display: flex">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>

                <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg>
        </div>
            </div>
        </div>
    </div>
</div>`;




                        parentDiv.childNodes[i].childNodes[0].innerHTML = newTweet;

//                         newChild.innerHTML = `<div class="css-175oi2r r-1igl3o0 r-qklmqi r-1adg3ll r-1ny4l3l">
//     <div class="css-175oi2r">
//         <article
//             aria-labelledby="id__5rpkif2ec8w id__kk6aqso47 id__lq6bg6y2wm id__0vpu0e3sulgc id__ru56oqy9dp id__9fqz6xwq9cu id__t55o6nan4 id__f4y1vkiedhe id__w4mk5x6tpe id__xvvjzjmbtuj id__zgav8tj0nak id__psr6ph7l68f id__sljmg4dgbbb id__6fn2dy9toy7 id__sf7iy9dxom id__60x17brzzp id__9avwos6g6s id__w2nje5oqu4 id__vps2lx7ewl"
//             role="article" tabindex="0"
//             class="css-175oi2r r-18u37iz r-1udh08x r-1c4vpko r-1c7gwzm r-o7ynqc r-6416eg r-1ny4l3l r-1loqt21"
//             data-testid="tweet">
//             <div class="css-175oi2r r-eqz5dr r-16y2uox r-1wbh5a2">
//                 <div class="css-175oi2r r-16y2uox r-1wbh5a2 r-1ny4l3l">
//                     <div class="css-175oi2r">
//                         <div class="css-175oi2r r-18u37iz">
//                             <div class="css-175oi2r r-1iusvr4 r-16y2uox r-ttdzmv"></div>
//                         </div>
//                     </div>
//                     <div class="css-175oi2r r-18u37iz">
//                         <div class="css-175oi2r r-18kxxzh r-1wron08 r-onrtq4 r-1awozwy">
//                             <div class="css-175oi2r" data-testid="Tweet-User-Avatar">
//                                 <div class="css-175oi2r r-18kxxzh r-1wbh5a2 r-13qz1uu">
//                                     <div class="css-175oi2r r-1wbh5a2 r-dnmrzs">
//                                         <div class="css-175oi2r r-bztko3 r-1adg3ll"
//                                             data-testid="UserAvatar-Container-RemoteOK"
//                                             style="width: 40px; height: 40px; ">
//                                             <div class="r-1adg3ll r-13qz1uu" style="padding-bottom: 100%; ">
//                                             </div>
//                                             <div
//                                                 class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu">
//                                                 <div
//                                                     class="css-175oi2r r-1adg3ll r-1pi2tsx r-13qz1uu r-45ll9u r-u8s1d r-1v2oles r-176fswd r-bztko3">
//                                                     <div class="r-1adg3ll r-13qz1uu"
//                                                         style="padding-bottom: 100%; "></div>
//                                                     <div
//                                                         class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu">
//                                                         <div class="css-175oi2r r-sdzlij r-1udh08x r-5f1w11 r-u8s1d r-8jfcpp"
//                                                             style="width: calc(100%+4px); height: calc(100%+4px); ">
//                                                             <a href=" / RemoteOK" aria-hidden="true" role="link"
//                                                                 tabindex="-1"
//                                                                 class="css-175oi2r r-1pi2tsx r-13qz1uu r-o7ynqc r-6416eg r-1ny4l3l r-1loqt21"
//                                                                 style="background-color: rgba(0, 0, 0, 0); ">
//                                                                 <div class="css-175oi2r r-sdzlij r-1udh08x r-633pao r-45ll9u r-u8s1d r-1v2oles r-176fswd"
//                                                                     style="width: calc(100%-4px); height: calc(100%-4px); ">
//                                                                     <div class="css-175oi2r r-1pi2tsx r-13qz1uu"
//                                                                         style="background-color: rgba(0, 0, 0, 0); ">
//                                                                     </div>
//                                                                 </div>
//                                                                 <div class="css-175oi2r r-sdzlij r-1udh08x r-633pao r-45ll9u r-u8s1d r-1v2oles r-176fswd"
//                                                                     style="width: calc(100%-4px); height: calc(100%-4px); ">
//                                                                     <div
//                                                                         class="css-175oi2r r-1pi2tsx r-13qz1uu r-kemksi">
//                                                                     </div>
//                                                                 </div>
//                                                                 <div class="css-175oi2r r-sdzlij r-1udh08x r-633pao r-45ll9u r-u8s1d r-1v2oles r-176fswd"
//                                                                     style="background-color: rgb(0, 0, 0); width: calc(100%-4px); height: calc(100%-4px); ">
//                                                                     <div class="css-175oi2r r-1adg3ll r-1udh08x"
//                                                                         >
//                                                                         <div class="r-1adg3ll r-13qz1uu"
//                                                                             style="padding-bottom: 100%; "></div>
//                                                                         <div
//                                                                             class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu">
//                                                                             <div
//                                                                                 class="css-175oi2r r-1mlwlqe r-1udh08x r-417010 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af">
//                                                                                 <div class="css-175oi2r r-1niwhzg r-vvn4in r-u6sd8q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw r-4gszlv"
//                                                                                     style="background-image: url(& quot; https://pbs.twimg.com/profile_images/1259563668049625088/bvLSbG0T_normal.jpg&quot;);">
//                                                                                 </div><img alt="" draggable="true"
//                                                                                     src="https://pbs.twimg.com/profile_images/1259563668049625088/bvLSbG0T_normal.jpg"
//                                                                                     class="css-9pa8cd">
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div class="css-175oi2r r-sdzlij r-1udh08x r-45ll9u r-u8s1d r-1v2oles r-176fswd"
//                                                                     style="width: calc(100%-4px); height: calc(100%-4px);">
//                                                                     <div
//                                                                         class="css-175oi2r r-172uzmj r-1pi2tsx r-13qz1uu r-o7ynqc r-6416eg r-1ny4l3l">
//                                                                     </div>
//                                                                 </div>
//                                                             </a></div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="css-175oi2r r-1iusvr4 r-16y2uox r-1777fci r-kzbkwu">
//                             <div class="css-175oi2r r-zl2h9q">
//                                 <div class="css-175oi2r r-k4xj1c r-18u37iz r-1wtj0ep">
//                                     <div class="css-175oi2r r-1d09ksm r-18u37iz r-1wbh5a2">
//                                         <div class="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l">
//                                             <div class="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1awozwy r-18u37iz"
//                                                 id="id__ru56oqy9dp" data-testid="User-Name">
//                                                 <div class="css-175oi2r r-1awozwy r-18u37iz r-1wbh5a2 r-dnmrzs">
//                                                     <div class="css-175oi2r r-1wbh5a2 r-dnmrzs"><a href="/RemoteOK"
//                                                             role="link"
//                                                             class="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21">
//                                                             <div
//                                                                 class="css-175oi2r r-1awozwy r-18u37iz r-1wbh5a2 r-dnmrzs">
//                                                                 <div dir="ltr"
//                                                                     class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-1udh08x r-3s2u2q"
//                                                                     style="text-overflow: unset; color: rgb(231, 233, 234);">
//                                                                     <span
//                                                                         class="css-1jxf684 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
//                                                                         style="text-overflow: unset;"><span
//                                                                             class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
//                                                                             style="text-overflow: unset;">Remote
//                                                                             Jobs</span></span></div>
//                                                                 <div dir="ltr"
//                                                                     class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-xoduu5 r-18u37iz r-1q142lx"
//                                                                     style="text-overflow: unset; color: rgb(231, 233, 234);">
//                                                                     <span
//                                                                         class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1awozwy r-xoduu5"
//                                                                         style="text-overflow: unset;"></span></div>
//                                                             </div>
//                                                         </a></div>
//                                                 </div>
//                                                 <div class="css-175oi2r r-18u37iz r-1wbh5a2 r-1ez5h0i">
//                                                     <div class="css-175oi2r r-1d09ksm r-18u37iz r-1wbh5a2">
//                                                         <div class="css-175oi2r r-1wbh5a2 r-dnmrzs"><a href="/RemoteOK"
//                                                                 role="link" tabindex="-1"
//                                                                 class="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21">
//                                                                 <div dir="ltr"
//                                                                     class="css-146c3p1 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-18u37iz r-1wvb978"
//                                                                     style="text-overflow: unset; color: rgb(113, 118, 123);">
//                                                                     <span
//                                                                         class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
//                                                                         style="text-overflow: unset;">@RemoteOK</span>
//                                                                 </div>
//                                                             </a></div>
//                                                         <div dir="ltr" aria-hidden="true"
//                                                             class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1q142lx r-n7gxbd"
//                                                             style="text-overflow: unset; color: rgb(113, 118, 123);">
//                                                             <span
//                                                                 class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
//                                                                 style="text-overflow: unset;">·</span></div>
//                                                         <div class="css-175oi2r r-18u37iz r-1q142lx"><a
//                                                                 href="/RemoteOK/status/1802748044770984128" dir="ltr"
//                                                                 aria-label="1 hour ago" role="link"
//                                                                 class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-xoduu5 r-1q142lx r-1w6e6rj r-9aw3ui r-3s2u2q r-1loqt21"
//                                                                 style="text-overflow: unset; color: rgb(113, 118, 123);"><time
//                                                                     datetime="2024-06-17T17:00:01.000Z">1h</time></a>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="css-175oi2r r-1kkk96v">
//                                         <div class="css-175oi2r r-1awozwy r-18u37iz r-1cmwbt1 r-1wtj0ep">
//                                             <div class="css-175oi2r r-1awozwy r-6koalj r-18u37iz">
//                                                 <div class="css-175oi2r">
//                                                     <div class="css-175oi2r r-18u37iz r-1h0z5md"><button
//                                                             aria-expanded="false" aria-haspopup="menu" aria-label="More"
//                                                             role="button"
//                                                             class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l"
//                                                             data-testid="caret" type="button">
//                                                             <div dir="ltr"
//                                                                 class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q"
//                                                                 style="text-overflow: unset; color: rgb(113, 118, 123);">
//                                                                 <div class="css-175oi2r r-xoduu5">
//                                                                     <div
//                                                                         class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l">
//                                                                     </div><svg viewBox="0 0 24 24" aria-hidden="true"
//                                                                         class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
//                                                                         <g>
//                                                                             <path
//                                                                                 d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
//                                                                             </path>
//                                                                         </g>
//                                                                     </svg>
//                                                                 </div>
//                                                             </div>
//                                                         </button></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="css-175oi2r">
//                                 <div dir="auto" lang="en"
//                                     class="css-146c3p1 r-8akbws r-krxsd3 r-dnmrzs r-1udh08x r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-bnwqim"
//                                     id="id__zgav8tj0nak" data-testid="tweetText"
//                                     style="-webkit-line-clamp: 10; text-overflow: unset; color: rgb(231, 233, 234);">
//                                     <img alt="✨" draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/2728.svg"
//                                         title="Sparkles"
//                                         class="r-4qtqp9 r-dflpy8 r-k4bwe5 r-1kpi4qh r-pp5qcn r-h9hxbl"><span
//                                         class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
//                                         style="text-overflow: unset;"> @https://x.com/LuxorTechnology is hiring a Remote
//                                         Growth Marketing Manager </span><span class="r-18u37iz"><a dir="ltr"
//                                             href="/hashtag/marketing?src=hashtag_click" role="link"
//                                             class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1loqt21"
//                                             style="text-overflow: unset; color: rgb(29, 155, 240);">#marketing</a></span><span
//                                         class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
//                                         style="text-overflow: unset;"> </span><span class="r-18u37iz"><a dir="ltr"
//                                             href="/hashtag/web3?src=hashtag_click" role="link"
//                                             class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1loqt21"
//                                             style="text-overflow: unset; color: rgb(29, 155, 240);">#web3</a></span><span
//                                         class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
//                                         style="text-overflow: unset;"> </span><span class="r-18u37iz"><a dir="ltr"
//                                             href="/hashtag/bitcoin?src=hashtag_click" role="link"
//                                             class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-3s2u2q r-1loqt21"
//                                             style="text-overflow: unset; color: rgb(29, 155, 240);">#bitcoin<img alt=""
//                                                 draggable="false"
//                                                 src="https://abs.twimg.com/hashflags/Bitcoin_evergreen/Bitcoin_evergreen.png"
//                                                 class="r-4qtqp9 r-dflpy8 r-k4bwe5 r-pp5qcn r-h9hxbl r-3t4u6i"></a></span><span
//                                         class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
//                                         style="text-overflow: unset;"> </span><span class="r-18u37iz"><a dir="ltr"
//                                             href="/hashtag/remotework?src=hashtag_click" role="link"
//                                             class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1loqt21"
//                                             style="text-overflow: unset; color: rgb(29, 155, 240);">#remotework</a></span><span
//                                         class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
//                                         style="text-overflow: unset;"> </span><span class="r-18u37iz"><a dir="ltr"
//                                             href="/hashtag/remotejobs?src=hashtag_click" role="link"
//                                             class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1loqt21"
//                                             style="text-overflow: unset; color: rgb(29, 155, 240);">#remotejobs</a></span><span
//                                         class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
//                                         style="text-overflow: unset;"> </span><span class="r-18u37iz"><a dir="ltr"
//                                             href="/hashtag/wfh?src=hashtag_click" role="link"
//                                             class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1loqt21"
//                                             style="text-overflow: unset; color: rgb(29, 155, 240);">#wfh</a></span><span
//                                         class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
//                                         style="text-overflow: unset;"> </span><img alt="👇" draggable="false"
//                                         src="https://abs-0.twimg.com/emoji/v2/svg/1f447.svg"
//                                         title="Down pointing backhand index"
//                                         class="r-4qtqp9 r-dflpy8 r-k4bwe5 r-1kpi4qh r-pp5qcn r-h9hxbl"></div>
//                             </div>
//                             <div aria-labelledby="id__jjmt91qmlx id__wth4z3k10d8" class="css-175oi2r r-9aw3ui r-1s2bzr4"
//                                 id="id__sljmg4dgbbb">
//                                 <div aria-labelledby="id__hgjr37kgl4 id__fcalwzd18sb"
//                                     class="css-175oi2r r-1kqtdi0 r-1phboty r-rs99b7 r-1udh08x r-1867qdf r-o7ynqc r-6416eg r-1ny4l3l"
//                                     id="id__wth4z3k10d8" data-testid="card.wrapper">
//                                     <div class="css-175oi2r r-1adg3ll r-2dkq44 r-1emcu8v" id="id__hgjr37kgl4"
//                                         data-testid="card.layoutLarge.media"><a href="https://t.co/OdTLJqQOnq"
//                                             rel="noopener noreferrer nofollow" target="_blank"
//                                             aria-label="remoteok.com Remote Growth Marketing Manager (💰~$65k) at Luxor Technology Corporation"
//                                             role="link"
//                                             class="css-175oi2r r-1udh08x r-13qz1uu r-o7ynqc r-6416eg r-1ny4l3l r-1loqt21">
//                                             <div class="css-175oi2r r-1adg3ll r-1udh08x">
//                                                 <div class="r-1adg3ll r-13qz1uu" style="padding-bottom: 52.356%;"></div>
//                                                 <div class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu">
//                                                     <div class="css-175oi2r r-1mlwlqe r-1udh08x r-417010 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af"
//                                                         style="margin: 0px;">
//                                                         <div class="css-175oi2r r-1niwhzg r-vvn4in r-u6sd8q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw r-4gszlv"
//                                                             style="background-image: url(&quot;https://pbs.twimg.com/card_img/1802748048747147265/O6CllJZc?format=jpg&amp;name=small&quot;);">
//                                                         </div><img alt="" draggable="true"
//                                                             src="https://pbs.twimg.com/card_img/1802748048747147265/O6CllJZc?format=jpg&amp;name=small"
//                                                             class="css-9pa8cd">
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div class="css-175oi2r r-vznvhx r-rki7wi r-u8s1d r-14fd9ze">
//                                                 <div
//                                                     class="css-175oi2r r-1awozwy r-k200y r-z2wwpe r-z80fyv r-1777fci r-n7gxbd r-loe9s5 r-dnmrzs r-633pao">
//                                                     <div dir="ltr"
//                                                         class="css-146c3p1 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-qvutc0 r-37j5jr r-fdjqy7 r-n6v787 r-1cwl3u0 r-16dba41 r-lrvibr"
//                                                         style="color: rgb(255, 255, 255); text-overflow: ellipsis;">
//                                                         <span class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
//                                                             style="text-overflow: unset;">Remote Growth Marketing
//                                                             Manager (</span><img alt="💰" draggable="false"
//                                                             src="https://abs-0.twimg.com/emoji/v2/svg/1f4b0.svg"
//                                                             title="Money bag"
//                                                             class="r-4qtqp9 r-dflpy8 r-k4bwe5 r-1kpi4qh r-pp5qcn r-h9hxbl"><span
//                                                             class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
//                                                             style="text-overflow: unset;">~$65k) at Luxor Technology
//                                                             Corporation</span></div>
//                                                 </div>
//                                             </div>
//                                         </a></div>
//                                     <div class="css-175oi2r" id="id__fcalwzd18sb"></div>
//                                 </div><a href="https://t.co/OdTLJqQOnq" dir="ltr" rel="noopener noreferrer nofollow"
//                                     target="_blank" role="link"
//                                     class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-n6v787 r-1cwl3u0 r-16dba41 r-1loqt21"
//                                     style="text-overflow: unset; color: rgb(113, 118, 123);">From remoteok.com</a>
//                             </div>
//                             <div class="css-175oi2r">
//                                 <div class="css-175oi2r">
//                                     <div aria-label="3 replies, 1 repost, 3 likes, 259 views" role="group"
//                                         class="css-175oi2r r-1kbdv8c r-18u37iz r-1wtj0ep r-1ye8kvj r-1s2bzr4"
//                                         id="id__vps2lx7ewl">
//                                         <div class="css-175oi2r r-18u37iz r-1h0z5md r-13awgt0"><button
//                                                 aria-label="3 Replies. Reply" role="button"
//                                                 class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l"
//                                                 data-testid="reply" type="button">
//                                                 <div dir="ltr"
//                                                     class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q"
//                                                     style="text-overflow: unset; color: rgb(113, 118, 123);">
//                                                     <div class="css-175oi2r r-xoduu5">
//                                                         <div
//                                                             class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l">
//                                                         </div><svg viewBox="0 0 24 24" aria-hidden="true"
//                                                             class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
//                                                             <g>
//                                                                 <path
//                                                                     d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z">
//                                                                 </path>
//                                                             </g>
//                                                         </svg>
//                                                     </div>
//                                                     <div class="css-175oi2r r-xoduu5 r-1udh08x"><span
//                                                             data-testid="app-text-transition-container"
//                                                             style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span
//                                                                 class="css-1jxf684 r-1ttztb7 r-qvutc0 r-poiln3 r-n6v787 r-1cwl3u0 r-1k6nrdp r-n7gxbd"
//                                                                 style="text-overflow: unset;"><span
//                                                                     class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
//                                                                     style="text-overflow: unset;">3</span></span></span>
//                                                     </div>
//                                                 </div>
//                                             </button></div>
//                                         <div class="css-175oi2r r-18u37iz r-1h0z5md r-13awgt0"><button
//                                                 aria-expanded="false" aria-haspopup="menu" aria-label="1 repost. Repost"
//                                                 role="button"
//                                                 class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l"
//                                                 data-testid="retweet" type="button">
//                                                 <div dir="ltr"
//                                                     class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q"
//                                                     style="text-overflow: unset; color: rgb(113, 118, 123);">
//                                                     <div class="css-175oi2r r-xoduu5">
//                                                         <div
//                                                             class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l">
//                                                         </div><svg viewBox="0 0 24 24" aria-hidden="true"
//                                                             class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
//                                                             <g>
//                                                                 <path
//                                                                     d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z">
//                                                                 </path>
//                                                             </g>
//                                                         </svg>
//                                                     </div>
//                                                     <div class="css-175oi2r r-xoduu5 r-1udh08x"><span
//                                                             data-testid="app-text-transition-container"
//                                                             style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span
//                                                                 class="css-1jxf684 r-1ttztb7 r-qvutc0 r-poiln3 r-n6v787 r-1cwl3u0 r-1k6nrdp r-n7gxbd"
//                                                                 style="text-overflow: unset;"><span
//                                                                     class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
//                                                                     style="text-overflow: unset;">1</span></span></span>
//                                                     </div>
//                                                 </div>
//                                             </button></div>
//                                         <div class="css-175oi2r r-18u37iz r-1h0z5md r-13awgt0"><button
//                                                 aria-label="3 Likes. Like" role="button"
//                                                 class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l"
//                                                 data-testid="like" type="button">
//                                                 <div dir="ltr"
//                                                     class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q"
//                                                     style="text-overflow: unset; color: rgb(113, 118, 123);">
//                                                     <div class="css-175oi2r r-xoduu5">
//                                                         <div
//                                                             class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l">
//                                                         </div><svg viewBox="0 0 24 24" aria-hidden="true"
//                                                             class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
//                                                             <g>
//                                                                 <path
//                                                                     d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z">
//                                                                 </path>
//                                                             </g>
//                                                         </svg>
//                                                     </div>
//                                                     <div class="css-175oi2r r-xoduu5 r-1udh08x"><span
//                                                             data-testid="app-text-transition-container"
//                                                             style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span
//                                                                 class="css-1jxf684 r-1ttztb7 r-qvutc0 r-poiln3 r-n6v787 r-1cwl3u0 r-1k6nrdp r-n7gxbd"
//                                                                 style="text-overflow: unset;"><span
//                                                                     class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
//                                                                     style="text-overflow: unset;">3</span></span></span>
//                                                     </div>
//                                                 </div>
//                                             </button></div>
//                                         <div class="css-175oi2r r-18u37iz r-1h0z5md r-13awgt0"><a
//                                                 href="/RemoteOK/status/1802748044770984128/analytics"
//                                                 aria-label="259 views. View post analytics" role="link"
//                                                 class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1ny4l3l r-1loqt21">
//                                                 <div dir="ltr"
//                                                     class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q"
//                                                     style="text-overflow: unset; color: rgb(113, 118, 123);">
//                                                     <div class="css-175oi2r r-xoduu5">
//                                                         <div
//                                                             class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l">
//                                                         </div><svg viewBox="0 0 24 24" aria-hidden="true"
//                                                             class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
//                                                             <g>
//                                                                 <path
//                                                                     d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z">
//                                                                 </path>
//                                                             </g>
//                                                         </svg>
//                                                     </div>
//                                                     <div class="css-175oi2r r-xoduu5 r-1udh08x"><span
//                                                             data-testid="app-text-transition-container"
//                                                             style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span
//                                                                 class="css-1jxf684 r-1ttztb7 r-qvutc0 r-poiln3 r-n6v787 r-1cwl3u0 r-1k6nrdp r-n7gxbd"
//                                                                 style="text-overflow: unset;"><span
//                                                                     class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
//                                                                     style="text-overflow: unset;">259</span></span></span>
//                                                     </div>
//                                                 </div>
//                                             </a></div>
//                                         <div class="css-175oi2r r-18u37iz r-1h0z5md r-1wron08"><button
//                                                 aria-label="Bookmark" role="button"
//                                                 class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l"
//                                                 data-testid="bookmark" type="button">
//                                                 <div dir="ltr"
//                                                     class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q"
//                                                     style="text-overflow: unset; color: rgb(113, 118, 123);">
//                                                     <div class="css-175oi2r r-xoduu5">
//                                                         <div
//                                                             class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l">
//                                                         </div><svg viewBox="0 0 24 24" aria-hidden="true"
//                                                             class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
//                                                             <g>
//                                                                 <path
//                                                                     d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z">
//                                                                 </path>
//                                                             </g>
//                                                         </svg>
//                                                     </div>
//                                                 </div>
//                                             </button></div>
//                                         <div class="css-175oi2r"
//                                             style="justify-content: inherit; display: inline-grid; transform: rotate(0deg) scale(1) translate3d(0px, 0px, 0px);">
//                                             <div class="css-175oi2r r-18u37iz r-1h0z5md"><button aria-expanded="false"
//                                                     aria-haspopup="menu" aria-label="Share post" role="button"
//                                                     class="css-175oi2r r-1777fci r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 r-1ny4l3l"
//                                                     type="button">
//                                                     <div dir="ltr"
//                                                         class="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-1h0z5md r-o7ynqc r-clp7b1 r-3s2u2q"
//                                                         style="text-overflow: unset; color: rgb(113, 118, 123);">
//                                                         <div class="css-175oi2r r-xoduu5">
//                                                             <div
//                                                                 class="css-175oi2r r-xoduu5 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg r-1ny4l3l">
//                                                             </div><svg viewBox="0 0 24 24" aria-hidden="true"
//                                                                 class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi">
//                                                                 <g>
//                                                                     <path
//                                                                         d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z">
//                                                                     </path>
//                                                                 </g>
//                                                             </svg>
//                                                         </div>
//                                                     </div>
//                                                 </button></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </article>
//     </div>
// </div>`;
                        
                        // parentDiv.childNodes[i] = newChild;

                        // let replacedChild = parentDiv.childNodes[i];
                        // replacedChild.style.display = 'none';
                        // parentDiv.replaceChild(newChild, replacedChild);
                        // parentDiv.removeChild(parentDiv.childNodes[i]);

                        // parentDiv.childNodes[i] = newChild;
                    }
                }


            // }, 2000);
        }, interval);
    }
    else {
        console.log("NO");
    }
});


function isElementOutOfViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= (window.innerHeight || document.documentElement.clientHeight) ||
        rect.left >= (window.innerWidth || document.documentElement.clientWidth) ||
        rect.bottom <= 0 ||
        rect.right <= 0
    );
}