import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
const NavBarLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <Navbar />
            <main className='relative flex flex-col min-h-full z-20 my-12 px-6  lg:px-12'>
                <div className='flex-grow flex-1'>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default NavBarLayout