// 

import { info } from "console";
import { resolve } from "path";
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
export let GotUserInfo : string;
export let GotUserLoc  : string;
export let GotUserLaunchMap : string;
export function GetUserFromApp(){
  if(flutterObject === "undefined"){
    console.log("error");
    return;
  }
  flutterObject.addEventListener("message",messageListener);
  flutterObject.postMessage(getUserInfoCommand);
  flutterObject.postMessage(getUserLaunchMap);
  flutterObject.postMessage(getUserLocCommand);
  while(info_state !== true || loc_state !== true || map_state !== true){
    //wait for ok
    console.log("wait for ok",10);
  }
  return; 
}
        
        // flutterObject.postMessage(getUserInfoCommand);
  //       fetchUserData(getUserInfoCommand).then((data) => { GotUserInfo = data;} );
  //       fetchUserData(getUserLaunchMap).then((data) => { GotUserLaunchMap = data;} );
  // fetchUserData(getUserLocCommand).then((data) => { GotUserLoc = data;} );
