import type { Metadata } from 'next'
import { Sidebar } from './_components/sidebar'
import { Navbar } from './_components/navbar'

export const metadata: Metadata = {
  title: 'Academy - Dashboard',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full bg-[#010409] text-white">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="dark md:pl-56 pt-[80px] h-full">
        {children}
      </main>
    </div>
  )
}
