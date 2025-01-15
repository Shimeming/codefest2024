import NavCards from '@/components/nav-card';
import { fetchUserInfos } from '@/lib/data';

const Page = async () => {

  const userInfos = await fetchUserInfos();

  return (
    <>
      <main className="flex flex-col items-center">
        <NavCards
          users={userInfos}
        />
      </main>
    </>
  );
};

export default Page;
