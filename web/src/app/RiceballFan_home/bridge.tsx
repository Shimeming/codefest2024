// 

import { info } from "console";
import { resolve } from "path";
declare let flutterObject: any;

// let before_string 
// 定義接收資料並處理的邏輯
// const flutterObject = window.flutterObject;
// export async function fetchUserData(command_str: string) : Promise<string> {
//   return new Promise(
//     (resolve,reject)=>{  
//       flutterObject.postMessage(command_str); // 通知 RiceballFan_home.tsx 開始載入資料
//     }
//   )
//   //Using Callback function to get message in flutterObject.data  
// }
// using 

let info_state : boolean = false;
let loc_state : boolean = false;
let map_state : boolean   = false;

const messageListener = (event: MessageEvent) => {
  if(flutterObject!== "undefined") {
    let temp_str : string = event.data;
    console.log("temp_str: ",temp_str);
    // transfer into json and get the data
    let temp_json = JSON.parse(temp_str);
    if(temp_json.name === "userinfo"){
      GotUserInfo = temp_str;
      info_state = true;
    }
    else if(temp_json.name === "location"){
      GotUserLoc = temp_str;
      loc_state = true;
    }
    else if(temp_json.name === "launch_map"){
      GotUserLaunchMap = temp_str;
      map_state = true;
    }
    else{
      console.log("error");
    }
  }
}
let getUserInfoCommand : string = '{  "name": "userinfo", "data": null }';
let getUserLocCommand  : string = '{  "name": "location", "data": null }';
let getUserLaunchMap   : string = '{ "name": "launch_map","data": "https://maps.app.goo.gl/sQKx4n3WctXuS5Bw8"}';
export let GotUserInfo : string = "null";
export let GotUserLoc  : string = "null";
export let GotUserLaunchMap : string = "null";
export function GetUserFromApp(){
  // flutterObject 已存在，可以執行操作
  if (typeof flutterObject !== "undefined" && flutterObject) {
  } else {
    console.log("flutterObject 不存在，無法執行操作。");
  }

  if(typeof (flutterObject )=== "undefined"){
    console.log("error,exit");
    return;
  }
  flutterObject.addEventListener("message",messageListener);
  flutterObject.postMessage(getUserInfoCommand);
  flutterObject.postMessage(getUserLaunchMap);
  flutterObject.postMessage(getUserLocCommand);
  if(info_state !== true || loc_state !== true || map_state !== true){
    //wait for ok
    console.log("wait for ok",1000);

  }
  return; 
}
        
        // flutterObject.postMessage(getUserInfoCommand);
  //       fetchUserData(getUserInfoCommand).then((data) => { GotUserInfo = data;} );
  //       fetchUserData(getUserLaunchMap).then((data) => { GotUserLaunchMap = data;} );
  // fetchUserData(getUserLocCommand).then((data) => { GotUserLoc = data;} );
