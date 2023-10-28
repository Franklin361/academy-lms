import { Categories } from '@/components/categories/categories'
import { SearchInput } from '@/components/search-input'

const SearchPage = async () => {
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
        {/* <CoursesList items={courses} /> */}
      </div>
    </>
  )
}
export default SearchPage