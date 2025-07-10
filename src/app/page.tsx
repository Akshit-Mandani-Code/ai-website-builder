import{ prisma } from '@/lib/database'

const Page = async () => {
  const users = await prisma.user.findMany();

  return (
    <div className="font-bold"> 
    {JSON.stringify(users, null, 2)}
    </div>
  );
}

export default Page;