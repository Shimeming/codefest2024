import clsx from "clsx";
import { FaUserCircle, FaPlus } from "react-icons/fa"; // Icons for leader and plus sign
import { useState } from "react"; // Import useState for state management
import { type ActivityInfo } from "@/lib/definition";

const GroupList = ({
  activity,
}: {
  activity: ActivityInfo
}) => {
  const groups = [
    { id: 1, name: '防彈中年團', date: '2024-09-10', participants: 5, maxParticipants: 10 },
    { id: 2, name: '得加碗新飯', date: '2024-09-15', participants: 8, maxParticipants: 12 },
    { id: 3, name: '強烈建議主辦單位補充原萃', date: '2024-09-20', participants: 3, maxParticipants: 8 },
  ]; // Example groups

  const [appliedGroups, setAppliedGroups] = useState<number[]>([]); // State to track which groups the user has applied to

  // Function to handle clicking the "+" icon
  const handleApply = (groupId: number) => {
    if (!appliedGroups.includes(groupId)) {
      setAppliedGroups([...appliedGroups, groupId]); // Add the group to the applied list if not already applied
    }
  };

  return (
    <div className={clsx(
      'rounded-xl bg-gray-300 shadow-xl',
      'p-4 w-full',
      'flex flex-col gap-4'
    )}>
      <p className="text-xl">相關行程</p>

      {groups.map((group) => (
        <div key={group.id} className="flex items-center border p-4 rounded-lg shadow-md bg-white gap-4">
          {/* Left: Circular leader icon with participant info */}
          <div className="flex flex-col items-center">
            <FaUserCircle className="text-4xl" /> {/* Placeholder icon for group leader */}
            <p className="text-sm mt-2">{group.participants}/{group.maxParticipants}</p>
          </div>

          {/* Middle: Group name and date */}
          <div className="flex flex-col flex-grow">
            <p className="text-lg font-semibold">{group.name}</p>
            <p className="text-sm text-gray-500">{group.date}</p>
          </div>

          {/* Right: Plus icon for joining */}
          <div className="flex items-center">
            <FaPlus
              className={clsx(
                'text-2xl cursor-pointer',
                appliedGroups.includes(group.id) ? 'text-gray-400' : 'text-primary-500'
              )}
              onClick={() => handleApply(group.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupList;
