'use client'
import saly from '@/assets/images/Saly-36.svg'
import { roboto } from '@/lib/fonts'
import { BatchService } from '@/services/apis/Batch'
import '@/styles/batch.scss'
import { getOrdinal } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

const BatchPage = () => {
    const [allBatchList, setAllBatchList] = useState<number[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchAllBatchList = useCallback(async () => {
        setIsLoading(true);
        const batchService = new BatchService();
        try {
            const res = await batchService.getAllBatchList();
            setAllBatchList(res);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }, []);
    useEffect(() => {
        const batchService = new BatchService();
        batchService.getAllBatchList().then((res) => {
            setAllBatchList(res);
        }).catch((err) => {
            console.error(err);
        });
    }, []);
    return (
        <div className='batches'>
            {
                allBatchList?.map((batch) => {
                    const startYear:number = 2021 + (batch - 40);
                    const endYear = startYear + 2;
                    const yearRange = `${startYear}-${endYear}`;
                    const batchOrdinal = getOrdinal(batch);
                    return (
                        <Link href={`/batch/${batch}`} className="batches__container" key={batch}>
                            <span className='batches__container__btn'>{yearRange}</span>
                            <h3 className={roboto.className}>MCA {batchOrdinal} Batch</h3>
                            <div className="batches__container__photo">
                                <Image src={saly} className='batches__container__photo__3d' alt='photo' />
                                <div className="batches__container__photo__ellipse">

                                </div>
                            </div>
                        </Link>
                    );
                })
            }
        </div>
    )
}

export default BatchPage