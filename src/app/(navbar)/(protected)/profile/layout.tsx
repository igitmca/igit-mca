import { ProfilePage, SignUpPage } from "@/metadata";


export const metadata = ProfilePage;

export default function ProfileLayout({
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
