import { sql } from "@vercel/postgres";
export type UserInfo = {
    id: string;
    user_name: string;
    real_name: string;
    sex: number;
    age: number;
    image_url: string;
    motto: string;
    
    event_url: string;
    event_type: string;
    place: string,
    start_date: string,
    end_date: string
};

const Page = async () => {
    const userID = 1;
    const data = await sql<any>`select * from Relation_Ranking(${userID})`;

    return (
        <div>
            {data.rows.map((user) => (
                <div key={user.id}>
                    {user.id}, {user.real_name}, {user.user_name}
                </div>
            ))}
        </div>
    )
    
}

export default Page;


