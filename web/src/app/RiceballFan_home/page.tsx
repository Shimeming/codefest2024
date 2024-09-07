'use client';
import { useState, useEffect } from "react";


const Page = () => {
    const [userInfo, setUserInfo] = useState<string>("null");
    const [userLoc, setUserLoc] = useState<string>("null");
    const [state, setState] = useState<string>("null");
    // const [userLoc2, setUserLoc2] = useState<string>("null");
    // Update_auto();
    // non_blocking().then(()=>{});
    useEffect(() => {
      // 呼叫 GetUserFromApp() 來觸發更新
      GetUserFromApp();
      console.log(userInfo);
      setTimeout(() => {
        console.log("In Timeout");
        if(state === "ok"){
          console.log("OK");
        }
      console.log("userInfo: ",userInfo);
      console.log("userLoc: ",userLoc);
    },5000);

    // 設置一個 interval 來檢查 GotUserInfo 和 GotUserLoc 的變化
    const interval = setInterval(() => {
      if (GotUserInfo !== userInfo) {
        setUserInfo(GotUserInfo);
        // dumpMsg();
        // setUserLoc2(GotUserInfo);
      }
      if (GotUserLoc !== userLoc) {
        setUserLoc(GotUserLoc);
        // dumpMsg();
        // setUserLoc2(GotUserLoc);
      }
      if(userInfo !== "null" && userLoc !== "null"){
        setState("ok");
      }
      GotUserInfo = userInfo;
      GotUserLoc = userLoc;
      console.log("GotUserInfo: ");
      console.log(GotUserInfo);
      console.log("GotUserLoc: ");
      console.log(GotUserLoc);
    }, 500); // 每0.1秒檢查一次變化
    
    // 清除計時器
    return () => clearInterval(interval);
  },[userInfo, userLoc]);// [userInfo, userLoc]);

      useEffect(() => {
      if(userInfo !== "null" || userLoc !== "null"){
        console.log("userInfo: ", userInfo);
        console.log("userLoc: ", userLoc);
      }
      if (userInfo !== "null" && userLoc !== "null") {
        setState("ok");
      }
      }, [userInfo, userLoc]);
  // 確保每次渲染時都會輸出 console.log
  // useEffect(() => {
    // dumpMsg();
  // }, [userInfo, userLoc]);
  return (
    <div>
      <p>{userInfo}</p>
      <p>{userLoc}</p>
      {/* <p>{GotUserInfo}</p>
      <p>{GotUserLoc}</p> */}
      {/* <p>{userLoc2}</p> */}
    </div>
  ) 
};

const dumpMsg = () => {
  console.log("GotUserInfo: ");
  console.log(GotUserInfo);
  console.log("GotUserLoc: ");
  console.log(GotUserLoc);
};



