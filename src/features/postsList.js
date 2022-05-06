import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TimeAgo from "./posts/TimeAgo";
import { PostAuthor } from "./users/postAuthor";
import emojis ,{ PostReaction } from "./posts/postReactions";
import { selectAllPosts } from "./posts/postsSlice";

export const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    const orderedpost = posts.slice().sort((a,b) => b.date.localeCompare(a.date));


    const renderedposts =  orderedpost.map((post) => (
        <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <p className="post-content"><PostAuthor userId={post.user}/>
      {post.date ?  <TimeAgo timeStamp={post.date}/> : ''}
      </p>  
      <p>
          <PostReaction post = {post}/>
      </p>  
     
        <Link to={`/post/${post.id}`} className='button muted-button'>
          View Post
        </Link>
        <Link to={`/editPost/${post.id}`} className='button m-2' style={{marginLeft :'1em'}}>
          Edit Post
        </Link>
    </article>
    ));

    return (
        <section className="posts-list">
            <h2>Posts</h2>
                {renderedposts}
        </section>
    );
} 