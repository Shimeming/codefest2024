import { sql } from "@vercel/postgres";
export type UserInfo = {
    id: string;
    user_name: string;
    real_name: string;
    sex: string;
  };


export type UserInfoRaw = Omit<UserInfo, 'amount'> & {
    sex: number;
  };

const Page = async () => {

    const data = await sql<UserInfoRaw>`select * from Users`;

    const users = data.rows.map((user) => ({
        ...user,
        sex: user.sex,
    }));
    

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    {user.id}, {user.real_name}, {user.user_name}
                </div>
            ))}
        </div>
    )
    
}

export default Page;


