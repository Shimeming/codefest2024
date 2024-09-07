const Page = async ({
  params
}: {
  params: { activityId: string };
}) => {
  <p>{params.activityId}</p>
}

export default Page;