import NavBar from '@/components/shared/navbar/NavBar'
import LeftSidebar from '@/components/shared/sidebar/LeftSidebar'
import RightSidebar from '@/components/shared/sidebar/RightSidebar'
import Toaster from '@/components/shared/toaster/Toaster'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <main className='bg-light850_dark100 relative'>
            <NavBar />
            <div className='flex'>                          
                <LeftSidebar />
                <section className='pb-6pt-36 flex min-h-screen 
                        flex-1 flex-col px-6 max-md:pb-14 sm:px-14'>
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