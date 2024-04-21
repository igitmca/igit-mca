import React from 'react'
import '@/styles/Profile.scss'
import user from '@/assets/Profile/user.svg'
import { AiOutlineEye } from 'react-icons/ai'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MdOutlineModeEditOutline } from 'react-icons/md'

const Profile = () => {
    return (
        <div className='profile'>
            {/* <div className="profile__navbar"></div> */}
            <div className="profile__container">
                <div className="profile__container__left space-y-5">
                    <div className="profile__container__left__datalist">
                        <Label htmlFor="Name">Name</Label>
                        <Input type="text" id="Name" placeholder="Name" />
                    </div>
                    <div className="profile__container__left__datalist">
                        <Label htmlFor="phone">Phone</Label>
                        <div className="profile__container__left__datalist__phone">
                            <span>+91</span>
                            <Input type="text" id="phone" placeholder="10 digit number" inputMode='numeric' className='profile__container__left__datalist__phone__input' />
                        </div>
                    </div>
                    <div className="profile__container__left__datalist">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id='email' placeholder="abc@gmail.com" inputMode='email' />
                    </div>
                    <div className="profile__container__left__batchSelect">
                        <Label htmlFor="batch">Batch</Label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select Batch" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Batch</SelectLabel>
                                    <SelectItem value="42">42</SelectItem>
                                    <SelectItem value="41">41</SelectItem>
                                    <SelectItem value="40">40</SelectItem>
                                    <SelectItem value="39">39</SelectItem>
                                    <SelectItem value="38">38</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="profile__container__left__datalist">
                        <Label htmlFor="company">Company</Label>
                        <Input type="text" id="company" placeholder="Wipro" />
                    </div>
                    <div className="profile__container__left__datalist">
                        <Label htmlFor="linkedIn">LinkedIn</Label>
                        <Input type="text" id="linkedIn" placeholder="LinkedIn Profile" />
                    </div>
                    <div className="profile__container__left__datalist">
                        <Label htmlFor="instagram">Instagram</Label>
                        <Input type="text" id="Instagram" placeholder="Instagram Profile" />
                    </div>
                    <div className="profile__container__left__btn">
                        <button>Update</button>
                    </div>
                </div>
                <div className="profile__container__right">
                    <div className="profile__container__right__user">
                        <label htmlFor="profile">
                            <Image src={user} alt='user' />
                            <div className='profile__container__right__user__edit'>
                                <MdOutlineModeEditOutline size={'1.4rem'} color="white" />
                            </div>
                        </label>
                        <input type="file" name="profile" id="profile" className='hidden' />
                    </div>
                    <div className="profile__container__right__container">
                        <h2>Current Enrolled Course</h2>
                        <div className='profile__container__right__container__courses'>
                            <div className='profile__container__right__container__courses__course'>
                                <label>1. React Js</label><AiOutlineEye className='eye' size={'1.5rem'} />
                            </div>
                            <div className='profile__container__right__container__courses__course'>
                                <label>2. Node Js</label><AiOutlineEye className='eye' size={'1.5rem'} />
                            </div>
                            <div className='profile__container__right__container__courses__course'>
                                <label>3. Core Java</label><AiOutlineEye className='eye' size={'1.5rem'} />
                            </div>
                        </div>
                        <p>You can enroll new course.</p>
                        <div className='profile__container__right__container__enrollBtn'>
                            <button className=''>Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile