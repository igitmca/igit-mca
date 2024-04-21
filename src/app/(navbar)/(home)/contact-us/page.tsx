'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { TContactUsValidator, contactUsValidator } from '@/utils/validator/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Loader2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

const ContactUs = ({ className }: { className?: string }) => {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const email = searchParams.get('email')
  //creating contact us form with react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactUsValidator>({
    defaultValues: {
      name: name || '',
      email: email || '',
      msg: '',
    },
    resolver: zodResolver(contactUsValidator),
  });

  // const { mutate, isPending } = useContactUs();

  const handleContactUs = ({ email, name, msg }: TContactUsValidator) => {
    // mutate({ name, email, msg })
  }
  return (
    <div className='w-1/2 mx-auto'>
      <h1 className='text-4xl font-bold'>Contact Us</h1>
      <div className='h-[2px] w-1/5 my-6 rounded-md  dark:bg-white bg-black'></div>
      <form className={cn('space-y-4 mt-6', className)} onSubmit={handleSubmit(handleContactUs)}>
        <div className='relative'>
          <Label htmlFor="name" className='absolute left-3 top-3 font-bold'>Name :</Label>
          <Input {...register('name')} id='name' placeholder='John Doe' className={cn('pl-16 font-semibold bg-[#F7F8FA] border-none', errors.name && 'focus-visible:ring-red-500')} disabled={!!name} />
          <span className='text-red-500 text-xs'>{errors.name?.message}</span>
        </div>
        <div className='relative'>
          <Label htmlFor="email" className='absolute left-3 top-3 font-bold'>Email :</Label>
          <Input {...register('email')} id='email' placeholder='name@company.com' className={cn(`pl-16 bg-[#F7F8FA] font-semibold border-none`, errors.email && 'focus-visible:ring-red-500')} disabled={!!email} />
          <span className='text-red-500 text-xs'>{errors.email?.message}</span>
        </div>
        <div className="grid w-full gap-1.5">
          <Textarea {...register('msg')} placeholder="Message:" id="message" rows={5} className={cn('resize-none font-semibold', errors.msg && 'focus-visible:ring-red-500')} />
          <span className='text-red-500 text-xs'>{errors.msg?.message}</span>
        </div>
        <Button
          // disabled={isPending} 
          type='submit' className='w-full py-6 flex justify-center font-bold'>
          SEND MESSAGE
          {
            false ? <Loader2 className='h-6 w-6 ml-3 animate-spin' /> : <ArrowRight className='h-6 w-6 ml-3' />
          }
        </Button>
      </form>
    </div>
  )
}

export default ContactUs