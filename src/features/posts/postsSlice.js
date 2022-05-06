import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id : 1 , title : 'First Post', content : 'Hello',date : new Date('04/05/2022').toISOString() ,
        reactions : {thumbsup : 0 , hurray : 0, heart : 0,rocket : 0,eye : 0}},
    {id : 2 , title : 'Second Post', content : 'more text',date : new Date('03/05/2022').toISOString(),
        reactions : {thumbsup : 0 , hurray : 0, heart : 0,rocket : 0,eye : 0}}
];

const postsSlice  = createSlice({
    name : 'posts',
    initialState,
    reducers :  {
        postAdded:
        {
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,content,userId) {
                return {
                    payload: {
                      id: nanoid(),
                      title,
                      content,
                      user : userId,
                      date : new Date().toISOString()
                    }
                  }

            }
        },
        postUpdated(state,action){
            const {id,title,content} = action.payload;
            let post = state.find((post) => post.id == id);
            post.title = title;
            post.content = content;
            
        },
        reactionAdded(state,action){
            const {id,reaction} = action.payload;
            let post = state.find((post) => post.id == id);
            if(post && post.reactions){
                post.reactions[reaction]++;
                console.log( post.reactions[reaction]);
            }
        }
    }
});

export const {postAdded ,postUpdated,reactionAdded} = postsSlice.actions;

export const selectAllPosts = state => state.posts;
export const postById = (state,postId) => state.posts.find(post => post.id == postId);

export default postsSlice.reducer;