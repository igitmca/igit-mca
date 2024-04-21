import React from 'react'
import Image from 'next/image'
import logo from '@/assets/Footer/Vector.svg'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'

const Footer = () => {
    const pageLinks = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'About',
            href: '/about'
        },
        {
            name: 'Contact',
            href: '/contact-us'
        }
    ]
    const utilityLinks = [
        {
            name: 'Batch',
            href: '/batch'
        },
        {
            name: 'Notes',
            href: '/notes'
        },
        {
            name: 'Courses',
            href: '/courses'
        }
    ]
    return (
        <div className='px-6'>
            <div className="">
                <hr className="line" />
            </div>
            <div className="grid grid-cols-3 py-5 px-3">
                <div className="">
                    <h2 className="text-lg font-medium dark:text-white">Pages</h2>
                    <div className='mt-3'>
                        {
                            pageLinks.map((link, index) => (
                                <Link
                                    href={link.href}
                                    key={index}
                                    className={cn(buttonVariants({ variant: 'link' }), 'block pl-1')}
                                >
                                    {link.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="">
                    <h2 className="text-lg font-medium dark:text-white">Utility Pages</h2>
                    <div className='flex flex-col pl-1 gap-3 mt-3'>
                        {
                            utilityLinks.map((link, index) => (
                                <Link href={link.href
                                } key={index} 
                                className={cn(buttonVariants({ variant: 'link' }), 'block pl-1')}
                                >{link.name}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className="">
                    <h2 className="text-lg font-medium dark:text-white">Contact Us</h2>
                    <div className='my-2'>
                        <span>Email :&nbsp; </span>
                        <a href="mailto:mrmjpatra@gmail.com" className="hover:underline">mrmjpatra@gmail.com</a>
                    </div>
                    <div className='my-2'>
                        <span>Phone : </span>
                        <a href="tel:9090323291" className="hover:underline">+91 9090323291</a>
                    </div>
                </div>
            </div>

            <div className="">
                <hr className="line" />
            </div>
            <div className="mt-4 flex justify-between pb-2">
                <Link href='/' className="flex items-center gap-2 text-white">
                    <Image src={logo} alt='logo' className='logo'></Image>
                    <h6 className='text-2xl font-semibold'>IGIT MCA</h6>
                </Link>
                <div className="">
                    &#169; MCA | Designed by MCA
                </div>
            </div>
        </div>
    )
}

export default Footer