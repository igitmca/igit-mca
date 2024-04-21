import Image from 'next/image'
import './UserProfile.scss'
import { MdEmail } from 'react-icons/md'
import { FaInstagram } from 'react-icons/fa6'
import { BsLinkedin } from 'react-icons/bs'
import { poppins } from '@/lib/fonts'
interface UserProfileProps {
    id: number;
    profilePic: string,
    name: string,
    rollNumber: number,
    company: string,
    email: string,
    insta: string,
    linkedIn: string
}
const UserProfile: React.FC<UserProfileProps> = ({ id, profilePic, name, rollNumber, company, email, insta, linkedIn }) => {
    return (
        <div className="team__member">
            <div className="team__member__img">
                <Image className='aspect-square w-full h-52' src={profilePic} alt={name} width={100} height={100} />
            </div>
            <div className="team__member__info">
                <h4 className={poppins.className}>{name}</h4>
                {/* <p>{designation}</p> */}
            </div>
            <div className="team__member__socials">
                <a href={`mailto:${email}`} target='_blank'>
                    <MdEmail className='w-7 h-7 text-gray-800 dark:text-white' />
                </a>
                <a href={insta} target='_blank'>
                    <FaInstagram className='w-6 h-6 text-gray-800 dark:text-white' />
                </a>
                <a href={linkedIn} target='_blank'>
                    <BsLinkedin className='w-6 h-6 text-gray-800 dark:text-white' />
                </a>
            </div>
        </div>
    )
}

export default UserProfile