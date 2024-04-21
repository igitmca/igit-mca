'use client'
import hero from '@/assets/Register/hero.svg'
import logo from '@/assets/Register/logo.svg'
import user from '@/assets/Register/user.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { cn } from '@/lib/utils'
import { BatchService } from '@/services/apis/Batch'
import { registerValidator, TRegisterValidator } from '@/utils/validator/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './register.scss'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RiLoader5Fill } from 'react-icons/ri'
import { FirebaseBucketStorage } from '@/firebase/CloudStorage'
import { FireStoreCollection } from '@/firebase/FireStore/collection'
import { useAppDispatch, useAppSelector } from '@/state/hooks'
import { setUserValue } from '@/state/User/slice.User'
import { useRouter } from 'next/navigation'

const Register = () => {
    const userGoogleDetails = useAppSelector((state) => state.google);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [batchList, setBatchList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<TRegisterValidator>({
        defaultValues: {
            name: userGoogleDetails?.displayName || '',
            email: userGoogleDetails?.email || '',
            contact: '',
            batch: 40,
            company: '',
            linkedIn: '',
            instagram: '',
        },
        resolver: zodResolver(registerValidator),
    });
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const [photoDetails, setPhotoDetails] = useState<{
        fileName: string;
        fileType: string;
        fileSize: number;
    }>()
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const image = e.target.files?.[0];
        if (image) {
            const fileName = image.name;
            const fileType = image.type;
            const fileSize = image.size;
            setPhotoPreview(URL.createObjectURL(image));
            setValue('profilePic', image); // Set value of file input field
            setPhotoDetails({ fileName, fileSize, fileType });
        }
    }
    const setAllBatchList = useCallback(async () => {
        const batchService = new BatchService();
        try {
            setBatchList(await batchService.getAllBatchList());
        } catch (error) {
            console.log(error)
        }
    }, []);
    useEffect(() => {
        setAllBatchList();
    }, [setAllBatchList]);
    const storeData = async (profilePic: File) => {
        try {
            const studentPhotoLink = new FirebaseBucketStorage("studentsPhoto");
            const imageServerUrl = await studentPhotoLink.storeObjectAndGetUrl(
                photoDetails?.fileName || 'student profile pic' + new Date().getTime(),
                profilePic,
                profilePic.type as any
            );
            return imageServerUrl;
        } catch (err) {
            throw Error("Error in Image Upload");
        }
    };
    const setDataOfTheUser = (data: any) => {
        dispatch(
            setUserValue({
                batch: data.batch,
                company: data.company,
                contact: data.contact,
                email: data.email,
                insta: data.email,
                linkedIn: data.linkedIn,
                name: data.name,
                profilePic: data.profilePic,
            })
        );
    };
    const handleRegister = async (data: TRegisterValidator) => {
        try {
            setIsLoading(true);
            const imageUploadData = await storeData(data.profilePic);
            const userRegister = new FireStoreCollection("User");
            const userDataToUpload = { ...data, verifyed: false, profilePic: imageUploadData };
            await userRegister.addDocumentWithId({
                data: userDataToUpload,
                specificId: userGoogleDetails.email,
                customCollectionPath: "User",
            });
            // after sucessful addition this adds it to the state manager
            setDataOfTheUser(userDataToUpload);
            router.push('/')
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className='register__container'>
            <div className="register__container__left">
                <h1>Join the Comunity</h1>
                <div className="register__container__left__image">
                    <Image src={hero} alt='' className='w-3/4 md:w-full' />
                    <div className="register__container__left__image__bg">

                    </div>
                </div>
            </div>
            <div className="register__container__right" >
                <div className='register__container__right__logodiv'>
                    <Image src={logo} alt='logo' id='photo' className='logo' />
                </div>
                <form
                    className="register__container__right__form"
                    onSubmit={handleSubmit(handleRegister)}
                >
                    <div className="register__container__right__form__input flex flex-col justify-end">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            type="text"
                            placeholder="John"
                            id="name"
                            {...register('name')}
                            className={cn(errors.name && 'focus-visible:ring-red-500 focus-visible:text-red-500')}
                            disabled={userGoogleDetails?.displayName ? true : false}
                        />
                        <span className='text-red-500 text-xs'>{errors.name?.message}</span>
                    </div>
                    <div className="register__container__right__form__input flex flex-col justify-end">
                        <label htmlFor="file-upload" className={cn('bg-background rounded-lg w-28 h-28 flex items-end cursor-pointer', errors.profilePic && 'border border-red-600')} >
                            <Image src={photoPreview ?? user} alt='user' width={100} height={100} className='w-28 h-28 rounded-lg' />
                        </label>
                        {
                            errors.profilePic && <span className='text-red-500 text-sm font-medium'>Profile pic is required</span>
                        }
                        <input id="file-upload" type="file" className='hidden' onChange={handleImageChange} />
                    </div>
                    <div className="register__container__right__form__input">
                        <Label htmlFor="contact">Phone No.</Label>
                        <Input
                            type="text"
                            id="contact"
                            {...register('contact')}
                            className={cn(errors.contact && 'focus-visible:ring-red-500 focus-visible:text-red-500')}
                            placeholder='+91 9876543210'
                        />
                        <span className='text-red-500 text-xs'>{errors.contact?.message}</span>
                    </div>
                    <div className="register__container__right__form__input">
                        <Label htmlFor="email">Email Id</Label>
                        <Input type="email" id="email"
                            {...register('email')}
                            className={cn(errors.email && 'focus-visible:ring-red-500 focus-visible:text-red-500')}
                            placeholder='abc@domain.com'
                            disabled={userGoogleDetails?.email ? true : false}
                        />
                        <span className='text-red-500 text-xs'>{errors.email?.message}</span>
                    </div>
                    <div className="register__container__right__form__input">
                        <Label htmlFor="batch">Batch</Label>
                        <Select
                            onValueChange={(value) => setValue('batch', Number(value))}
                        >
                            <SelectTrigger className={cn('w-[180px]', errors.batch && 'focus-visible:ring-red-500 focus-visible:text-red-500')}>
                                <SelectValue placeholder="Select Batch" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        batchList.map((batch) => (
                                            <SelectItem key={batch} value={String(batch)}>{batch}</SelectItem>
                                        ))
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="register__container__right__form__input">
                        <Label htmlFor="company">Company</Label>
                        <Input type="text" id="company"
                            {...register('company')}
                            className={cn(errors.company && 'focus-visible:ring-red-500 focus-visible:text-red-500')}
                            placeholder='Company Name'
                        />
                        <span className='text-red-500 text-xs'>{errors.company?.message}</span>
                    </div>
                    <div className="register__container__right__form__input">
                        <Label htmlFor="linkedin">Linkedin Profile</Label>
                        <Input
                            type="text"
                            id="linkedin"
                            {...register('linkedIn')}
                            className={cn(errors.linkedIn && 'focus-visible:ring-red-500 focus-visible:text-red-500')}
                            placeholder='https://www.linkedin.com/in/username/'
                        />
                        <span className='text-red-500 text-xs'>{errors.linkedIn?.message}</span>
                    </div>
                    <div className="register__container__right__form__input">
                        <Label htmlFor="instagram">Instagram Profile</Label>
                        <Input
                            type="text"
                            id="instagram"
                            {...register('instagram')}
                            placeholder='https://www.instagram.com/username/'
                        />
                    </div>
                    {/* <div className="flex items-center gap-4">
                        <Switch id="isCr" />
                        <Label htmlFor="isCr">Are you CR ?</Label>
                    </div> */}
                    <div className="col-span-2 flex justify-center">
                        <Button
                            type="submit"
                            className='w-full py-6 text-xl disabled:cursor-wait'
                            disabled={isLoading}
                        >
                            {
                                isLoading ? <RiLoader5Fill className='w-12 h-12 animate-spin' /> : 'Register'
                            }
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Register;
