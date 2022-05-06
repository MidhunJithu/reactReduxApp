import React from "react";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { PostAuthor } from "../users/postAuthor";
import TimeAgo from "./TimeAgo";
import { postById } from "./postsSlice";

export const SinglePage = ({match}) => {
    const {postId} = match.params;
    const post = useSelector(state => postById(state,postId));
 

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
        }
    
        return (
        <section>
            
            <article className="post">
            <h2>{post.title}</h2>
            <p className="post-content">{post.content}</p>
            <p><PostAuthor userId = {post.user}/></p>
            </article>
            {post.date ?
                <TimeAgo timeStamp = {post.date}/> : ''
            }
            <Link to='/' >
                <button type="button" className="button" style={{float: 'right'}}>Home</button>
            </Link>
        </section>
        )      

}