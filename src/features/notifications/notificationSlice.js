import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { client } from "../../api/client";

export const fetchNotifications = createAsyncThunk('notifications/fetchNotifications',
async (_,{getState}) => {
    const allnotifications = selectAllNotifications(getState());
    const [latestNotification] = allnotifications
    const latestTimestamp = latestNotification ? latestNotification.date : '';
    const response = await client.get(
        `/fakeApi/notifications?since=${latestTimestamp}`
    );
    return response.data
}
)

 const NotificationSlice = createSlice({
    name : 'notifications',
    initialState : [],
    reducers : {},
    extraReducers(builder){
        builder.addCase(fetchNotifications.fulfilled, (state,action) => {
            const copy = state;
            copy.push(...action.payload);
            state = copy;
            console.log(state);
        })
    }

});

export default NotificationSlice.reducer
export  const selectAllNotifications = state => state.notifications;