import { createSlice, nanoid } from "@reduxjs/toolkit";
import { client } from '../../api/client'

const initialState = {
    posts : [{id : 1 , title : 'First Post', content : 'Hello',date : new Date('04/05/2022').toISOString() ,
        reactions : {thumbsup : 0 , hurray : 0, heart : 0,rocket : 0,eye : 0}},
    {id : 2 , title : 'Second Post', content : 'more text',date : new Date('03/05/2022').toISOString(),
        reactions : {thumbsup : 0 , hurray : 0, heart : 0,rocket : 0,eye : 0}}],
    status : 'idle',
    error : null
    };

const postsSlice  = createSlice({
    name : 'posts',
    initialState,
    reducers :  {
        postAdded:
        {
            reducer(state,action){
                state.posts.push(action.payload)
            },
            prepare(title,content,userId) {
                return {
                    payload: {
                      id: nanoid(),
                      title,
                      content,
                      user : userId,
                      date : new Date().toISOString(),
                      reactions : {thumbsup : 0 , hurray : 0, heart : 0,rocket : 0,eye : 0}
                    }
                  }

            }
        },
        postUpdated(state,action){
            const {id,title,content} = action.payload;
            let post = state.posts.find((post) => post.id == id);
            post.title = title;
            post.content = content;
            
        },
        reactionAdded(state,action){
            const {id,reaction} = action.payload;
            let post = state.posts.find((post) => post.id == id);
            if(post && post.reactions){
                post.reactions[reaction]++;
            }
        },
        test(state,action){
            state.posts = state.posts.concat(action.payload)
            console.log(state.posts.posts);
        }
    }
});

export const {postAdded ,postUpdated,reactionAdded ,test} = postsSlice.actions;

export const selectAllPosts = state => state.posts.posts;
export const postById = (state,postId) => state.posts.posts.find(post => post.id == postId);

export const logAndAdd = () => {
    return async (dispatch, getState) => {
    
        // Have to declare the response variable outside the try block
        let response
    
        try {
             response = await client.get('/fakeApi/posts')
             dispatch(test(response.data));
        } catch (error) {
          // Ensure we only catch network errors
          console.log(error);
          dispatch(postAdded('fail','fail','2'))
          // Bail out early on failure
          return
        }
    
        // We now have the result and there's no error. Dispatch "fulfilled".
        dispatch(postAdded('success','yes','2'))
      }
  }


export default postsSlice.reducer;