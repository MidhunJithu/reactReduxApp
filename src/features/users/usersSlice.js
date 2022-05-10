import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { client } from "../../api/client";

const initialState = [
    {id : 1 , name: 'jerry popkins'},
    {id : 2 , name : 'daniel Cherry'},
    {id : 3 , name : 'Merry kelly'}
];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await client.get('fakeApi/users')
    return response.data
});

const UserSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder.addCase(fetchUsers.fulfilled , (state,action) => {
            return action.payload
        })
    }
});
export default UserSlice.reducer;

export const selectAllUsers = state => state.users;
export const selectUserById = (state,id) => state.users.find(user => user.id == id);