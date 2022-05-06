import React , { useState }from "react";
import { postAdded } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";

export const AddForm = () => {
    const [title , setTitle] = useState('');
    const [content , setContent] = useState('')
    const [userId , setUserId] = useState('')
    
    const onTitleChanged = (e) => setTitle(e.target.value); 
    const onContentChanged = (e) => setContent(e.target.value); 
    const onUserChanged = (e) => setUserId(e.target.value); 

    const dispatch = useDispatch();
    const onpostSave = () => {
        if(title && content && userId){
            dispatch(postAdded(title,content,userId))
            alert('content added')
        }
        setTitle('');
        setContent('')
    }
    const users = useSelector((state) => state.users);
    const useroptions = users.map((user) => (
      <option key={user.id} value={user.id} >{user.name}</option>
    ))

    return(
        <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author: </label>
        <select id="postAuthor"name="postAuthor" value={userId} onChange={onUserChanged}>
            <option></option>
            {useroptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onpostSave}>Save Post</button>
      </form>
    </section>
    );

}