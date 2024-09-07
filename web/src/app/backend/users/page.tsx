import { sql } from "@vercel/postgres";


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


