import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllPosts } from "../posts/postsSlice";
import { selectUserById } from "./usersSlice";

export const UserPage = ({match}) => {
    const {userId} = match.params;
    const user = useSelector(state => selectUserById(state, userId))

    const posts = useSelector(selectAllPosts);
    const userposts = posts.filter(posts => posts.user == userId).map(
       post => (
        <li key={post.id}>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
       ))


    return (
        <section>
        <h1>{user.name}</h1>
        <ul>
            {userposts}
        </ul>
        </section>
    );
}