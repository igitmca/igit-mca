import React from 'react'
import './notes.scss'
import Image from 'next/image';
import persontakingnotesImg from '@/assets/notes_image.svg';
import { stick_No_Bills } from '@/lib/fonts';
import Link from 'next/link';

const Notes=()=> {
  return (
    <div className='notes'>
      <h1 className='notes__heading '>
        Notes
      </h1>
      <div className="notes__container">
        <div className="notes__container__left">
          <Link href='notes/firstsemester' className="notes__container__left__card dark:bg-custom-gray-100 bg-gray-100/80">
            <div className="notes__container__left__card__logo logo1">
              <h3 className={`${stick_No_Bills.className}`}>C</h3>
            </div>
            <div className="notes__container__left__card__content">
              <h4>First Semester</h4>
              <br />
              <p>C,COA,ECO,English,Math</p>
            </div>
          </Link>
          <Link href='notes/secondsemester' className="notes__container__left__card dark:bg-custom-gray-100 bg-gray-100/80">
            <div className="notes__container__left__card__logo logo2">
              <h3 className={`${stick_No_Bills.className}`}>C++</h3>
            </div>
            <div className="notes__container__left__card__content">
              <h4>Second Semester</h4>
              <br />
              <p>C++,DADS,OS,FLAT,DBMS</p>
            </div>
          </Link>
          <Link href='notes/thirdsemester' className="notes__container__left__card dark:bg-custom-gray-100 bg-gray-100/80">
            <div className="notes__container__left__card__logo logo3">
              <h3 className={`${stick_No_Bills.className}`}>Java</h3>
            </div>
            <div className="notes__container__left__card__content">
              <h4>Third Semester</h4>
              <br />
              <p>Java,IOT,DWDM,DCCN</p>
            </div>
          </Link>
          <Link href='notes/fourthsemester' className="notes__container__left__card dark:bg-custom-gray-100 bg-gray-100/80">
            <div className="notes__container__left__card__logo logo4">
              <h3 className={`${stick_No_Bills.className}`}>Python</h3>
            </div>
            <div className="notes__container__left__card__content">
              <h4>Fourth Semester</h4>
              <br />
              <p>Python,AI,Software Eng.</p>
            </div>
          </Link>
        </div>
        <div className="notes__container__right">
          <Image src={persontakingnotesImg} alt='author image not found ' width={200} height={100} className='notes__container__right__image' />
          <div className='notes__container__right__bg'></div>
        </div>
      </div>
    </div>
  )
}

export default Notes;