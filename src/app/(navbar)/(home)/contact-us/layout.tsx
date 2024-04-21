import { ContactPage, SignUpPage } from "@/metadata";


export const metadata = ContactPage;

export default function ContactUsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
