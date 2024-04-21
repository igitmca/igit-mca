'use client'
import FolderIcon from '@/assets/icons/folder-open-outline.svg';
import NotesIcon from '@/assets/icons/notes.svg';
import GithubIcon from '@/assets/icons/Social Icons.svg';
import { stick_No_Bills } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Notes } from '@/services/apis/Notes';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { camelCase, startCase } from 'lodash';

const cardColorProperty = [
    { bgColor: '#EC9E14', shadowColor: 'rgba(236, 158, 20, 0.50)' },
    { bgColor: '#6614EC', shadowColor: 'rgba(102, 20, 236, 0.50)' },
    { bgColor: '#A714EC', shadowColor: 'rgba(167, 20, 236, 0.50)' },
    { bgColor: '#EC7C14', shadowColor: 'rgba(236, 124, 20, 0.50)' },
    { bgColor: '#EC14A3', shadowColor: 'rgba(236, 20, 163, 0.50)' },
    { bgColor: '#EC1414', shadowColor: 'rgba(218, 19, 19, 0.50)' },
]
const semesterNames: { [key: string]: string } = {
    'firstsemester': 'First Semester',
    'secondsemester': 'Second Semester',
    'thirdsemester': 'Third Semester',
    'fourthsemester': 'Fourth Semester',
};

const Semester = ({ params }: { params: { semester: string } }) => {
    const swiperRef = useRef<SwiperType>();
    const semesterName = semesterNames[params.semester] || startCase(params.semester);
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchNotesBySemester = useCallback(async () => {
        setIsLoading(true);
        try {
            const notes = new Notes();
            const data = await notes.fetchNotesBySemester(params.semester);
            if (data) {
                setSubjects(data.data);
                localStorage.setItem(params.semester, JSON.stringify(data.data));
            }
        } catch (error) {
            console.log('Error in fetching notes by semester', error);
        } finally {
            setIsLoading(false);
        }
    }, [params.semester]);

    useEffect(() => {
        const dataFromLocalStorage = localStorage.getItem(params.semester);
        if (dataFromLocalStorage) {
            const jsonData = JSON.parse(dataFromLocalStorage);
            setSubjects(jsonData);
            setIsLoading(false);
        } else {
            fetchNotesBySemester();
        }
    }, [fetchNotesBySemester, params.semester])
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1 className='text-4xl font-bold'>{semesterName}</h1>
            <div className="relative">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={80}
                    breakpoints={{
                        390: {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 80,
                        },
                    }}
                    effect={"fade"}
                    pagination={{
                        clickable: true,
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    loop={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="md:w-11/12 mx-auto w-[90%] px-4"
                >
                    {
                        subjects?.map(({ name, teacher, image, links, questionLink }, i) => {
                            const { bgColor } = cardColorProperty[i];
                            const notesLink = links.find(link => link.title === 'Course Material')?.link
                            const assignmentLink = links.find(link => link.title === 'Assignment Link')?.link
                            return (
                                <SwiperSlide key={i} className="justify-center my-20 items-center" style={{ display: 'flex' }}>
                                    <div className="rounded-[2rem]  hover:shadow-2xl md:hover:shadow-[#fafafa80] w-full md:w-[70%] h-[28.375rem]  md:mb-16 md:ml-16 transition-all ease-in duration-300 cursor-pointer" style={{ backgroundColor: `${bgColor}` }} >
                                        <div className={`${stick_No_Bills.className} p-4 md:p-8`}>
                                            <div className='relative'>
                                                <div
                                                    className='border-2 border-[#ffffff33] h-[8.063rem] rounded-[2.2rem] shadow-2xl shadow-[#6d6d6d80] px-3 py-2 '
                                                    style={{ filter: 'drop-shadow(6px 16px 50px rgba(0, 0, 0, 0.50))', backgroundColor: `${bgColor}` }}
                                                >
                                                    <h2 className='text-2xl text-foreground text-white font-semibold'>
                                                        {name}
                                                    </h2>
                                                </div>
                                                <h3 className='text-2xl text-white font-extrabold relative z-10 pt-2'>{teacher}</h3>
                                                <Image src={image} width={100} height={100} alt='profileImg' className='w-24 h-24  rounded-full border-2 border-white shadow-xl shadow-black/50 absolute right-[15%] bottom-6 md-bottom-0' />
                                            </div>
                                            <div className='space-y-2'>
                                                <Link href={notesLink || ''} target='_blank' className='flex flex-wrap gap-6 mt-10'>
                                                    <div className={cn('bg-white p-3 rounded-xl flex items-center justify-around w-[45%]', !notesLink && 'cursor-not-allowed')}>
                                                        <h4 className='text-2xl font-extrabold text-[#33363F]'>Notes</h4>
                                                        <Image src={NotesIcon} alt='NotesIcon' width={100} height={100}
                                                            className='w-8'
                                                        />
                                                    </div>
                                                </Link>
                                                <Link href={questionLink || ''} target='_blank' className={cn('bg-white p-3 rounded-xl flex items-center justify-around w-[47%]', !questionLink && 'cursor-not-allowed')}

                                                >
                                                    <h4 className='text-2xl font-extrabold text-[#33363F]'>Question</h4>
                                                    <Image src={FolderIcon} alt='FolderIcon' width={100} height={100}
                                                        className='w-8'
                                                    />
                                                </Link>
                                                <Link href={assignmentLink || ''} target='_blank' className={cn('bg-white p-3 rounded-xl flex items-center justify-center gap-2 w-full', !assignmentLink && 'cursor-not-allowed')}>
                                                    <h4 className='text-2xl font-extrabold text-[#33363F]'>Assignment</h4>
                                                    <Image src={GithubIcon} alt='GithubIcon' width={100} height={100}
                                                        className='w-8'
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }

                        )
                    }

                </Swiper>

                <div
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="bg-white text-black absolute top-1/2 w-9 h-9  justify-center items-center cursor-pointer 
       left-0 md:left-0 rounded-full shadow-md shadow-slate-200 hidden md:flex"
                >
                    <IoIosArrowBack className="text-2xl" />
                </div>

                <div onClick={() => {
                    swiperRef.current?.slideNext()
                }}
                    className="bg-[#FFC27A] absolute top-1/2 w-9 h-9  justify-center items-center cursor-pointer 
       right-0 md:right-0 rounded-full shadow-lg shadow-[#ffc17a81] hidden md:flex"
                >
                    <IoIosArrowBack className="rotate-180 text-2xl" />
                </div>

            </div>
        </div>
    )
}

export default Semester