import Link from 'next/link';

export const ActivityButton = ({
  href, picture, name
}: {
  href: string;
  picture: JSX.Element;
  name: string;
}) => {
  return (
    <Link
      href={href}
      className="
        relative flex justify-between
        rounded-xl min-w-72 shadow-xl overflow-hidden
        transition duration-300 ease-in-out
        bg-primary-100 hover:bg-primary-300
        p-4 pl-8
      "
    >
      {picture}
      <div
      className="
        relative z-10 text-xl font-semibold
      "
      >
        {name}
      </div>
    </Link>
  )
}
