
import {GetUserFromApp,GotUserInfo , GotUserLaunchMap ,GotUserLoc} from "./bridge";

// function sendMessageToFlutter(message: string) {
//   if (typeof window.flutterObject !== "undefined" && window.flutterObject) {
//     window.flutterObject.postMessage(message);
//   } else {
//     console.log("flutterObject 不存在，無法傳送訊息。");
//   }
// }

// 調用函數
// sendMessageToFlutter("Hello from web!");

const Page =() => {
    GetUserFromApp();
    return (
        <div>
            <h1>Test Page</h1>
            {/* print GotUserInfo... on page */}
            <p>{GotUserInfo}</p>
            {/* print GotUserLaunchMap... on page */}
            <p>{GotUserLaunchMap}</p>
            {/* print GotUserLoc... on page */}
            <p>{GotUserLoc}</p>


        </div>
    );
}

export default Page;


