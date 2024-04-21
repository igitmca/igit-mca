import { z } from 'zod'
export function validMail(mail: string) {
    // eslint-disable-next-line no-useless-escape
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
}


//this is the validator for contact us
export const registerValidator = z.object({
    name: z.string().refine(val => val.trim() !== '', {
        message: 'Name is Required',
    }),
    email: z.string().email(),
    contact: z.string().refine(val => val.trim() !== '', {
        message: 'Phone Number is Required',
    }).and(z.string().refine(val => val.length === 10, {
        message: 'Phone Number should be 10 digits',
    })),
    batch: z.number().refine(val => val > 0, {
        message: 'Batch is Required',
    }),
    company: z.string().refine(val => val.trim() !== '', {
        message: 'Company is Required',
    }),
    profilePic: z.instanceof(File, {
        message: 'Profile Pic is Required',
    }),
    linkedIn: z.string().refine(val => val.trim() !== '', {
        message: 'LinkedIn is Required',
    }),
    instagram: z.string().optional(),
})
//this is the type for contact us
export type TRegisterValidator = z.infer<typeof registerValidator>;


//this is the validator for contact us
export const contactUsValidator = z.object({
    name: z.string().refine(val => val.trim() !== '', {
        message: 'Name is Required',
    }),
    email: z.string().email(),
    msg: z.string().refine(val => val.trim() !== '', {
        message: 'Message is Required',
    })
})
//this is the type for contact us
export type TContactUsValidator = z.infer<typeof contactUsValidator>;