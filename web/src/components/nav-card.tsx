import { ActivityButton } from '@/components/activity-button';

const activities = [
  {
    name: '近期活動一',
    href: '/',
    picture: <></>
  },
  {
    name: '近期活動二',
    href: '/',
    picture: <></>
  },
  {
    name: '近期活動三',
    href: '/',
    picture: <></>
  },
];

const NavCards = (): React.JSX.Element => {
  return (
    <div className="
      flex flex-col min-h-[70vh] max-w-[90vw]
      bg-secondary-200
      rounded-xl overflow-hidden
    ">
      <div className="min-h-64 bg-slate-500">
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
    </div>
  );
};

export default NavCards;
