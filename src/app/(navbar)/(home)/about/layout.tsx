import { AboutPage } from "@/metadata";


export const metadata = AboutPage;

export default function AboutLayout({
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
