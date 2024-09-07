'use client'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

const links = [
  {
    name: '尋找附近',
    href: '/',
  },
  {
    name: '揪團活動',
    href: '/together',
  },
  {
    name: '聊天室',
    href: '/chat',
  }
]

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div
      className="flex"
    >
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex grow items-center justify-center gap-2 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600',
              {
                'text-primary-500 border-b-4 border-primary-500': pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)),
              },
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div >
  );
}

export default NavBar;