import { sql } from "@vercel/postgres";
export type EventInfo = {
    id: string;
    name: string;
    image_url: string;
    event_url: string;
    event_type: string;
};


const Page = async () => {

    const data = await sql<EventInfo>`select * from Events`;

    const events = data.rows.map((event) => ({
        ...event,
    }));
    

    return (
        <div>
            {events.map((event) => (
                <div key={event.id}>
                    {event.id}, {event.name}, {event.event_type}
                </div>
            ))}
        </div>
    )
    
}

export default Page;


