import { Actions } from '@/components/course-config/actions';
import { AttachmentForm } from '@/components/course-config/attachment-form';
import { CategoryForm } from '@/components/course-config/category-form';
import { ChaptersForm } from '@/components/course-config/chapters/chapters-form';
import { DescriptionForm } from '@/components/course-config/description-form';
import { ImageForm } from '@/components/course-config/image-form';
import { PriceForm } from '@/components/course-config/price-form';
import { TitleForm } from '@/components/course-config/title-form';
import { IconBadge } from '@/components/icon-badge';
import { CircleDollarSign, File, LayoutDashboard, ListChecks } from 'lucide-react';


interface Props {
  params: { courseId: string }
}
const Course = async ({ params }: Props) => {
  // const { userId } = auth();

  // if (!userId) {
  //   return redirect("/");
  // }

  // const course = await db.course.findUnique({
  //   where: {
  //     id: params.courseId,
  //     userId
  //   },
  //   include: {
  //     chapters: {
  //       orderBy: {
  //         position: "asc",
  //       },
  //     },
  //     attachments: {
  //       orderBy: {
  //         createdAt: "desc",
  //       },
  //     },
  //   },
  // });

  // if (!course) {
  //   return redirect("/");
  // }

  // const requiredFields = [
  //   course.title,
  //   course.description,
  //   course.imageUrl,
  //   course.price,
  //   course.categoryId,
  //   course.chapters.some(chapter => chapter.isPublished),
  // ];

  // const totalFields = requiredFields.length;
  // const completedFields = requiredFields.filter(Boolean).length;

  // const completionText = `(${completedFields}/${totalFields})`;

  // const isComplete = requiredFields.every(Boolean);

  return (
    <>
      <div className='p-6  py-8'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col gap-y-2'>
            <h1 className='text-4xl font-bold'>Course setup</h1>
            <span className='text-sm text-slate-400'>
              {/* Complete all the fields {completionText} */}
              Complete all the fields (1/6)
            </span>
          </div>
          <Actions
            // disabled={!isComplete}
            // courseId={params.courseId}
            // isPublished={course.isPublished}
            disabled={false}
            courseId={params.courseId}
            isPublished={false}
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-8'>
          <div>

            <div className='flex items-center gap-x-2 mb-14'>
              <IconBadge icon={LayoutDashboard} />
              <h2 className='text-xl'>Customize your course</h2>
            </div>

            <TitleForm
              initialData={{
                title: 'Hello world 💪'
              }}
              courseId={'1'}
            />
            <DescriptionForm
              initialData={{
                description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
              } as any}
              courseId={'1'}
            />
            <ImageForm
              initialData={{} as any}
              courseId={'1'}
            />
            <CategoryForm
              initialData={{} as any}
              courseId={''}
              // options={categories.map((category) => ({
              //   label: category.name,
              //   value: category.id,
              // }))}
              options={[{ label: 'category', value: 'value' }]}
            />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2 mb-14">
                <IconBadge icon={ListChecks} />
                <h2 className="text-xl">
                  Course chapters
                </h2>
              </div>
              <ChaptersForm
                initialData={{
                  chapters: [
                    {
                      id: '1',
                      isFree: false,
                      isPublished: false,
                      position: 1,
                      title: 'chapter'
                    }
                  ]
                } as any}
                courseId={'1'}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2 my-10">
                <IconBadge icon={CircleDollarSign} />
                <h2 className="text-xl">
                  Sell your course
                </h2>
              </div>
              <PriceForm
                initialData={{} as any}
                courseId={'1'}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2 my-10">
                <IconBadge icon={File} />
                <h2 className="text-xl">
                  Resources & Attachments
                </h2>
              </div>
              <AttachmentForm
                initialData={{
                  attachments: []
                } as any}
                courseId={'1'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Course


