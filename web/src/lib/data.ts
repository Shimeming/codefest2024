import { sql } from "@vercel/postgres";
import { UserInfo } from "./definition";

type RawUserInfo = {
  id: string;
  name: string;
  sex: number;
  age: number;
  image1: string;
  image2: string;
  image3: string;
  motto: string;

  city: string;
  town: string;

  distance: number;
};

const formatSex = (sex: number) => {
  if (sex == 1) return '男';
  if (sex == 2) return '女';
  return '其他';
}

export const fetchUserInfos = async (): Promise<UserInfo[]> => {
  const userID = 1;
  const data = await sql<RawUserInfo>`select * from Relation_Ranking(${userID})`;
  console.log(data.rows);
  const userInfos = data.rows.map((userInfo) => ({
    ...userInfo,
    sex: formatSex(userInfo.sex),
    district: userInfo.town,
    image_urls: [userInfo.image1, userInfo.image2, userInfo.image3]
  }));
  return userInfos;
}



export const fetchUserSubcribees = async (): Promise<UserInfo[]> => {
  const userID = 1;
  const data = await sql<RawUserInfo>`select * from Subscriptions where subscriber = (${userID})`;
  const userInfos = data.rows.map((userInfo) => ({
    ...userInfo,
    sex: formatSex(userInfo.sex),
    district: userInfo.town
  }));
  return userInfos;
}