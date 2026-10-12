import { createSlice } from "@reduxjs/toolkit";
import EcommerceData from "../data/EcommerceData";

const EcommerceSlice = createSlice({
    name: "ecommerce",

    initialState: {
        data: EcommerceData,
        selectedCountry: "India",
        selectedYear : 2026,
    },

    reducers: {
        setSelectedCountry: (state, action) => {
             state.selectedCountry = action.payload;
        },
        setSelectedYear: (state, action) => {
            state.selectedYear = action.payload;
        }
    }
});

export default EcommerceSlice.reducer;
export const {setSelectedCountry, setSelectedYear} = EcommerceSlice.actions;