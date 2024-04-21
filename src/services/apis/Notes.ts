import { FireStoreCollection } from "@/firebase/FireStore/collection";

export class Notes {
    private noticeCollection: FireStoreCollection;
    constructor() {
        this.noticeCollection = new FireStoreCollection('Notes');
    }
    async fetchNotesBySemester(semester: string) {
        try {
            const fetchData = await this.noticeCollection.getSingleDoc(semester);
            return fetchData;
        } catch (error) {
            console.log('Error in fetching notes by semester', error);
            throw error;
        }
    }
}