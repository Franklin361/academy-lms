import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { getProgress } from "@/actions/get-progress";
import { CourseSidebar } from '@/components/courses/course-sidebar/course-sidebar';
import { CourseNavbar } from '@/components/courses/course-navbar';


const CourseLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { courseId: string };
}) => {
  // const { userId } = auth();

  // if (!userId) {
  //   return redirect("/")
  // }

  // const course = await db.course.findUnique({
  //   where: {
  //     id: params.courseId,
  //   },
  //   include: {
  //     chapters: {
  //       where: {
  //         isPublished: true,
  //       },
  //       include: {
  //         userProgress: {
  //           where: {
  //             userId,
  //           }
  //         }
  //       },
  //       orderBy: {
  //         position: "asc"
  //       }
  //     },
  //   },
  // });

  // if (!course) {
  //   return redirect("/");
  // }

  // const progressCount = await getProgress(userId, course.id);

  return (
    <div className="bg-[#010409] text-white h-full">
      <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
        <CourseNavbar
          course={{
            id: '1', categoryId: '1', description: '1', isPublished: false, title: 'This is ashit ashitasd ashita a asd vasd This is ashit ashitasd ashita a asd vasd', price: 50, createdAt: new Date(), imageUrl: 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg', updatedAt: new Date(), userId: '1', chapters: [
              {
                courseId: '1',
                description: 'asdad',
                id: '1',
                isFree: true,
                isPublished: true,
                position: 1,
                title: 'title',
                userProgress: [{ chapterId: '1', id: '1', isCompleted: false, userId: '1', createdAt: new Date(), updatedAt: new Date() }],
                videoUrl: '',
                createdAt: new Date(),
                updatedAt: new Date()
              },
              {
                courseId: '2',
                description: 'asdad',
                id: '546',
                isFree: true,
                isPublished: true,
                position: 2,
                title: 'title 2',
                userProgress: [{ chapterId: '1', id: '1', isCompleted: true, userId: '1', createdAt: new Date(), updatedAt: new Date() }],
                videoUrl: '',
                createdAt: new Date(),
                updatedAt: new Date()
              }
            ]
          }}
          progressCount={20}
        />
      </div>
      <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
        <CourseSidebar
          course={{
            id: '1', categoryId: '1', description: '1', isPublished: false, title: 'This is ashit ashitasd ashita a asd vasd This is ashit ashitasd ashita a asd vasd', price: 50, createdAt: new Date(), imageUrl: 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg', updatedAt: new Date(), userId: '1', chapters: [
              {
                courseId: '1',
                description: 'asdad',
                id: '1',
                isFree: true,
                isPublished: true,
                position: 1,
                title: 'title',
                userProgress: [{ chapterId: '1', id: '1', isCompleted: false, userId: '1', createdAt: new Date(), updatedAt: new Date() }],
                videoUrl: '',
                createdAt: new Date(),
                updatedAt: new Date()
              },
              {
                courseId: '2',
                description: 'asdad',
                id: '546',
                isFree: true,
                isPublished: true,
                position: 2,
                title: 'title 2',
                userProgress: [{ chapterId: '1', id: '1', isCompleted: true, userId: '1', createdAt: new Date(), updatedAt: new Date() }],
                videoUrl: '',
                createdAt: new Date(),
                updatedAt: new Date()
              }
            ]
          }}
          progressCount={20}
        />
      </div>
      <main className="md:pl-80 pt-[80px] h-full">
        {children}
      </main>
    </div>
  )
}

export default CourseLayout