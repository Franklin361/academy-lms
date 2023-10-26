
interface Props {
  params: { courseId: string }
}
const Course = ({ params }: Props) => {
  return (
    <div className='p-6'>Course id: {params.courseId}</div>
  )
}
export default Course