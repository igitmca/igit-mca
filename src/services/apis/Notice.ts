import { FireStoreCollection } from "@/firebase/FireStore/collection";

export class Notice {
    noticeCollection: any;

    constructor() {
        this.noticeCollection = new FireStoreCollection('Notice');
    }
    async fetchNotices() {
        const allNotice = await this.noticeCollection.getCollectionData();
        const datas = allNotice.map((notice: any) => notice.data());
        return datas;
    }
}