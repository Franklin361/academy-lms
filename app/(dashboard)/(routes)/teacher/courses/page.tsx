import { columns } from '@/components/courses/columns';
import { DataTable } from '@/components/courses/data-table';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const CoursesPage = async () => {

  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className='p-6'>
      <DataTable columns={columns} data={courses} />
    </div>
  )
}
export default CoursesPage