import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, setDoc, updateDoc, where, DocumentData, DocumentSnapshot, Query, CollectionReference, QueryConstraint, QuerySnapshot } from "firebase/firestore";
import { firestoreDB } from "..";

export class FireStoreCollection {
    collectionName: string;
    collectionRef: CollectionReference<DocumentData>;

    constructor(collectionName: string) {
        this.collectionName = collectionName;
        this.collectionRef = collection(firestoreDB, collectionName);
    }

    getDetails = async (): Promise<Array<DocumentData>> => {
        try {
            const detailsRef = collection(firestoreDB, `${this.collectionName}/all${this.collectionName}/details`)
            const snap = await getDocs(detailsRef);
            return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        } catch (err) {
            if (err instanceof Error) {
                throw Error("Error in getDetails for the collection");
            }
            throw Error("An unknown error occurred");
        }
    }

    customCollectionRef = (newRef: string): CollectionReference<DocumentData> => {
        return collection(firestoreDB, `${this.collectionName}/${newRef}`)
    }
    customCollectionName = (newRef: string): string => {
        return `${this.collectionName}/${newRef}`;
    }

    getCollectionData = async (customCollection?: CollectionReference<DocumentData>): Promise<DocumentSnapshot<DocumentData>[]> => {
        try {
            const snap = await getDocs(customCollection ?? this.collectionRef);
            return snap.docs;
        } catch (err) {
            if (err instanceof Error) {
                throw Error(err.message);
            }
            throw Error("An unknown error occurred");
        }
    }
    getCollectionDataWithQuery = async (customCollectionRef?: CollectionReference<DocumentData>, ...querry: Array<QueryConstraint>): Promise<DocumentSnapshot<DocumentData>[]> => {
        try {
            const q = query(customCollectionRef ?? this.collectionRef, ...querry);
            const dataFetched = await getDocs(q);

            return dataFetched.docs;
        } catch (error) {
            console.error(error);
            throw Error("An unknown error occurred");
        }
    }

    getSubscription = ({ workFunction }: { workFunction: (snapshot: QuerySnapshot<DocumentData>) => void }): () => void => {
        return onSnapshot(this.collectionRef, workFunction)
    }

    getSingleDoc = async (id: string, customCollectionName?: string): Promise<DocumentData | undefined> => {
        try {
            const docRef = doc(firestoreDB, customCollectionName ?? this.collectionName, id);
            const docData = await getDoc(docRef);
            if (docData.exists())
                return docData.data()
            else throw Error("Invalid Id in the Collection");
        } catch (err) {
            throw err;
        }
    }

    updateDocument = async (id: string, data: DocumentData, customCollectionName?: string): Promise<void> => {
        try {
            const docRef = doc(firestoreDB, customCollectionName ?? this.collectionName, id);
            return await updateDoc(docRef, data);

        } catch (err) {
            console.log(err);
        }
    }

    deleteDocument = async (id: string, customCollectionRef?: string): Promise<void> => {
        try {
            const docRef = doc(firestoreDB, customCollectionRef ?? this.collectionName, id);
            return await deleteDoc(docRef);
        } catch (err) {
            console.log(err)
        }
    }

    addDocumentWithoutId = async ({ customCollectionRef, data }: { customCollectionRef?: CollectionReference<DocumentData>, data: DocumentData }): Promise<DocumentData> => {
        try {
            const docData = await addDoc(customCollectionRef ?? this.collectionRef, data);
            console.log(data);
            return docData;
        } catch (err) {
            throw Error("Error!! Try Again")
        }
    }

    addDocumentWithId = async ({ customCollectionPath, specificId, data }: { customCollectionPath?: string, specificId: string, data: DocumentData }): Promise<void> => {
        try {
            const docRef = doc(firestoreDB, customCollectionPath ?? this.collectionName, specificId);
            await setDoc(docRef, data);
        } catch (err) {
            console.error(err)
            throw Error("Error in Document Upload!!");
        }
    }
}

export const cloudFirestoreCollections: { [key: string]: string } = {
    USER_DETAILS: "User",
    BATCH: "Batch",
}