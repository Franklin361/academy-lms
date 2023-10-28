import { getCourses } from '@/actions/get-courses';
import { Categories } from '@/components/categories/categories'
import { CoursesList } from '@/components/courses/courses-list';
import { SearchInput } from '@/components/search-input'

interface Props {
  searchParams: {
    title: string;
    categoryId: string;
  }
};

const SearchPage = async ({ searchParams }: Props) => {
  // const { userId } = auth();

  // if (!userId) {
  //   return redirect("/");
  // }

  // const categories = await db.category.findMany({
  //   orderBy: {
  //     name: "asc"
  //   }
  // });

  // const courses = await getCourses({
  //   userId,
  //   ...searchParams,
  // });


  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <div className="p-6 space-y-4">
        <Categories
          items={[
            {
              id: '1',
              name: 'Music'
            },
            {
              id: '2',
              name: 'Photography'
            },
            {
              id: '3',
              name: 'Fitness'
            },
            {
              id: '4',
              name: 'Accounting'
            },
            {
              id: '5',
              name: 'Computer Science'
            },
            {
              id: '6',
              name: 'Filming'
            },
            {
              id: '7',
              name: 'Engineering'
            },
          ]}
        />
        <CoursesList items={[
          { id: '1', categoryId: '1', description: '1', isPublished: false, title: 'This is ashit ashitasd ashita a asd vasd This is ashit ashitasd ashita a asd vasd', price: 50, createdAt: new Date(), imageUrl: 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg', updatedAt: new Date(), userId: '1', category: { id: '1', name: 'Music' }, chapters: [], progress: 29 },
          { id: '2', categoryId: '1', description: 'Thisdescription', isPublished: true, title: 'Working out your biceps 💪', price: 200, createdAt: new Date(), imageUrl: 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg', updatedAt: new Date(), userId: '1', category: { id: '1', name: 'Excersice' }, chapters: [{ id: '4' }, { id: '5' }], progress: null },
        ]} />
      </div>
    </>
  )
}
export default SearchPage