const messageListener = (event: MessageEvent) => {
  if(flutterObject!== "undefined") {
    let temp_str : string = event.data;
    console.log("temp_str: ",temp_str);
    // transfer into json and get the data
    let temp_json = JSON.parse(temp_str);
    if(temp_json.name === "userinfo"){
      GotUserInfo = temp_str;
      console.log("[DEBUG] GotUserInfo: ");
    }
    else if(temp_json.name === "location"){
      GotUserLoc = temp_str;
      console.log("[DEBUG] GotUserLoc: ");
    }
    else if(temp_json.name === "deviceinfo"){
      GotUserDevice = temp_str;
    }
    else{
      console.log("error");
    }
  }
}
let getUserInfoCommand : string = '{  "name": "userinfo", "data": null }';
let getUserLocCommand  : string = '{  "name": "location", "data": null }';
let getUserLaunchMap   : string = '{  "name": "launch_map","data": "https://maps.app.goo.gl/sQKx4n3WctXuS5Bw8"}';
let getUserDevInfoCommand: string = '{  "name" : "deviceinfo", "data": null}'
// export let GotUserInfo : string = '{"name": "userinfo","data": {  "id": "7f3562f4-bb3f-4ec7-89b9-da3b4b5ff250",  "account": "wz7786",  "username": "Wesley",  "realName": "金大森",  "idNo": "A123456789",  "email": "ist83903@bcaoo.com",  "phoneNo": "0932166777",  "birthday": "1988/12/12",  "memberType": "personal",  "verifyLevel": "3",  "addresses": [    {      "zip3": 104,      "city": "臺北市",      "town": "中山區",      "village": "正得里",      "street": "吉林路",      "usageType": "0",      "seq": 1,      "priority": true    }  ],  "residentAddress": "臺北市中山區吉林路 69 號 4 樓",    "citizen": true,"nativePeople": false,"cityInternetUid": ""}}';
export let GotUserInfo  : string = "null";
export let GotUserLoc  : string = "null";
export let GotUserLaunchMap : string = "null";
// export const [userInfo, setUserInfo] = useState<string>("null");
export let GotUserDevice : string = "null";
export function GetUserFromApp(){
  // flutterObject = window.flutterObject;
  // flutterObject 已存在，可以執行操作
  if (typeof flutterObject !== "undefined" && flutterObject) {
    GotUserLoc = "FlutterObject exists";
    flutterObject.addEventListener("message",messageListener);
    flutterObject.postMessage(getUserInfoCommand);
    // flutterObject.postMessage(getUserLaunchMap);
    flutterObject.postMessage(getUserDevInfoCommand);
    // flutterObject.postMessage(getUserDevInfoCommand);
    flutterObject.postMessage(getUserLocCommand);
  } else {
      // console.log("flutterObject 不存在，無法執行操作。");
      // GotUserLoc = "error-no-flutterObject QuQ lalala QQQ trying next time";
      return;
    }
    
    
    return; 
  }
  
  export default Page;
  
  
  
  // import { GetUserFromApp, GotUserInfo, GotUserLoc} from "./bridge";
  // import {infoState,locState} from "./bridge";
  // import { set } from "vue";
  // async function Update_auto (){
  //   for(let i = 0; i < 15; i++){
  //       dumpMsg();
  //       await delay(1000);
  //     }
  // } 
  // function delay(ms: number) {
  //     return new Promise( resolve => setTimeout(resolve, ms) );
  // }
  // 'use client';
  // import {useState ,useEffect} from "react";
  // import { GetUserFromApp, GotUserInfo, GotUserLoc , GotUserDevice,status_print} from "./bridge";
  // // import mqtt , { MqttClient } from 'mqtt';
  // const Page = () => {
    //   console.log("Hiiiiiiiiiiiiiiii");

//   const [userInfo, setUserInfo] = useState<string>("null");
//   const [userLoc, setUserLoc] = useState<string>("null");

//     useEffect(() => {
  //       const interval = setInterval(() => {
    //           // 持續監測變數變化
    //         // console.log("Interval check: GotUserInfo: ");
    //         // console.log("Interval check: GotUserLoc: ");
    //           setUserInfo(GotUserInfo);
    //           setUserLoc(GotUserLoc);
    //         }, 100); // 每0.1秒檢查一次狀態更新
    
    //         return () => clearInterval(interval); // 清除計時器
    //     }, []); // 只在 userInfo 或 userLoc 改變時執行
    //     // useEffect(() => {
//     //         GetUserFromApp();
//     //     }, []);
//     // // 檢查狀態變化
//     // useEffect(() => {
//     //     console.log("userInfo updated: ", userInfo);
//     // }, [userInfo]); // 只在 userInfo 改變時執行

//     // useEffect(() => {
//     //     console.log("userLoc updated: ", userLoc);
//     // }, [userLoc]); // 只在 userLoc 改變時執行

//     // // 檢查 status_print 和其他變量
//     // useEffect(() => {
//     //     console.log("status_print: ", status_print);
//     //     console.log("GotUserInfo: ", GotUserInfo);
//     //     console.log("GotUserLoc: ", GotUserLoc);
//     // }, []); // 只在第一次渲染時執行
// //   GetLocByuseEffect();
// //   GetUserInfoByuseEffect();
//   return (
//     <div>
//       <p>{userInfo}</p>
//       <p>{userLoc}</p>
//     </div>

//     //null -> {~~~}
//   );
// };

// export default Page;


