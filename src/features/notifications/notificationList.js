import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications, selectAllNotifications } from "./notificationSlice";
import { useEffect } from "react";
import { parseISO } from "date-fns";
import { selectAllUsers } from "../users/usersSlice";
import { formatDistanceToNow } from "date-fns/esm";

export const NoificationList = () => {

    const notifications = useSelector(selectAllNotifications);
    const allUsers = useSelector(selectAllUsers);
    const dispatch = useDispatch();

     useEffect(() => {
        if (notifications.status === 'pending') {
          dispatch(fetchNotifications())
        }
      }, [notifications.status, dispatch])
    
    const refreshNotification = () => {
        dispatch(fetchNotifications())
    }
    
    console.log(notifications,'noti');
    const renderedNot = notifications.noti.map(noti =>
        {
        const time = parseISO(noti.date)
        const age = formatDistanceToNow(time)
        const user = allUsers.find((user) => user.id == noti.user)
        return (
            <div key={noti.id} className='notification'>
                <div><strong>{user.name}</strong> - {noti.message}</div>
                <div>{age} ago</div>
            </div>
        )
        
        })
    console.log(renderedNot,'rend');

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