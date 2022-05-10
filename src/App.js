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
import { UserList } from './features/users/usersList'
import { UserPage } from './features/users/userPage'
import { NoificationList } from './features/notifications/notificationList'

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
          <Route exact path='/users' component={UserList}/>
          <Route exact path='/users/:userId' component={UserPage}/>
          <Route exact path='/notifications' component={NoificationList}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
