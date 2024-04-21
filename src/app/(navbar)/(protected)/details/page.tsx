import React from 'react'
import '@/styles/CourseDetails.scss'

import Image from 'next/image'
import icon1 from '@/assets/icons/htmlicon.svg'



const CourseDetails = () => {
    return (
        <div className='coursedetails'>
            <div className="coursedetails__left">
                <h2>Course Content</h2>
                <div className="coursedetails__left__container">
                    <h3>Introduction to WEB</h3>
                    <ul>
                        <li>WEB W3C and W3C Members</li>
                        <li>Why WHATWG?</li>
                        <li>What is Web?</li>
                    </ul>
                    <h3>HTML Basics</h3>
                    <ul>
                        <li>Introduction</li>
                        <li>Pairs in HTML document</li>
                        <li>Editors</li>
                        <li>Basic</li>
                        <li>Elements</li>
                        <li>Atributes</li>
                        <li>Headings</li>
                        <li>Basics</li>
                        <li>Paragraphs</li>
                        <li>Formatting</li>
                        <li>Links</li>
                        <li>Head</li>
                        <li>CSS</li>
                        <li>images</li>
                        <li>Tables</li>
                        <li>JavaScript</li>
                        <li>HTML XHTML</li>
                        <li>HTML4 Drawbacks</li>
                    </ul>
                    <h3>HTML5 Introduction</h3>
                    <ul>
                        <li>HTML5 History</li>
                        <li>New Features and Groups</li>
                        <li>Backward Compatibility</li>
                        <li>Why HTML5 ?</li>
                        <li>Power of HTML5</li>
                        <li>m or mobi or touch domains</li>
                        <li>Common Terms in HTML5</li>
                    </ul>
                </div>
            </div>
            <div className="coursedetails__right">
                <div className="coursedetails__right__card">
                    <div className="coursedetails__right__card__img">
                        <Image src={icon1} alt='course' />
                    </div>
                    <div className='coursedetails__right__card__details'>
                        <h3><span>Course Name-</span> HTML & CSS </h3>
                        <h3><span>Teacher Name-</span> Sudhakar Sharma</h3>
                        <div className="coursedetails__right__card__details__btn">
                        <button>Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails