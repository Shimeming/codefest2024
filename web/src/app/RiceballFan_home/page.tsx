'use client';
import { useState, useEffect } from "react";
class UserInfoLocArray{
  
  userName : string;
  userId : string;
  userLon : number;
  userLat : number;
  useridNo : string;
  usertown : string;
  usercity : string;

  constructor(userName : string, userId : string, userLon : number, userLat : number, useridNo : string, usertown : string, usercity : string){
    this.userName = userName;
    this.userId = userId;
    this.userLon = userLon;
    this.userLat = userLat;
    this.useridNo = useridNo;
    this.usertown = usertown;
    this.usercity = usercity;
  }
  toString():string {
    return `{"userName": ${this.userName}, "userId": ${this.userId}, "userLon": ${this.userLon}, "userLat": ${this.userLat}, "useridNo": ${this.useridNo}, "usertown": ${this.usertown}, "usercity": ${this.usercity}}`;
  }
}
let Function_Test : string = "null";
let UserArrInfo : UserInfoLocArray = new UserInfoLocArray("null","null",0,0,"null","null","null");
const Page = () => {
  const [userInfo, setUserInfo] = useState<string>("null");
  const [userLoc, setUserLoc] = useState<string>("null");
  const [state, setState] = useState<string>("null");
  const [functionTest, setFunctionTest] = useState<string>("null");
  // getClientInfo().then(result => {
  //   Function_Test = result;
  // });
  GetUserInfoArr().then(result => {
    UserArrInfo = result;
  });
  Function_Test = UserArrInfo.toString();
  // GetUserFromApp();
  useEffect(() => {
    // 設置一個 interval 來檢查 GotUserInfo 和 GotUserLoc 的變化
    const interval = setInterval(() => {
      if (GotUserInfo !== userInfo) {
        setUserInfo(GotUserInfo);
      }
      if (GotUserLoc !== userLoc) {
        setUserLoc(GotUserLoc);
      }
      if(userInfo !== "null" && userLoc !== "null"){
        // 關閉監聽
        //Jenny Hu add code at here
        
        
        
        // code end
        flutterObject.removeEventListener("message",messageListener);
        
      }
      if(Function_Test !== "null"){
        setFunctionTest(Function_Test);
        setState("ok");
      }

    }, 500); // 每0.1秒檢查一次變化
    // 清除計時器
    
    return () => clearInterval(interval);
  },[userInfo, userLoc,functionTest]);// [userInfo, userLoc]);
  //HTML blick
  return (
    <div>
    
    
    
    
    
      <p>{userInfo}</p>
      <p>{userLoc}</p>
      <p>{functionTest}</p>
      <p>{state}</p>
    
    
    
    
    </div>
  ) 
};

const dumpMsg = () => {
  console.log("GotUserInfo: ");
  console.log(GotUserInfo);
  console.log("GotUserLoc: ");
  console.log(GotUserLoc);
};
async function getClientInfo(): Promise<string> {
  GetUserFromApp();
  return new Promise((resolve) => {
    let outstring: string = "null";
    const [userInfo, setUserInfo] = useState<string>("null");
    const [userLoc, setUserLoc] = useState<string>("null");

    useEffect(() => {
      const interval = setInterval(() => {
        if (GotUserInfo !== userInfo) {
          setUserInfo(GotUserInfo);
        }
        if (GotUserLoc !== userLoc) {
          setUserLoc(GotUserLoc);
        }
        if (GotUserInfo !== "null" && GotUserLoc !== "null") {
          // 當 GotUserInfo 和 GotUserLoc 都更新時，組合出 outstring 並 resolve Promise
          outstring = `{"info": ${GotUserInfo}, "loc": ${GotUserLoc}}`;
          clearInterval(interval); // 停止 interval
          resolve(outstring); // 回傳 outstring，結束 Promise
        }
      }, 500); // 每 0.5 秒檢查一次變化

      // 清除計時器
      return () => clearInterval(interval);
    }, [userInfo, userLoc]); // 根據 userInfo 和 userLoc 的變化重新執行

  });
}


async function GetUserInfoArr():Promise<UserInfoLocArray> {
  GetUserFromApp();
  return new Promise((resolve) => {
    let outstring: string = "null";
    const [userLoc, setUserLoc] = useState<string>("null");
    const [userInfo, setUserInfo] = useState<string>("null");
    useEffect(() => {
      const interval = setInterval(() => {
        if (GotUserLoc !== userLoc) {
          setUserLoc(GotUserLoc);
        }
        if (GotUserInfo !== userInfo) {
          setUserInfo(GotUserInfo);
        }
        if (GotUserLoc !== "null" && GotUserInfo !== "null") {
          // outstring = GotUserLoc;
          // get json type data to deconstruct
          let temp_json = JSON.parse(GotUserInfo);
          let temp_json2 = JSON.parse(GotUserLoc);
          let output = new UserInfoLocArray(temp_json.data.username,temp_json.data.id,temp_json2.data.longitude,temp_json2.data.latitude,temp_json.data.idNo,temp_json2.data.town,temp_json2.data.city);
          resolve(output);
          clearInterval(interval);
          // resolve(outstring);
        }
      }, 500);
      return () => clearInterval(interval);
    }, [userLoc]);
  });
}



// async function getClientInfo(): Promise<string> {
//   // GetUserFromApp();
//   let outstring : string = "null";
//   const [userInfo, setUserInfo] = useState<string>("null");
//   const [userLoc, setUserLoc] = useState<string>("null");
//   useEffect(() => {
//     // 設置一個 interval 來檢查 GotUserInfo 和 GotUserLoc 的變化
//     const interval = setInterval(() => {
//       if (GotUserInfo !== userInfo) {
//         setUserInfo(GotUserInfo);
//       }
//       if (GotUserLoc !== userLoc) {
//         setUserLoc(GotUserLoc);
//       }
//       if (GotUserInfo !== "null" && GotUserLoc !== "null") {
//         // flutterObject.removeEventListener("message",messageListener);
//         outstring = "{" + GotUserInfo + "," + GotUserLoc + "}";
//       }
        

//     }, 500); // 每0.1秒檢查一次變化
//     // 清除計時器
    
//     return () => clearInterval(interval);
//   },[userInfo, userLoc]);// [userInfo, userLoc]);

//   return outstring ; // Add a return statement at the end of the function
// }


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
    // GotUserLoc = "FlutterObject exists";
      flutterObject.addEventListener("message",messageListener);
      flutterObject.postMessage(getUserInfoCommand);
      // flutterObject.postMessage(getUserLaunchMap);
      // flutterObject.postMessage(getUserDevInfoCommand);
      // flutterObject.postMessage(getUserDevInfoCommand);
      flutterObject.postMessage(getUserLocCommand);
    } else {
      console.log("flutterObject 不存在，無法執行操作。");
      GotUserLoc = "error-no-flutterObject QuQ lalala QQQ trying next time";
      return;
    }
    
    
    return; 
  }
  
export default Page;
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


