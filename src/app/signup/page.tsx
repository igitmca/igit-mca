'use client'
import signupHero from '@/assets/SignIn/SignInHero.svg'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { BsEye } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { GoEyeClosed } from 'react-icons/go'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    return (
        <div className='min-h-screen flex items-center'>
            <div className="w-full py-10 md:py-0 grid md:grid-cols-2 px-12">
                <div className="">
                    <h2 className='text-3xl font-semibold tracking-wider break-words whitespace-nowrap'>Sign Up to join our Community</h2>
                    <div className="flex items-center">
                        <div className="">
                            <h2>If you have already account</h2>
                            <Link className={cn(buttonVariants({variant:'link'}),'pl-0')} href='/signin' >Login here!</Link>
                        </div>
                        <div className="">
                            <Image src={signupHero} alt='Hero' className='hero' />
                        </div>
                    </div>
                </div>

                <div className="space-y-5">
                    <div className="space-y-3">
                        <label htmlFor="email" className='font-medium text-lg'>Enter Email</label>
                        <Input
                            type="email"
                            placeholder='abc@gmail.com'
                            id='email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='py-5'
                        />
                    </div>
                    <div className="space-y-3">
                        <label htmlFor="password">Password</label>
                        <div className='relative'>
                            <Input
                                type={passwordVisible ? 'text' : 'password'} placeholder='Enter Password'
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='py-5'
                            />
                            <div className='absolute right-3 top-3 cursor-pointer' onClick={() => setPasswordVisible(!passwordVisible)} >
                                {
                                    passwordVisible ? <GoEyeClosed size='1.2rem' /> : <BsEye size='1.2rem' />
                                }

                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label htmlFor="confirmPassword">Confirm</label>
                        <div className='relative'>
                            <Input
                                type={confirmPasswordVisible ? 'text' : 'password'} placeholder='Confirm Password'
                                id='confirmPassword'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className='py-5 dark:bg-[#1E1E1E]'
                            />
                            <div className='absolute top-3 right-3 cursor-pointer' onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                                {
                                    confirmPasswordVisible ? <BsEye size='1.2rem' /> : <GoEyeClosed size='1.2rem' />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="pt-5">
                        <Button
                            className='dark:bg-[#EC9E14] w-full py-6 text-lg tracking-wider'
                        >
                            Sign Up
                        </Button>
                    </div>
                    <div className="flex items-center justify-center">
                        <hr className='bg-white h-1 text-white w-[35%] rounded-full' />
                        <span className='text-center mx-2'>Or continue with</span>
                        <hr className='bg-white h-1 text-white w-[35%] rounded-full' />
                    </div>
                    <div className="">
                        <Button
                            variant='secondary'
                            className='bg-primary-foreground rounded-full w-full flex justify-center  py-7'
                        >
                            <FcGoogle size='2rem' />
                            <span className='ml-3'>Sign up with Google</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp