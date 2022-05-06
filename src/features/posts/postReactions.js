import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const emojis = {
    thumbsup :'👍',
    hurray : ' 🎉 ',
    heart : '❤️',
    rocket : ' 🚀',
    eye : '👀'
}

export const PostReaction = ({post}) => {
   const dispatch =useDispatch();
    const reactions = Object.entries(emojis).map(([name,emoji]) => 
         (<button key={name} className=' muted-button reaction-button' onClick={
             () => dispatch(reactionAdded({id:post.id,reaction:name}))}>
             {emoji} {post.reactions[name]}
             </button>)
    )
    return reactions;
} 
export default emojis;