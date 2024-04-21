import { BatchPage } from "@/metadata";


export const metadata = BatchPage;

export default function BatchLayout({
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
