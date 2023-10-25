import { NavbarRoutes } from "@/components/navbar-routes"

import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
  return (
    <div className="p-4 h-full flex items-center shadow-2xl shadow-black/50">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  )
}