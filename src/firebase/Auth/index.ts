import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    UserCredential,
    User
} from "firebase/auth";
import { firebaseAuth } from "..";
import { validMail } from "@/utils/validator/validator";

const provider = new GoogleAuthProvider();

export const signupUserWithEmail = async (email: string, pass: string): Promise<User | null> => {

    if (email.trim() === "" || pass.trim() === "" || !validMail(email)) {
        throw Error("Something wrong in Input");
    }

    try {
        const response: UserCredential = await createUserWithEmailAndPassword(firebaseAuth, email, pass);

        return response.user;

    } catch (err) {
        if (err instanceof Error) {
            throw Error(err.message);
        } else {
            throw Error('An error occurred');
        }
    }

}

export const signinUserWithEmail = async (email: string, pass: string): Promise<User | null> => {
    if (email.trim() === "" || pass.trim() === "" || !validMail(email)) {
        throw Error("Something wrong in Input");
    }
    try {
        const response: UserCredential = await signInWithEmailAndPassword(firebaseAuth, email, pass);

        return response.user;

    } catch (err) {
        if (err instanceof Error) {
            throw Error(err.message);
        } else {
            throw Error('An error occurred');
        }
    }

}

export const signInwithGooglePopup = async (): Promise<User | null> => {
    try {
        const result: UserCredential = await signInWithPopup(firebaseAuth, provider);

        return result.user;
    } catch (err) {
        if (err instanceof Error) {
            throw Error(err.message);
        } else {
            throw Error('An error occurred');
        }
    }
}

export const logout = async (): Promise<void> => {
    try {
        await signOut(firebaseAuth);
    } catch (err) {
        if (err instanceof Error) {
            throw Error(err.message);
        } else {
            throw Error('An error occurred');
        }
    }
}