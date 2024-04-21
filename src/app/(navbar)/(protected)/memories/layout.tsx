import { MemoriesPage } from "@/metadata";


export const metadata = MemoriesPage;

export default function MemoriesLayout({
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
