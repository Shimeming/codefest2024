import clsx from "clsx";
import { type ActivityInfo } from "@/lib/definition";

const GroupList = ({
  activity,
}: {
  activity: ActivityInfo
}) => {
  return (
    <div className={clsx(
      'rounded-xl bg-gray-300 shadow-xl',
      'p-4 w-full',
      'flex flex-col gap-4'
    )}>
          <p className="text-xl">相關行程</p>
    </div>
  )
}

export default GroupList;
