'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import '@/styles/BatchView.scss'
import user1 from '@/assets/images/user.svg'
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { poppins } from '@/lib/fonts'
import UserProfile from '@/components/UserProfile/UserProfile';
import { BatchService } from '@/services/apis/Batch'



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
  },
  {
    id: 4,
    imgSrc: user1,
    userName: 'Abhisek Satpathy',
    designation: 'CR'
  },
  {
    id: 5,
    imgSrc: user1,
    userName: 'Abhisek Satpathy',
    designation: 'CR'
  },
  {
    id: 6,
    imgSrc: user1,
    userName: 'Abhisek Satpathy',
    designation: 'normal'
  },
  {
    id: 7,
    imgSrc: user1,
    userName: 'Abhisek Satpathy',
    designation: 'normal'
  },
  {
    id: 8,
    imgSrc: user1,
    userName: 'Abhisek Satpathy',
    designation: 'normal'
  },
  {
    id: 9,
    imgSrc: user1,
    userName: 'Abhisek Satpathy',
    designation: 'normal'
  },
]

const BatchView = ({ params }: { params: { id: string } }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [batchStudents, setBatchStudents] = useState<any[]>([]);
  useEffect(() => {
    setIsLoading(true);
    const batchService = new BatchService();
    const fetchBatchDetails = async () => {
      try {
        const data = await batchService.fetchBatchDetails(params.id);
        // save to the state and redux
        setBatchStudents(data);
      } catch (error) {
        console.log('Error in fetching batch details', error)
      } finally {
        setIsLoading(false);
      }
    };
    fetchBatchDetails();

  }, [params.id]);
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className='batch'>
      <div className="batch__container">
        {
          batchStudents?.map((user) =>
            <UserProfile
              key={user.id}
              {...user}
            />)
        }
      </div>
    </div>
  )
}

export default BatchView