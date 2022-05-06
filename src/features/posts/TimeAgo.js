import React from "react";
import {parseISO ,formatDistanceToNow } from "date-fns";

  const TimeAgo = ({timeStamp}) => {
    const time = parseISO(timeStamp);
    const timeago = formatDistanceToNow(time);
    let age = `${timeago} ago`;

    return(
        <span title={age}>
            &nbsp;<i>{age}</i>
        </span>
    );
}
export default TimeAgo