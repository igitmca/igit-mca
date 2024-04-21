import { FireStoreCollection } from "@/firebase/FireStore/collection";

export class User{
    userCollection:FireStoreCollection;
    constructor(){
        this.userCollection = new FireStoreCollection('User');
    }
    async fetchUser(){
        const allUser = await this.userCollection.getCollectionData();
        const datas = allUser.map((user:any)=>user.data());
        return datas;
    }
}