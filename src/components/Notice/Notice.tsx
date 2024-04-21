'use client'
import notePerson from '@/assets/notesPerson.svg';
import noticeIcon from '@/assets/noticeIcon.svg';
import { cn } from '@/lib/utils';
import { Notice } from '@/services/apis/Notice';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { buttonVariants } from '../ui/button';

const NoticePage = () => {
    const [notices, setNotices] = useState([]);
    useEffect(() => {
        const notice = new Notice();
        const fetchNotices = async () => {
            const notices = await notice.fetchNotices();
            setNotices(notices);
        }
        fetchNotices();
    }, [])
    return (
        <div className={`flex flex-col md:flex-row w-full`}>
            <div className='relative flex justify-center md:w-1/2'>
                <Image src={notePerson} alt='notePerson' width={100} height={100} className='w-3/4 relative z-20' />
                <div className=' rounded-full blur-[8rem] -z-1 absolute inset-0 bg-[#a963d56a]' ></div>
            </div>
            <div className='md:ml-14  md:px-0 md:w-1/2 relative z-20'>
                <h1 className='text-4xl font-bold mb-8'>Notices</h1>
                <div className='overflow-y-scroll  scrollbar'>
                    <div className='h-[32rem] space-y-8 px-2'>
                        {
                            notices.map(({ heading, link }) => 
                            <div key={link} className='bg-card rounded-lg shadow-lg border flex items-center gap-8 py-4 px-6'>
                                <div className='bg-primary-foreground px-3 py-3 rounded-2xl'>
                                    <Image src={noticeIcon} alt='noticeIcon' width={50} height={50} />
                                </div>
                                <Link  href={link} target='_blank' className={cn(buttonVariants({variant:'link'}),'text-lg font-semibold pl-0')}>{heading}</Link>
                            </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoticePage