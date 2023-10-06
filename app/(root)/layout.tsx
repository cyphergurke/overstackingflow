import NavBar from '@/components/shared/Navbar/NavBar'
import LeftSidebar from '@/components/shared/Sidebar/LeftSidebar'
import RightSidebar from '@/components/shared/Sidebar/RightSidebar'
import Toaster from '@/components/shared/Toaster/Toaster'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <main className='bg-light850_dark100 relative'>
            <NavBar />
            <div className='flex'>                          
                <LeftSidebar />
                <section className='flex min-h-screen flex-1 
                        flex-col px-6 pb-6pt-36 max-md:pb-14 sm:px-14'>
                    <div className='mx-auto w-full max-w-5xl'>
                        {children}
                    </div>
                </section>
                <RightSidebar />
            </div>
            <Toaster />
        </main> 
    )
}

export default Layout