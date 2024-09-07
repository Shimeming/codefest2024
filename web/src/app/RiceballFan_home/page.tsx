'use client';
import {useState ,useEffect} from "react";
import { GetUserFromApp, GotUserInfo, GotUserLaunchMap, GotUserLoc , GotUserDevice,status_print} from "./bridge";

// function sendMessageToFlutter(message: string) {
//   if (typeof window.flutterObject !== "undefined" && window.flutterObject) {
//     window.flutterObject.postMessage(message);
//   } else {
//     console.log("flutterObject 不存在，無法傳送訊息。");
//   }
// }

// 調用函數
// sendMessageToFlutter("Hello from web!");

// const Page = () => {
//     console.log("Waiting for flutterObject load...",2000);
//     setTimeout(()=>{},2000);
//     GetUserFromApp();
//     return (
//         <div>
//             {/* <h1>User   Info</h1> */}
//             {/* print GotUserInfo... on page */}
//             <p>{GotUserInfo}</p>
//             {/* <h1>Device Info</h1> */}
//             {/* print GotUserLaunchMap... on page */}
//             {/* <p>{GotUserDevice}</p> */}

//             {/* <h1>User Location with lon and lat</h1> */}
//             {/* print GotUserLoc... on page */}
//             <p>{GotUserLoc}</p>

//             {/* <p>{status_print}</p> */}

//         </div>
//     );
// }
// {/* <script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"></script>
// <script>
//   // 初始化 vConsole
//   var vConsole = new VConsole();
//   console.log('Hello vConsole');
// </script> */}
const Page = () => {
  const [userInfo, setUserInfo] = useState<string>("null");
  const [userLoc, setUserLoc] = useState<string>("null");

  useEffect(() => {
    GetUserFromApp();
    const interval = setInterval(() => {
      // 持續監測變數變化
      setUserInfo(GotUserInfo);
      setUserLoc(GotUserLoc);
    }, 1000); // 每秒檢查一次狀態更新

    return () => clearInterval(interval); // 清除計時器
  }, [GotUserInfo, GotUserLoc]);

  return (
    <div>
      <p>{userInfo}</p>
      <p>{userLoc}</p>
    </div>
  );
};


export default Page;


