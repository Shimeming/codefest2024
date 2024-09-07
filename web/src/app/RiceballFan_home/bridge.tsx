// 

import { resolve } from "path";
// let before_string 
// 定義接收資料並處理的邏輯
// const flutterObject = window.flutterObject;
export async function fetchUserData(command_str: string) : Promise<string> {
  return new Promise(
    (resolve,reject)=>{
      const messageListener = (event: MessageEvent) => {
        if(flutterObject !== "undefined" && event.data) {
          console.log("event.data",event.data);
          resolve(event.data);
          flutterObject.removeEventListener("message",messageListener);
          // }
        }
        else{
          reject("error");
          flutterObject.removeEventListener("message",messageListener);
        }
      flutterObject.addEventListener("message",messageListener);
      flutterObject.postMessage(command_str); // 通知 RiceballFan_home.tsx 開始載入資料
    }
  }
  )
  //Using Callback function to get message in flutterObject.data

}



// lib/util/web_message_handler/cp_web_message_handler.dart
let getUserInfoCommand : string = '{  "name": "userinfo", "data": null }';
let getUserLocCommand  : string = '{  "name": "location", "data": null }';
let getUserLaunchMap   : string = '{ "name": "launch_map","data": "https://maps.app.goo.gl/sQKx4n3WctXuS5Bw8"}';
export let GotUserInfo : string;
export let GotUserLoc  : string;
export let GotUserLaunchMap : string;
// 當網頁加載時自動觸發
export function GetUserFromApp():void{ {
  // fetchUserData(getUserInfoCommand);
  // addEventListener("getUserInfo",function GetUserInfos(){
  //   fetchUserData(getUserInfoCommand).then((data) => { GotUserInfo = data;} );
  //   fetchUserData(getUserLaunchMap).then((data) => { GotUserLaunchMap = data;} );
  //   fetchUserData(getUserLocCommand).then((data) => { GotUserLoc = data;} );
  // },true);
};
};
export function GetUserInfos(){
  fetchUserData(getUserInfoCommand).then((data) => { GotUserInfo = data;} );
  fetchUserData(getUserLaunchMap).then((data) => { GotUserLaunchMap = data;} );
  fetchUserData(getUserLocCommand).then((data) => { GotUserLoc = data;} );
}
