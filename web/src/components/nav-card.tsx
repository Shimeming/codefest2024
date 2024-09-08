'use client'
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import TinderCard from 'react-tinder-card';
import { IoHomeOutline } from "react-icons/io5";
import { type UserInfo } from '@/lib/definition';

const slides = [
  {
    name: 'cover1',
    img: 'https://codefest.taipei/images/og.jpg'
  },
  {
    name: 'cover2',
    img: 'https://i.ytimg.com/vi/3IAHr044zao/maxresdefault.jpg'
  }
];

// const mockUsers: UserInfo[] = [
//   {
//     id: '1234',
//     name: '金大森',
//     age: 27,
//     sex: '男',
//     district: '文山區',
//     motto: '在這個城市，尋找很大森的人。'
//   },
//   {
//     id: '5678',
//     name: '李小美',
//     age: 25,
//     sex: '女',
//     district: '大安區',
//     motto: '在這裡做最好的自己。'
//   }
// ];

const getThumbnailUrl = (url: string): string | null => {
  const match = url.match(/\/d\/([^\/]+)\//);
  if (match) {
    const fileId = match[1];
    return `https://drive.google.com/thumbnail?id=${fileId}`;
  }
  return null;
};


const NavCard = ({ user }: { user: UserInfo }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  // console.log(user);

  return (
    <div className="
      flex flex-col h-[85vh] max-w-[90vw]
      bg-gray-300
      rounded-xl overflow-hidden
      shadow-2xl shadow-gray-800
    ">
      <div
        className="
          relative overflow-hidden w-full h-52
        "
      >
        <div
          className="embla h-full"
          ref={emblaRef}
          id="scroll-container"
        >
          <div className="embla__container h-full">
            {user.image_urls.map((image_url) => (
              <div className="embla__slide" key={image_url}>
                <img
                  src={image_url}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="flex flex-col pt-6 mx-5 gap-2"
        id="user info"
      >
        <div className="flex gap-2 justify-between content-end items-end">
          <div className="flex gap-2 content-end items-end">
            <p className="text-3xl font-bold">
              {user.name}
            </p>
            <p className="text-2xl">
              {user.age}
            </p>
          </div>
          <div className="flex gap-2 content-end items-end justify-end">
            <IoHomeOutline className="text-4xl" />
            <div className="flex">
              <p>{user.district}</p>
            </div>
          </div>
        </div>
        <p id="motto">
          {user.motto}
        </p>
      </div>
      <div className="flex-1 h-full p-4">
        <div className="grid grid-cols-2 h-full gap-6">
          <div className="flex flex-col">
            <p>最愛活動</p>
            <div className="rounded-xl bg-primary-600 flex-grow w-full"></div>
          </div>
          <div className="flex flex-col">
            <p>想去的活動</p>
            <div className="rounded-xl bg-primary-600 flex-grow w-full"></div>
          </div>
          <div className="col-span-2 flex flex-col">
            <p>歷史活動紀錄</p>
            <div className="grid grid-cols-2 gap-6 flex-grow">
              <div className="rounded-xl bg-primary-600"></div>
              <div className="rounded-xl bg-primary-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

const NavCards = ({ users }: { users: UserInfo[] }): JSX.Element => {
  const onSwipe = (direction: string, userName: string) => {
    console.log(`You swiped ${direction} on ${userName}`);
  };

  const onCardLeftScreen = (userName: string) => {
    console.log(`${userName} left the screen`);
  };

  return (
    <div className="relative flex justify-center items-center h-[85vh] w-[90vw]">
      {users.map((user) => (
        <TinderCard
          className="absolute"
          key={user.id}
          onSwipe={(dir) => onSwipe(dir, user.name)}
          onCardLeftScreen={() => onCardLeftScreen(user.name)}
        >
          <NavCard user={user} />
        </TinderCard>
      ))}
    </div>
  );
};

export default NavCards;
