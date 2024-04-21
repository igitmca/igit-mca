import { poppins } from '@/lib/fonts'
import courseIcon from '@/assets/courseIcon.svg'
import coursePerson from '@/assets/coursePerson.svg'
import Image from 'next/image'
import { Button } from '../ui/button'

const Course = () => {
    return (
        <div className={`py-4 relative z-30 px-5 md:px-12 `}>
            <h1 className='text-4xl font-bold mb-10'>Courses</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12'>
                {
                    [1, 2, 3, 4].map(c =>
                        <div key={c} className='dark:bg-custom-gray-200 relative z-30  rounded-3xl shadow-lg py-6 px-12 flex border bg-slate-100'>
                            <div className='space-y-5 w-3/4'>
                                <div className='flex items-center gap-4'>
                                    <div className='bg-[#5E5B71] px-2  rounded-2xl'>
                                        <Image src={courseIcon} alt='course icon' width={50} height={50} />
                                    </div>
                                    <h2 className='font-semibold'>Data Science</h2>
                                </div>
                                <p className='leading-7'>Lorem ipsum dolor sit amet, elit. Imperdiet at at varius commodo pharetra odio sollicitudin. </p>
                                <Button variant='default' className='rounded-full px-12 py-5 font-medium text-lg dark:bg-white dark:text-black' >Enroll</Button>
                            </div>
                            <div className='relative z-20 w-1/4'>
                                <Image src={coursePerson} alt='Course Person' width={100} height={100} className='h-full w-full relative  z-20' />
                                <div className="absolute z-[1] inset-7 filter blur-3xl  bg-[#FFF] bg-opacity-70 rounded-full"></div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Course