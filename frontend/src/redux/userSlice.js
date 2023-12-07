import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "DUC ANH Dain",
        age: "22",
        about: "supercalifragilisticexpialidocious",
        avaURL: "https://",
        themeColor: "#fff",
        pending: false,
        error: false,
    },

    reducers: {
        updateStart: (state) => {
            state.pending = true;
        },

        updateError: (state) => {
            state.pending = false;
            state.error = true;
        },

        updateSuccess: (state, action) => {
            state.pending = false;
            state.error = false;
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaURL = action.payload.avaURL;
            state.themeColor = action.payload.themeColor;
        },
    },
});

export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
