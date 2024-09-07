import { sql } from "@vercel/postgres";
export type UserInfo = {
    name: string;
    sex: number;
    age: number;
    image_url: string;
    motto: string;

    city: string;
    town: string;

    distance: number;
    
    
};

const Page = async () => {
    const userID = 1;
    const data = await sql<UserInfo>`select * from Relation_Ranking(${userID})`;

    return (
        <div>
            {data.rows.map((user) => (
                <div key={user.name}>
                    {user.name}, {user.sex}, {user.age}, {user.image_url}, {user.motto}, {user.city}, {user.town}, {user.distance}
                </div>
            ))}
        </div>
    )
    
}

export default Page;


