'use client'
import { ActivityButton } from '@/components/activity-button';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

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

const NavCards = (): JSX.Element => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="
      flex flex-col h-[80vh] max-w-[90vw]
      bg-secondary-200
      rounded-xl overflow-hidden
    ">
      <div
        className="
          relative overflow-hidden w-full h-full
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
      <div className="flex-auto basis-1/3 bg-slate-500">
        test
      </div>
      <div className="flex flex-col items-center gap-4 py-8 px-4">
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
      </div>
    </div >
  );
};

export default NavCards;
