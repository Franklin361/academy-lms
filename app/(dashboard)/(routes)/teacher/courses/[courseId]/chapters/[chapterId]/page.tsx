import { Banner } from '@/components/banner';
import { ChapterAccessForm } from '@/components/chapter/chapter-access-form';
import { ChapterActions } from '@/components/chapter/chapter-actions';
import { ChapterDescriptionForm } from '@/components/chapter/chapter-description-form';
import { ChapterTitleForm } from '@/components/chapter/chapter-title-form';
import { ChapterVideoForm } from '@/components/chapter/chapter-video-form';
import { IconBadge } from '@/components/icon-badge';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { ArrowLeft, Eye, LayoutDashboard, Video } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface Props {
  params: { courseId: string, chapterId: string }
}
const Chapter = async ({ params: { chapterId, courseId } }: Props) => {

  // const { userId } = auth();

  // if (!userId) {
  //   return redirect("/");
  // }

  // const chapter = await db.chapter.findUnique({
  //   where: {
  //     id: chapterId,
  //     courseId: courseId
  //   },
  //   include: {
  //     muxData: true,
  //   },
  // });

  // if (!chapter) {
  //   return redirect("/")
  // }

  // const requiredFields = [
  //   chapter.title,
  //   chapter.description,
  //   chapter.videoUrl,
  // ];

  // const totalFields = requiredFields.length;
  // const completedFields = requiredFields.filter(Boolean).length;

  // const completionText = `(${completedFields}/${totalFields})`;

  // const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {/* {!chapter.isPublished && ( */}
      {false && (
        <Banner
          label="This chapter is unpublished. It will not be visible in the course"
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <Link
              href={`/teacher/courses/${courseId}`}
              className="flex items-center text-sm hover:opacity-75 transition mb-6 w-fit"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to course setup
            </Link>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-4xl font-bold">
                  Chapter Creation
                </h1>
                <span className="text-sm text-slate-400">
                  {/* Complete all fields {completionText} */}
                  Complete all fields 3/4
                </span>
              </div>
              <ChapterActions
                // disabled={!isComplete}
                // courseId={params.courseId}
                // chapterId={params.chapterId}
                // isPublished={chapter.isPublished}
                disabled={false}
                courseId={'1'}
                chapterId={'1'}
                isPublished={false}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={LayoutDashboard} />
                <h2 className="text-xl">
                  Customize your chapter
                </h2>
              </div>
              <ChapterTitleForm
                initialData={{ title: 'asdasdasd ' }}
                courseId={'1'}
                chapterId={'1'}
              />
              <ChapterDescriptionForm
                initialData={{ description: 'dasdasdasd' } as any}
                courseId={'1'}
                chapterId={'1'}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2 mt-8">
                <IconBadge icon={Eye} />
                <h2 className="text-xl">
                  Access Settings
                </h2>
              </div>
              <ChapterAccessForm
                initialData={{ isFree: false } as any}
                courseId={'1'}
                chapterId={'1'}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={Video} />
              <h2 className="text-xl">
                Add a video
              </h2>
            </div>
            <ChapterVideoForm
              initialData={{ videoUrl: '' } as any}
              chapterId={'1'}
              courseId={'1'}
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default Chapter