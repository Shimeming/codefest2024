import { sql } from "@vercel/postgres";
export type RawUserInfo = {
    name: string;
    sex: number;
    age: number;
    image_url: string;
    motto: string;

    city: string;
    town: string;

    distance: number;
};

export const fetchUserInfos = async () => {
    const userID = 1;
    const data = await sql<RawUserInfo>`select * from Relation_Ranking(${userID})`;
    const userInfos = data.rows;
    return userInfos;
}



