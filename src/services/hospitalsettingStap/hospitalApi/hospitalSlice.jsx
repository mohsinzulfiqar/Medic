import { createSlice } from "@reduxjs/toolkit";

const hospitalSlice = createSlice({
    name: "providers",
    initialState: {
        allStaff: [],
    },
    reducers: {},
    extraReducers: {
        // Get Staff
        ["GetStaff/fulfilled"]: (state, action) => {
            console.log("from getStff slice first --->", action);
            console.log("from getStff slice", action);
            state.allStaff = action.payload;
            console.log("Fail to Get providers list");
        },
    },
});

export const { } = hospitalSlice.actions;

export default hospitalSlice.reducer;
