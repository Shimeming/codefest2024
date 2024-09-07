import { FaRegHeart } from "react-icons/fa";
import { BsPersonAdd } from "react-icons/bs";

const ActivityCard = ({
  image_url,
}: {
  image_url: string
}) => {
  return (
    <div className="relative rounded-xl shadow-xl overflow-hidden">
      <img
        src={image_url}
        className="w-full h-40 object-cover"
      />
      <div className="absolute bottom-1.5 right-1.5 flex justify-end items-end gap-2">
        <button className="rounded-full bg-primary-500 p-1.5 text-xl text-white hover:bg-primary-600 text-center">
          <FaRegHeart />
        </button>
        <button className="rounded-full bg-primary-500 p-1.5 text-xl text-white hover:bg-primary-600 text-center">
          <BsPersonAdd />
        </button>
      </div>
    </div>
  )
}

export default ActivityCard;