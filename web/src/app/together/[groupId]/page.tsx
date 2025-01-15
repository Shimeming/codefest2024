import { GroupInfo } from "@/lib/definition";
import { fetchUserInfos } from "@/lib/data";
import clsx from "clsx";


const mockGroup: GroupInfo = {
  activity: {
    id: "1",
    name: "漫畫裡的台北少年人：台北漫畫城市特展",
    image_url: "https://www.tcb.tw/prod/news/1003/288c89a2-4d90-4f75-b54f-27a37a6e3724.jpg",
    date: new Date('December 17, 2024 03:24:00')
  },
  name: '防彈中年團',
  owner: {
    id: '1234',
    name: '金大森',
    age: 27,
    sex: '男',
    district: '文山區',
    motto: '在這個城市，尋找很大森的人。'
  },
  members: [],
  waitingMembers: []
}

const Page = async ({
  params
}: {
  params: { groupId: string };
}) => {
  const mockMembers = await fetchUserInfos();
  mockGroup.members = mockMembers.slice(0, 3);
  mockGroup.waitingMembers = mockMembers.slice(3);
  const activity = mockGroup.activity;

  return (
    <div
      className="rounded-xl shadow-lg flex flex-col bg-gray-200 py-4 px-2 gap-4"
    >
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-1">
          <p>{activity.name}</p>
          <p className="text-gray-700 text-sm">{`團名：${mockGroup.name}`}</p>
          <p className="text-gray-700 text-sm">{`主揪：${mockGroup.owner.name}`}</p>
          <p className="text-gray-500 text-xs">{mockGroup.activity.date.toISOString().split('T')[0]}</p>
        </div>
        <div className="flex items-center">
          <div
            className={clsx(
              'relative rounded-xl shadow-xl overflow-hidden',
            )}
          >
            <img
              src={activity.image_url}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div id="member flex flex-col">
        <div className="flex gap-2 items-center">
          <p className="text-xl">成員</p>
          <p className="text-gray-600">{mockGroup.members.length}</p>
        </div>
        <hr className="border-t-2 w-full border-primary-500 my-2" />
      </div>
    </div>
  )
}

export default Page;