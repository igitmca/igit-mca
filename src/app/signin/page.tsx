'use client'
import hero from '@/assets/SignUp/Character 1.svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signInwithGooglePopup } from '@/firebase/Auth';
import { useAppDispatch } from '@/state/hooks';
import '@/styles/SignUp.scss';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { BsEye } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { GoEyeClosed } from 'react-icons/go';
import { RiLoader5Fill } from "react-icons/ri";

const SignIn = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    
    return (
        <div className='signup dark:bg-[#13111A] min-h-screen overflow-hidden'>
            <div className="signup__container">
                <div className="signup__container__left">
                    <div className="signup__container__left__register">
                        <h1>Sign Up to <br /> <span>Connectivity</span></h1>

                        <h2>If you don&apos;t have an account <br />you can
                            <Link href="/signup" className='ml-2'>Register here!</Link></h2>
                    </div>
                    <div className="signup__container__left__hero">
                        <div className='signup__container__left__hero__bg'>

                        </div>
                        <Image src={hero} alt='Hero' className='signup__container__left__hero__image' />
                    </div>
                </div>
                <div className="signup__container__right">
                    <div className="space-y-2">
                        <Label className='font-medium'>Email</Label>
                        <Input
                            type="email"
                            placeholder='abc@domain.com'
                            className='py-5 '
                        />
                    </div>
                    <div>
                        <div className="space-y-2">
                            <Label className='font-medium'>Password</Label>
                            <div className='relative'>
                                <Input
                                    type={passwordVisible ? 'text' : 'password'} placeholder='Enter Password'
                                    className='py-5'
                                />
                                <div
                                    className='absolute right-4 top-3 cursor-pointer'
                                    onClick={() => setPasswordVisible(!passwordVisible)} >
                                    {
                                        passwordVisible ? <GoEyeClosed size='1.2rem' /> : <BsEye size='1.2rem' />
                                    }

                                </div>
                            </div>
                        </div>
                        {/* <a href="">Forget Password ?</a> */}
                    </div>
                    <div className="">
                        <Button
                            className='bg-[#EC9E14] py-5 text-lg hover:bg-[#fdb334] w-full'
                        >
                            Sign Up
                        </Button>
                    </div>
                    <div className="signup__container__right__divider">
                        <div className='line'></div><span>Or continue with</span><div className='line' ></div>
                    </div>
                    <div className="flex">
                        <Button
                            variant='secondary'
                            onClick={()=>signIn('google',{callbackUrl:'/'})}
                            disabled={isLoading}
                            className='bg-primary-foreground rounded-full w-full flex justify-center  py-7'
                        >
                            {
                                isLoading ? <RiLoader5Fill className='w-12 h-12 animate-spin' /> : <div className='flex items-center'>
                                    <FcGoogle size='1.5rem' />
                                    <span className='ml-3 font-semibold'>Sign In with Google</span>
                                </div>
                            }
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn