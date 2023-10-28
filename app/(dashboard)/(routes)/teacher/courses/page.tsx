import { columns } from '@/components/courses/columns';
import { DataTable } from '@/components/courses/data-table';
import { Button } from '@/components/ui/button'
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import Link from 'next/link'
import { redirect } from 'next/navigation';

const CoursesPage = async () => {

  // const { userId } = auth();

  // if (!userId) {
  //   return redirect("/");
  // }

  // const courses = await db.course.findMany({
  //   where: {
  //     userId,
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  const data = [
    { id: '1', categoryId: '1', description: '1', isPublished: false, title: 'This is ashit ashitasd ashita a asd vasd This is ashit ashitasd ashita a asd vasd', price: 50, createdAt: new Date(), imageUrl: '', updatedAt: new Date(), userId: '1' },
    { id: '2', categoryId: '1', description: '1', isPublished: false, title: 'Second title asdasd', price: 5, createdAt: new Date(), imageUrl: '', updatedAt: new Date(), userId: '1' },
    { id: '3', categoryId: '1', description: '1', isPublished: true, title: 'Learning Next from Zero to Expert!', price: 101, createdAt: new Date(), imageUrl: '', updatedAt: new Date(), userId: '1' },
  ]

  return (
    <div className='p-6'>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
export default CoursesPage