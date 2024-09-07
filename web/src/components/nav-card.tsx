'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { type UserInfo } from '@/lib/definition';
import { IoHomeOutline } from "react-icons/io5";

const slides = [
  {
    name: 'cover1',
    img: 'https://codefest.taipei/images/og.jpg'
  },
  {
    name: 'cover2',
    img: 'https://i.ytimg.com/vi/3IAHr044zao/maxresdefault.jpg'
  }
]

const activities = [
  {
    name: '近期活動一',
    href: '/',
    picture: 'https://www.figma.com/design/W6zyjfcXP3RS2VwNuZJg7r/%E5%9F%8E%E5%B8%82%E9%80%9A-Town-Pass-Open-Source-Gov-Mobile-App-UI-kit-and-design-system-(Community)?node-id=1-3&m=dev&t=Tk4u2ahGm5mQ3ax3-1'
  },
  {
    name: '近期活動二',
    href: '/',
    picture: 'https://backstage.tpac-taipei.org/storage/uploads/program/series/images/73fdff80742a6bcb75612f07e19be328.jpg'
  },
  {
    name: '近期活動三',
    href: '/',
    picture: 'https://www.hyanmw.com.tw/upload/web/singcontest/chang-siang-ying-yin-jieh-_-jhong-hua-dian-fong-duei-jyueh-ge-chyu-chuang-zuo-bi-sai-jian-jhang.jpg'
  },
];

const mockUser: UserInfo = {
  id: '1234',
  name: '金大森',
  age: 27,
  sex: '男',
  district: '文山區',
  motto: '在這個城市，尋找很大森的人。'
}

const NavCards = (): JSX.Element => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

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
            {slides.map((slide) => (
              <div className="embla__slide" key={slide.name}>
                <img
                  src={slide.img}
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
              {mockUser.name}
            </p>
            <p className="text-2xl">
              {mockUser.age}
            </p>
          </div>
          <div className="flex gap-2 content-end items-end justify-end">
            <IoHomeOutline className="text-4xl" />
            <div className="flex">
              <p>{mockUser.district}</p>
            </div>
          </div>
        </div>
        <p id="motto">
          {mockUser.motto}
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
      {/* <div className="flex flex-col items-center gap-4 py-8 px-4">
        {activities.map((activity) => {
          return (
            <ActivityButton
              key={activity.name}
              href={activity.href}
              name={activity.name}
              picture={activity.picture}
            >
            </ActivityButton>
          );
        })}
      </div> */}
    </div >
  );
};

export default NavCards;
