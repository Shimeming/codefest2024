import { FaCircle } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";

const ContactCard = ({
  online,
  name,
  lastMessage
}: {
  online: boolean,
  name: string,
  lastMessage: string
}) => {
  return (
    <div className="rounded-xl border-primary-600 border-2 shadow-lg px-2 py-3 flex h-20 bg-white gap-2 hover:bg-primary-50">
      <div className="text-primary-500 mt-2 ml-3 mr-2 text-xs">
        {online ? (<FaCircle />) : (<FaRegCircle />)}
      </div>
      <div className="flex flex-col">
        <p className="text-xl">{name}</p>
        <p className="text-gray-400">{lastMessage}</p>
      </div>
    </div>
  )
}

export default ContactCard;
