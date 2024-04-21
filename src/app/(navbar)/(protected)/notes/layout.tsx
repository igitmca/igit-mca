import { NotesPage } from "@/metadata";


export const metadata = NotesPage;

export default function NotesLayout({
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
