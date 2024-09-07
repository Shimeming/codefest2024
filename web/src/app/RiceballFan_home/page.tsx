'use client';
import {useState ,useEffect} from "react";
import { GetUserFromApp, GotUserInfo, GotUserLoc , GotUserDevice,status_print} from "./bridge";
// import mqtt , { MqttClient } from 'mqtt';
const Page = () => {
    

  const [userInfo, setUserInfo] = useState<string>("null");
  const [userLoc, setUserLoc] = useState<string>("null");
  
    useEffect(() => {
      const interval = setInterval(() => {
          // 持續監測變數變化
        console.log("Interval check: GotUserInfo: ");
        console.log("Interval check: GotUserLoc: ");
          setUserInfo(GotUserInfo);
          setUserLoc(GotUserLoc);
        }, 1000); // 每0.1秒檢查一次狀態更新
        return () => clearInterval(interval); // 清除計時器
    }, []);
    useEffect(() => {
            GetUserFromApp();
        }, []);
    // 檢查狀態變化
    useEffect(() => {
        console.log("userInfo updated: ", userInfo);
    }, [userInfo]); // 只在 userInfo 改變時執行

    useEffect(() => {
        console.log("userLoc updated: ", userLoc);
    }, [userLoc]); // 只在 userLoc 改變時執行

    // 檢查 status_print 和其他變量
    useEffect(() => {
        console.log("status_print: ", status_print);
        console.log("GotUserInfo: ", GotUserInfo);
        console.log("GotUserLoc: ", GotUserLoc);
    }, []); // 只在第一次渲染時執行
//   GetLocByuseEffect();
//   GetUserInfoByuseEffect();
  return (
    <div>
      <p>{userInfo}</p>
      <p>{userLoc}</p>
    </div>
  );
};

export default Page;


