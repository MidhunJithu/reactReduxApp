import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = [
    {id : 1 , name: 'jerry popkins'},
    {id : 2 , name : 'daniel Cherry'},
    {id : 3 , name : 'Merry kelly'}
];

const UserSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {}
});
export default UserSlice.reducer;