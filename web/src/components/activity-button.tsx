import Link from 'next/link';

export const ActivityButton = ({
  href, picture, name
}: {
  href: string;
  picture: string;
  name: string;
}) => {
  return (
    <Link
      href={href}
      className="
        relative flex justify-between
        rounded-xl min-w-72 shadow-xl overflow-hidden
        transition duration-300 ease-in-out
        bg-white hover:bg-primary-300
        p-4 pl-8
      "
    >
      <div
        className="
          absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out
          opacity-40 hover:opacity-50
        "
        style={{ backgroundImage: `url(${picture})` }}
      />
      <div className="relative z-10 text-xl font-semibold">
        {name}
      </div>
    </Link>
  )
}
