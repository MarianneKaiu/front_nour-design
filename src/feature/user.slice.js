import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userId: null,
        userName: "",
    },
    reducers: {
        getUser: (state, { payload }) => {
            state.userId = payload;
            state.userName = payload;
        },
    },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
