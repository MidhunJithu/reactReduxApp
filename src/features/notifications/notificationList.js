import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications, selectAllNotifications } from "./notificationSlice";

export const NoificationList = () => {
    const   dispatch = useDispatch();
    dispatch(fetchNotifications())
    const notifications = useSelector(selectAllNotifications);
    console.log(notifications,'noti');
    const renderedNot = notifications.map(noti => {
        <li key={noti.id}>{noti.message}</li>
    })
    console.log(renderedNot,'rend');
    const refreshNotification = () => {
        // notifications = useSelector(selectAllNotifications)
        // console.log(notifications);
    }
    return (
        <section>
            <h1>Notifications</h1>
            {renderedNot}
            <button onClick={refreshNotification}>
              Refresh
            </button>

        </section>
    );
}