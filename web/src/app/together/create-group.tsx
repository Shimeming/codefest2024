import { type ActivityInfo } from "@/lib/definition";
import { MdDateRange } from "react-icons/md";
import clsx from "clsx";

const CreateGroup = ({
  handleCreateGroup,
  activity
}: {
  handleCreateGroup: () => void;
  activity: ActivityInfo
}) => {
  return (
    <div className={clsx(
      'rounded-xl bg-gray-300 shadow-xl',
      'p-4 w-full',
      'flex flex-col gap-4'
    )}>
      <p className="text-xl">我要開團</p>
      <form
        action={handleCreateGroup}
        className="flex flex-col gap-4"
      >
        <div className="grid  grid-cols-[30%_70%] gap-x-2 gap-y-4">
          <div className="items-center">
            <p>活動日期</p>
          </div>
          <div className="flex items-center">
            <MdDateRange className="text-lg mr-2" />
            <p>{activity.date.toISOString().split('T')[0]}</p>
          </div>
          <div className="items-center">
            <p>人數上限</p>
          </div>
          <div>
          </div>
          <div className="items-center">
            <p>團體名稱</p>
          </div>
          <div>
          </div>
          <div className="items-center">
            <p>活動地點</p>
          </div>
          <div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <button
            className="rounded-lg bg-primary-500 px-4 py-2 text-white hover:bg-primary-600"
            type="submit"
          >
            確認開團
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateGroup;
