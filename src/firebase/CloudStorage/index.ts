import {
    deleteObject,
    getDownloadURL, ref, uploadBytes,
} from "firebase/storage";
import { StorageBucket } from "..";

interface FileMeta {
    contentType: string;
}

export class FirebaseBucketStorage {
    private reference: string;

    constructor(reference: string) {
        this.reference = reference;
    }

    storeObjectAndGetUrl = async (fileName: string, fileObject: Blob, fileMeta: FileMeta): Promise<string> => {
        try {
            const fileStorageRef = ref(StorageBucket, `${this.reference}/${fileName}`);
            const uploadTask = await uploadBytes(fileStorageRef, fileObject, fileMeta);
            return await getDownloadURL(uploadTask.ref);
        } catch (err) {
            throw Error("Something Wrong While Uploading the data");
        }
    }

    private getFileNamefromUrl(url: string): string {
        const baseUrl = 'https://firebasestorage.googleapis.com/v0/b/igit-mca.appspot.com/o/';
        let imagePath = url.replace(baseUrl, "");
        const indexOfEndPath = imagePath.indexOf("?");
        imagePath = imagePath.substring(0, indexOfEndPath);
        imagePath = imagePath.replace("%2F", "/");
        return imagePath;
    }

    deleteObjectFromBucketStorage = async (imageUrl: string): Promise<boolean> => {
        const fileLocation = this.getFileNamefromUrl(imageUrl);
        const fileRef = ref(StorageBucket, fileLocation);
        try {
            await deleteObject(fileRef);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export const StorageFolderStructure = {
    PROFILE_PICTURE: "ProfilePic",
}