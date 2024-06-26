import { createSlice } from "@reduxjs/toolkit"

export const userInitialState = {
    name: "",
    email: "",
    contact: "",
    profilePic: "",
    rollNumber: "",
    batch: "",
    linkedIn: "",
    insta: "",
    company: "",
    registered: false,
    admin: false
}

const userSlice = createSlice({
    name: "User",
    initialState: () => {
        if (typeof window !== 'undefined') {
            const localUser = localStorage.getItem("UserAuth");
            if (localUser === null) {
                return userInitialState;
            }
            const userData = JSON.parse(localUser);
            const {
                name, email, contact, rollNumber, profilePic, batch, linkedIn, insta, company
            } = userData;
            return {
                name,
                email,
                batch,
                contact,
                rollNumber,
                registered: true,
                insta: insta ?? "",
                company: company ?? "",
                linkedIn: linkedIn ?? "",
                profilePic: profilePic ?? "",
                admin: userData.admin ?? false
            }
        }
        return userInitialState;

    },
    reducers: {
        setUserValue: (state, action) => {
            const {
                name, email, contact, rollNumber, profilePic, batch, linkedIn, insta, company, admin
            } = action.payload;
            localStorage.setItem("UserAuth", JSON.stringify({ name, email, contact, rollNumber, profilePic, batch, linkedIn, insta, company, admin: admin ?? false }));
            state.name = name;
            state.email = email;
            state.batch = batch;
            state.contact = contact;
            state.registered = true;
            state.insta = insta ?? "";
            state.company = company ?? "";
            state.rollNumber = rollNumber;
            state.linkedIn = linkedIn ?? "";
            state.profilePic = profilePic ?? "";
            state.admin = admin ?? false;
        },
        emptyValue: (state) => {
            state = userInitialState;
            localStorage.removeItem("UserAuth");
        },
        updateUserData: (state, action) => {
            const keys = Object.keys(action.payload);
            console.log(state);
            keys.forEach(key => {
                state[key as keyof typeof state] = action.payload[key];
            });
            console.log(state);
        }
    },
});

const userReducer = userSlice.reducer;

export default userReducer;
export const { setUserValue, emptyValue, updateUserData } = userSlice.actions;