'use client'
import Logo from '@/assets/logo.svg'
import { cn } from '@/lib/utils'
import { LogOut, Settings } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { buttonVariants } from '../ui/button'
import Image from 'next/image'
import { ModeToggle } from '../Theme/theme-toggle'
import { useAppSelector } from '@/state/hooks'
import { Menu } from '@mantine/core'
import { auth } from '@/auth'
import { signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
const navLinks = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Batch',
    href: '/batch'
  },
  {
    name: 'Notes',
    href: '/notes'
  },
  {
    name: 'Memories',
    href: '/memories'
  },
  {
    name: 'About',
    href: '/about'
  },
]

const Header = () => {
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isActiveRoute = (route: string) => pathname === route;
  const { data: session } = useSession();

  useEffect(() => {
    setIsSideBarOpened(false)
  }, [pathname]);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsSideBarOpened(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);




  return (
    <nav className='sticky z-50  left-0 right-0 top-2 lg:top-6 md:left-8 md:right-8 md:top-8  mx-auto my-0  transition-all duration-300 bg-background rounded-bl-md rounded-br-md shadow-md' ref={menuRef}>
      <div className='relative flex items-center  justify-center py-4 transition-all duration-300 '>
        <div className='flex w-[95%] max-w-maxScreen justify-between items-center'>
          <Link href='/' className='relative z-20 flex items-center gap-4 cursor-pointer'>
            <Image src={Logo} alt='logo' width={100} height={40} className='w-10 h-10' />
            <h1 className='text-4xl font-bold'>IGIT MCA</h1>
          </Link>
          <ul className='hidden items-center gap-x-6 md:flex'>
            {
              navLinks.map(({ name, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn('py-5  font-semibold text-lg leading-5 relative group flex gap-1 items-center hover:text-blue-600 transition-all duration-150', isActiveRoute(href) && 'text-blue-600')}
                  >
                    <span>{name}</span>
                  </Link>
                </li>
              ))
            }
          </ul>
          {/* Desktop */}
          <div className='flex items-center gap-2'>
            {
              !session?.user ? (
                <div className={cn('hidden items-center gap-x-2  md:flex')} >
                  <Link href='/signin' className={cn(buttonVariants({ variant: "secondary" }), 'rounded-full px-8 py-6 font-semibold')}>Sign In</Link>
                  <div className='p-[2px] rounded-full' style={{ background: 'linear-gradient(90deg,rgba(115, 83, 229, 0.70) 6.77%,rgba(206, 77, 164, 0.70),rgba(206, 77, 164, 0.70))' }}>
                    <button className='bg-transparent rounded-full px-8 py-3 font-medium text-white' onClick={() => router.push('/signup')}  >Sign Up</button>
                  </div>
                </div>
              ) :
                (
                  <div>
                    <Menu shadow="md" width={200} position='bottom'>
                      <Menu.Target>
                        <Avatar className='w-12 h-12 cursor-pointer'>
                          <AvatarImage src={session.user?.image || ''}/>
                          <AvatarFallback>{session.user?.name?.split("")[0]}</AvatarFallback>
                        </Avatar>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item >
                          {session.user?.name}
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item leftSection={<Settings />} >
                          Profile
                        </Menu.Item>
                        <Menu.Item leftSection={<LogOut />}
                          onClick={()=>signOut()}
                        >
                          Log Out
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </div>
                )
            }
            <ModeToggle />
          </div>
          {/* Mobile */}
          <div className='flex items-center md:hidden'>
            <div className='relative flex h-[52px] w-[66px] cursor-pointer flex-col items-end justify-between p-[0.8rem] lg:hidden' style={{ WebkitTapHighlightColor: 'transparent' }} onClick={() => setIsSideBarOpened(prev => !prev)} >
              <span className={cn(' bg-foreground w-10 rounded-md py-[2px] transition-all duration-300', isSideBarOpened ? 'absolute top-1/2 rotate-45 ' : 'false')}></span>
              <span className={cn('rounded-md bg-foreground transition-all duration-300', isSideBarOpened ? 'w-10 absolute top-1/2 py-0 opacity-0 ' : 'w-8 py-[2px] ')}></span>
              <span className={cn('bg-foreground rounded-md py-[2px] transition-all duration-300', isSideBarOpened ? 'w-10 absolute top-1/2 -rotate-45' : 'w-6 false')}></span>
            </div>

          </div>

        </div>
      </div>
      <div className={cn(isSideBarOpened ? 'animate__animated animate__fadeIn animate__faster absolute top-full left-0 right-0 z-50 backdrop-blur-lg pt-[10vh] pb-[8vh]  md:hidden  opacity-1 pointer-events-auto visible transition-all duration-300' : 'animate__animated animate__fadeIn animate__faster absolute top-full left-0 right-0 z-50 backdrop-blur-lg pt-[10vh] pb-[8vh]  md:hidden  pointer-events-none hidden opacity-0 transition-all duration-300')} style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', boxShadow: 'rgba(157, 157, 157, 0.2) 0px 4px 10px' }}>
        <ul className='flex flex-col items-center gap-y-6 md:hidden select-none'>
          {
            navLinks.map(({ name, href }) => (
              <li className='text-center' key={href}>
                <Link target={`${name !== 'About' ? '_self' : '_blank'}`} className="text-xl font-medium leading-5" href={href}>{name}</Link>
              </li>
            ))
          }
        </ul>
        <div className='mt-6 flex w-full flex-col items-center justify-center gap-2 md:hidden'>
          <Link href='/signin' className={cn(buttonVariants({ variant: "secondary" }), 'rounded-full')}>Sign In</Link>
          <div className='p-[2px] rounded-full' style={{ background: 'linear-gradient(90deg,rgba(115, 83, 229, 0.70) 6.77%,rgba(206, 77, 164, 0.70),rgba(206, 77, 164, 0.70))' }}>
            <button className='bg-transparent rounded-full font-medium px-8 py-3 ' onClick={() => router.push('/signup')}  >Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header