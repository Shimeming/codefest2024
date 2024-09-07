'use client'
import SearchBar from "@/components/search-bar";
import ActivityCard from "./activity-card";
import { useEffect, useState } from "react";
import { type ActivityInfo } from "@/lib/definition";
import clsx from "clsx";

const activities: ActivityInfo[] = [
  {
    id: "1",
    image_url: "https://www.tcb.tw/prod/news/1003/288c89a2-4d90-4f75-b54f-27a37a6e3724.jpg",
    date: new Date('December 17, 2024 03:24:00')
  },
  {
    id: "2",
    image_url: "https://www.tcb.tw/prod/news/1003/288c89a2-4d90-4f75-b54f-27a37a6e3724.jpg",
    date: new Date('December 19, 2024 03:24:00')
  },
  {
    id: "3",
    image_url: "https://www.tcb.tw/prod/news/1003/288c89a2-4d90-4f75-b54f-27a37a6e3724.jpg",
    date: new Date('December 21, 2024 03:24:00')
  },
  {
    id: "4",
    image_url: "https://www.tcb.tw/prod/news/1003/288c89a2-4d90-4f75-b54f-27a37a6e3724.jpg",
    date: new Date('December 23, 2024 03:24:00')
  },
]

const Page = () => {
  const [selectedActivity, setSelectedActivity] = useState<null | string>(null);

  return (
    <div className="w-full">
      <div className="flex">
        <SearchBar
          placeholder="搜尋活動..."
        />
      </div>
      <main>
        <div className="relative flex flex-col w-auto gap-4 mt-5">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={clsx('transition-all duration-300 w-full ease-in-out',
                { 'opacity-0 absolute top-0 left-0 hidden': selectedActivity && selectedActivity !== activity.id })}
            >
              <ActivityCard
                activity={activity}
                selectActivity={(select: boolean) => {
                  setSelectedActivity(select? activity.id: null)
                }}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Page;
