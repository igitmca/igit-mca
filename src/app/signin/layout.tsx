import { SignInPage } from "@/metadata";


export const metadata = SignInPage;

export default function SignInLayout({
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
