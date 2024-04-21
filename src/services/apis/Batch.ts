import { FireStoreCollection } from "@/firebase/FireStore/collection";

export class BatchService {
    private batchCollection: FireStoreCollection;
    constructor() {
        this.batchCollection = new FireStoreCollection("Batches");
    }
    public async getAllBatchList() {
        try {
            // store it locally and fetch if not available locally #NotDoneYet !soon
            const batchListData = await this.batchCollection.getSingleDoc(
                "allBatchList"
            );
            const detailedData = batchListData?.["batchNumber"].map((d: any) => d?.batch);
            return detailedData;
        } catch (error) {
            console.error("Error in getting batch list", error);
            throw error;
        }
    }
    public async fetchBatchDetails(id: string) {
        // create collection ref
        const batchCollectionRef = new FireStoreCollection("Batches");
        // reference to their students collection of their batch
        const batchStudentCollectionRef = batchCollectionRef.customCollectionRef(`${id}/Students`)
        const snapshotData = await batchCollectionRef.getCollectionData(
            batchStudentCollectionRef
        );
        const data = snapshotData.map((doc) => ({ id: doc.id, ...doc.data() }));
        return data;
    };

}