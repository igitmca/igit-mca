import './heroSection.scss'
import Image from 'next/image';
import heroImage from '@/assets/herosectionImage.svg'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

const HeroSection = () => {
  return (
    <div className={`heroSection`}>
      <div className='heroSection__left'>
        <h2 className='heroSection__left__h1'>Guiding the Next Generation</h2>
        <h2 className='heroSection__left__h2'>Nurturing Tomorrow &apos; Talent</h2>
        <p className='heroSection__left__p'>Welcome to our platform dedicated to empowering the juniors of our community. We provide comprehensive notes and valuable resources, alongside connecting you with seasoned seniors who are ready to mentor and guide you on your path to success. Join our network and forge connections with alumni members, creating a legacy of support and growth. </p>
        <div className=''>
          <Link
            href='/signup'
            className={cn(buttonVariants({ variant: 'default' }), 'rounded-full bg-transparent border-2 mt-4 py-5 px-10 dark:hover:bg-gray-800 text-black dark:text-white hover:bg-gray-100')}
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className='heroSection__right'>
        <div className='heroSection__right__bg'></div>
        <Image className='heroSection__right__img' src={heroImage} alt="Image of the Hero" height={100} width={100} />
      </div>
    </div>
  )
}

export default HeroSection;
