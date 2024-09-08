'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the stylesheet
import clsx from "clsx";
import { MdDateRange } from "react-icons/md";
import { type ActivityInfo } from "@/lib/definition";

function submitSearch(router: ReturnType<typeof useRouter>): void {
  router.push('/together/1234'); // Use the router instance to push to the desired route
}

const CreateGroup = ({
  handleCreateGroup,
  activity
}: {
  handleCreateGroup: () => void;
  activity: ActivityInfo
}) => {
  const router = useRouter(); // Initialize the router
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [maxParticipants, setMaxParticipants] = useState<number>(5); // Default to 5 participants
  const [teamName, setTeamName] = useState<string>(""); // Default to an empty string for team name

  return (
    <div className={clsx(
      'rounded-xl bg-gray-300 shadow-xl',
      'p-4 w-full',
      'flex flex-col gap-4'
    )}>
      <p className="text-xl">我要開團</p>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          submitSearch(router); // Call submitSearch with the router instance
        }}
        className="flex flex-col gap-4"
      >
        <div className="grid grid-cols-[30%_70%] gap-x-2 gap-y-4">
          {/* 活動日期 */}
          <div className="flex items-center">
            <p>活動日期</p>
          </div>
          <div className="flex items-center">
            <MdDateRange className="text-lg mr-2" />
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => setSelectedDate(date)}
              className="w-full border border-gray-400 rounded-md px-2 py-1"
              dateFormat="yyyy-MM-dd"
            />
          </div>

          {/* 人數上限 */}
          <div className="flex items-center">
            <p>人數上限</p>
          </div>
          <div>
            <select
              value={maxParticipants}
              onChange={(e) => setMaxParticipants(Number(e.target.value))}
              className="w-full border border-gray-400 rounded-md px-2 py-1"
            >
              {[...Array(20)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* 團隊名稱 */}
          <div className="flex items-center">
            <p>團隊名稱</p>
          </div>
          <div>
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="輸入團隊名稱"
              className="w-full border border-gray-400 rounded-md px-2 py-1"
            />
          </div>

          {/* 活動地點 */}
          <div className="flex items-center">
            <p>活動地點</p>
          </div>
          <div>
            <p>{activity.place}</p> {/* Automatically populates from the activity prop */}
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
