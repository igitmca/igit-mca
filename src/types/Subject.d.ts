
interface Subject {
    contact: string;
    image: string;
    name: string;
    path: string;
    questionLink: string;
    teacher: string;
    links: SubjectNotesUrl[],
    questionLink: string;
}

interface SubjectNotesUrl {
    title: string;
    link: string;
}