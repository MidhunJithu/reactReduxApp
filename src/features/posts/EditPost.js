import React , {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { postUpdated ,postById} from "./postsSlice";

export const EditPost = ({match}) => { 

    const {postId} = match.params;
    const post = useSelector(state => postById(state,postId));
    const [title , setTitle] = useState(post.title);
    const [content , setContent] = useState(post.content);
    
    const dispatch = useDispatch();
    const history = useHistory();

    const onTitleChanged = (e) => setTitle(e.target.value); 
    const onContentChanged = (e) => setContent(e.target.value); 
    

    const onpostSave = () => {        
        dispatch(postUpdated({id : postId, title : title, content :content}));
        history.push(`/post/${postId}`);
    }
    
   
   
    
    return(
        <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onpostSave}>Save Post</button>

        <Link to='/' >
            <button type="button" className="button" style={{float: 'right'}}>Home</button>
        </Link>
      </form>
    </section>
    )
}