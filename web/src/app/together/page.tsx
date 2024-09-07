import SearchBar from "@/components/search-bar";
import ActivityCard from "./activity-card";

const Page = () => {
  return (
    <div className="mt-4 w-full px-4">
      <div className="flex">
        <SearchBar
          placeholder="搜尋活動..."
        />
      </div>
      <main>
        <div className="flex flex-col w-auto gap-4 mt-5">
          <ActivityCard
            image_url="https://www.tcb.tw/prod/news/1003/288c89a2-4d90-4f75-b54f-27a37a6e3724.jpg"
          />
          <ActivityCard
            image_url="https://www.tcb.tw/prod/news/1003/288c89a2-4d90-4f75-b54f-27a37a6e3724.jpg"
          />
          <ActivityCard
            image_url="https://www.tcb.tw/prod/news/1003/288c89a2-4d90-4f75-b54f-27a37a6e3724.jpg"
          />
          <ActivityCard
            image_url="https://www.tcb.tw/prod/news/1003/288c89a2-4d90-4f75-b54f-27a37a6e3724.jpg"
          />
        </div>
      </main>
    </div>
  )
}

export default Page;