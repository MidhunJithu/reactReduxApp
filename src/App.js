import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { PostsList } from './features/postsList'
import { AddForm } from './features/posts/AddPostsForm'
import { SinglePage } from './features/posts/singlepostPage'
import { EditPost } from './features/posts/EditPost'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <section>
                <AddForm/>
                <PostsList/>
              </section>
            )}
          />
          <Route path='/post/:postId' component={SinglePage}/>
          <Route path='/editPost/:postId' component={EditPost}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
