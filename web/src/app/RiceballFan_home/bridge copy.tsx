export let info_state : boolean = false;
export let loc_state : boolean = false;
export let device_state : boolean   = false;
export let status_print : string = "null";

const messageListener = (event: MessageEvent) => {
  if(flutterObject !== "undefined") {
    status_print = "flutterObject exists";
    let temp_str : string = event.data;
    console.log("temp_str: ",temp_str);
    let temp_json = JSON.parse(temp_str);
    if(temp_json.name === "userinfo"){
      GotUserInfo = temp_str;
      info_state = true;
      console.log("[DEBUG] GotUserInfo: ");
    }
    else if(temp_json.name === "location"){
      GotUserLoc = temp_str;
      loc_state = true;
      console.log("[DEBUG] GotUserLoc: ");
    }
    else if(temp_json.name === "deviceinfo"){
      GotUserDevice = temp_str;
      device_state = true;
    // }else if (temp_json.name === "phone_number"){
    }
    else{
      console.log("error");
    }
  }
  console.log("info_state: ",info_state);
  console.log("loc_state: ",loc_state);
  console.log("device_state: ",device_state);
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
    // if(typeof flutterObject=== "undefined"){
      //   console.log("error,exit");
      //   return;
      // }
      flutterObject.addEventListener("message",messageListener);
      flutterObject.postMessage(getUserInfoCommand);
      // flutterObject.postMessage(getUserLaunchMap);
      flutterObject.postMessage(getUserDevInfoCommand);
      // flutterObject.postMessage(getUserDevInfoCommand);
      flutterObject.postMessage(getUserLocCommand);
      
      
      // console.log("wait for ok",1000);
      // if(info_state !== true || loc_state !== true || device_state !== true){
      //   //wait for ok
      //   console.log("wait for ok",3000);
      // }
    } else {
      
      // console.log("flutterObject 不存在，無法執行操作。");
      // GotUserLoc = "error-no-flutterObject QuQ lalala QQQ trying next time";
      return;
    }
    
    
    return; 
  }
  
  // GetUserInfoByuseEffect();
  // GetLocByuseEffect();



        
        // flutterObject.postMessage(getUserInfoCommand);
  //       fetchUserData(getUserInfoCommand).then((data) => { GotUserInfo = data;} );
  //       fetchUserData(getUserLaunchMap).then((data) => { GotUserLaunchMap = data;} );
  // fetchUserData(getUserLocCommand).then((data) => { GotUserLoc = data;} );
