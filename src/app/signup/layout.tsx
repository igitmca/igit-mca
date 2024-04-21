import { SignUpPage } from "@/metadata";


export const metadata = SignUpPage;

export default function SignUpLayout({
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
