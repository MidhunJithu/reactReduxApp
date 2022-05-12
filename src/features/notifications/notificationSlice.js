import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { client } from "../../api/client";

export const fetchNotifications = createAsyncThunk('notifications/fetchNotifications',
    async (_,{getState}) => {
       
        const allnotifications = selectAllNotifications(getState());
        console.log(allnotifications,'hghg');

        // const [latestNotification] = allnotifications;
        
        const latestTimestamp = '';
        
        const response = await client.get(
            `/fakeApi/notifications?since=${latestTimestamp}`
        );
        console.log(response);
        return response.data
    }
)

 const NotificationSlice = createSlice({
    name : 'notifications',
    initialState : { noti : [] , status : 'pending'},
    reducers : {},
    extraReducers(builder){
        builder.addCase(fetchNotifications.fulfilled, (state,action) => {
            console.log('test');
            const copy = state.noti;
            copy.push(...action.payload);
            state = {...copy,status : 'success'};
            console.log(state);
        })
    }

});

export default NotificationSlice.reducer
export  const selectAllNotifications = state => state.notifications;