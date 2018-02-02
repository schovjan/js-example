import React from 'react'
import Filter from './todo/Filter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import PostList from './post/PostList'
import Weather from './weather/Weather'
import { Navbar, NavbarBrand, Container, Row, Col, Alert } from 'reactstrap'

const App = () => (

  <Container>

    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">schovjan example</NavbarBrand>
      </Navbar>
    </div>

    <Container>
      <br />
      <Alert color="primary">
        Redux base
      </Alert>
      <AddTodo />
      <Filter />
      <VisibleTodoList />

      <Alert color="primary">
        Component Did Mount / Update
      </Alert>
      <Weather />

      <br />
      <Alert color="primary">
        Redux Asynchronous
      </Alert>
      <PostList />
    </Container>

  </Container>
)

export default App
