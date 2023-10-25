import Image from 'next/image'
import { SidebarRoutes } from "./sidebar-routes"

export const Sidebar = () => {
  return (
    <div className="h-full  flex flex-col overflow-y-auto shadow-2xl shadow-black/50 border-r border-black bg-[#242325] ">
      <div className="p-6 flex justify-center items-center flex-col gap-2">
        <Image
          height={80}
          width={80}
          alt="logo"
          src="https://cdn-icons-png.flaticon.com/128/2436/2436874.png"
        />
        <span className='font-bold border-b text-xl text-gray-300'>Academy</span>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  )
}