import aboutus from '@/assets/AboutUsPage/aboutpng.svg'
import user1 from '@/assets/AboutUsPage/user.svg'
import UserProfile from '@/components/UserProfile/UserProfile'
import { poppins, roboto } from '@/lib/fonts'
import { ActionIcon } from '@mantine/core'
import { Github } from 'lucide-react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa6'

const Data = [
    {
        id: 1,
        imgSrc: user1,
        userName: 'Abhisek Satpathy',
        designation: 'CR'
    },
    {
        id: 2,
        imgSrc: user1,
        userName: 'Abhisek Satpathy',
        designation: 'CR'
    },
    {
        id: 3,
        imgSrc: user1,
        userName: 'Abhisek Satpathy',
        designation: 'CR'
    }
]

const AboutUsPage = () => {
    return (
        <div className=''>
            <div className="flex items-center">
                <div className="">
                    <Image src={aboutus} alt='aboutus' className='w-full h-full' />
                </div>
                <div className="">
                    <h1 className={`${poppins.className} text-3xl font-semibold`}>About</h1>
                    <p className={`${roboto.className} leading-8 tracking-normal text-xl`}>This website designed and developed by MCA 40th batch.This website helps you to connect with your seniors.This website souce code is placed on Github. You can go to our github repository and can contribute this repo.</p>
                    <h3 className='mt-4 font-medium italic'>
                        This is an open source project. You can contribute to this project by visiting our github repository.
                        <ActionIcon variant='subtle' color='blue' >
                            <a href='https://github.com/igitmca/igit-mca.git' target='_blank'>
                                <FaGithub />
                            </a>
                        </ActionIcon>
                    </h3>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
                {
                    Data.map(({ id, imgSrc, userName, designation }) => <UserProfile
                        key={id}
                        userName={userName}
                        designation={designation}
                        imgSrc={imgSrc}
                    />)
                }
            </div>
        </div>
    )
}

export default AboutUsPage