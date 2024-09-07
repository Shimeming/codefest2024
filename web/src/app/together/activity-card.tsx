'use client'
import { FaRegHeart } from "react-icons/fa";
import { BsPersonAdd } from "react-icons/bs";
import clsx from "clsx";
import FunctionButton from "./function-button";
import { useEffect, useState } from "react";
import { type ActivityInfo } from "@/lib/definition";
import { IoList } from "react-icons/io5";
import CreateGroup from "./create-group";
import GroupList from "./group-list";

const ActivityCard = ({
  activity,
  selectActivity
}: {
  activity: ActivityInfo
  selectActivity: (select: boolean) => void;
}) => {
  const [selectedDropdown, setSelectedDropdown] = useState<null | 'create' | 'list'>(null);
  useEffect(() => {
    selectActivity(selectedDropdown !== null);
  }, [selectedDropdown])

  return (
    <div className="relative flex flex-col gap-2 w-full">
      <div
        className={clsx(
          'relative rounded-xl shadow-xl overflow-hidden',
        )}
      >
        <img
          src={activity.image_url}
          className="w-full h-40 object-cover"
        />
        <div className="absolute bottom-1.5 right-1.5 flex justify-end items-end gap-2">
          <FunctionButton
            onClick={() => {
              selectedDropdown === 'list' ? setSelectedDropdown(null) : setSelectedDropdown('list');
            }}
          >
            <IoList />
          </FunctionButton>
          <FunctionButton
            onClick={() => {
            }}
          >
            <FaRegHeart />
          </FunctionButton>
          <FunctionButton
            onClick={() => {
              selectedDropdown === 'create' ? setSelectedDropdown(null) : setSelectedDropdown('create');
            }}
          >
            <BsPersonAdd />
          </FunctionButton>
        </div>
      </div>
      <div className="relative w-full">
        <div className={clsx(
          'absolute top-0 left-0',
          'transition-all opacity-0 ease-in-out duration-300',
          { 'opacity-100': selectedDropdown === 'create' },
          'w-full'
        )}>
          <CreateGroup
            handleCreateGroup={() => {}}
            activity={activity}
          />
        </div>

        <div className={clsx(
          'absolute top-0 left-0',
          'transition-all opacity-0 ease-in-out duration-300',
          { 'opacity-100': selectedDropdown === 'list' },
          'w-full'
        )}>
          <GroupList 
            activity={activity}
          />
        </div>
      </div>
    </div>
  )
}

export default ActivityCard;