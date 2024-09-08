'use client'; // This is a client-side component

import { useState, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import clsx from "clsx";

// Define types for UserInfo and GroupInfo
type UserInfo = {
  id: string;
  name: string;
  avatar_url: string;
};

type GroupInfo = {
  activity: {
    id: string;
    name: string;
    image_url: string;
    date: Date;
  };
  name: string;
  owner: {
    id: string;
    name: string;
    age: number;
    sex: string;
    district: string;
    motto: string;
  };
  members: UserInfo[];
  waitingMembers: UserInfo[];
};

// Mock data function to fetch users
const fetchUserInfos = async (): Promise<UserInfo[]> => {
  return [
    { id: '1', name: 'Alice', avatar_url: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Bob', avatar_url: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Charlie', avatar_url: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Dave', avatar_url: 'https://via.placeholder.com/150' },
    { id: '5', name: 'Eve', avatar_url: 'https://via.placeholder.com/150' },
    { id: '6', name: 'Frank', avatar_url: 'https://via.placeholder.com/150' },
    { id: '7', name: 'Grace', avatar_url: 'https://via.placeholder.com/150' },
    { id: '8', name: 'Heidi', avatar_url: 'https://via.placeholder.com/150' },
    { id: '9', name: 'Ivan', avatar_url: 'https://via.placeholder.com/150' },
  ];
};

// Mock group data
const mockGroup: GroupInfo = {
  activity: {
    id: "1",
    name: "漫畫裡的台北少年人：台北漫畫城市特展",
    image_url: "https://www.tcb.tw/prod/news/1003/288c89a2-4d90-4f75-b54f-27a37a6e3724.jpg",
    date: new Date('December 17, 2024 03:24:00'),
  },
  name: '防彈中年團',
  owner: {
    id: '1234',
    name: '金大森',
    age: 27,
    sex: '男',
    district: '文山區',
    motto: '在這個城市，尋找很大森的人。',
  },
  members: [],
  waitingMembers: [],
};

const Page = () => {
  const [members, setMembers] = useState<UserInfo[]>(mockGroup.members);
  const [waitingMembers, setWaitingMembers] = useState<UserInfo[]>(mockGroup.waitingMembers);

  // Fetch the mock user data on component mount
  useEffect(() => {
    const fetchMembers = async () => {
      const mockMembers = await fetchUserInfos(); // Fetch mock data
      setMembers(mockMembers.slice(0, 5)); // Assign first 5 as members
      setWaitingMembers(mockMembers.slice(5)); // The rest as waiting members
    };

    fetchMembers(); // Fetch mock data when component mounts
  }, []);

  // Approve a waiting member
  const handleApprove = (user: UserInfo) => {
    setMembers([...members, user]); // Add user to members list
    setWaitingMembers(waitingMembers.filter((wm) => wm.id !== user.id)); // Remove from waiting list
  };

  // Reject a waiting member
  const handleReject = (user: UserInfo) => {
    setWaitingMembers(waitingMembers.filter((wm) => wm.id !== user.id)); // Remove from waiting list
  };

  const activity = mockGroup.activity;

  return (
    <div className="rounded-xl shadow-lg flex flex-col bg-gray-200 py-4 px-2 gap-4">
      {/* Group Info */}
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-1">
          <p>{activity.name}</p>
          <p className="text-gray-700 text-sm">{`團名：${mockGroup.name}`}</p>
          <p className="text-gray-700 text-sm">{`主揪：${mockGroup.owner.name}`}</p>
          <p className="text-gray-500 text-xs">{mockGroup.activity.date.toISOString().split('T')[0]}</p>
        </div>
        <div className="flex items-center">
          <div className={clsx('relative rounded-xl shadow-xl overflow-hidden')}>
            <img src={activity.image_url} className="object-cover" />
          </div>
        </div>
      </div>

      {/* Members Section */}
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <p className="text-xl">成員</p>
          <p className="text-gray-600">{members.length}</p>
        </div>
        <hr className="border-t-2 w-full border-primary-500 my-2" />
        <div className="flex gap-4 flex-wrap">
          {members.map((member) => (
            <div key={member.id} className="flex items-center gap-2">
              <img src={member.avatar_url} alt={member.name} className="w-10 h-10 rounded-full" />
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Waiting Members Section */}
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <p className="text-xl">加入申請名單</p>
          <p className="text-gray-600">{waitingMembers.length}</p>
        </div>
        <hr className="border-t-2 w-full border-primary-500 my-2" />
        <div className="flex gap-4 flex-wrap">
          {waitingMembers.map((member) => (
            <div key={member.id} className="flex items-center gap-2">
              <img src={member.avatar_url} alt={member.name} className="w-10 h-10 rounded-full" />
              <p>{member.name}</p>
              <FaCheckCircle
                className="text-green-500 cursor-pointer"
                onClick={() => handleApprove(member)} // Approve the member
              />
              <FaTimesCircle
                className="text-red-500 cursor-pointer"
                onClick={() => handleReject(member)} // Reject the member
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
