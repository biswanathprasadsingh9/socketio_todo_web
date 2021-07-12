import React, { Component } from 'react'
import { Container,Form,List } from 'semantic-ui-react'
import socketIoClient from 'socket.io-client'
import axios from 'axios'
const socket = socketIoClient('http://localhost:5000')
console.log(socket)

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state={
      name:'',
      email:'',
      todos:false
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleRefresh=e=>{
    Router.reload(window.location.pathname);
  }

  componentDidMount(){
    socket.on('all_todos',data=>{
      // console.log(data)
      this.setState({
        todos:data
      })
      console.log(this.state.todos)
    })
  }


  handleSubmit=e=>{
    axios.post('http://localhost:5000/api/todosocket',this.state)
    .then(response=>{
      console.log(response.data)
    })
  }


  render() {
    return (
      <Container text>
        <br />
        <br />
        <h2>Realtime Todo List</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Name' placeholder='Name' name="name" onChange={this.handleChange} value={this.state.name} />
            <Form.Input fluid label='Work' placeholder='Work' name="email" onChange={this.handleChange} value={this.state.email} />
          </Form.Group>
          <Form.Button>Add</Form.Button>
        </Form>
        <br /><br />
        <List divided verticalAlign='middle'>
          {this.state.todos===false
          ?
          <></>
          :
          <>
          {this.state.todos.map((todo)=>{
            return(
              <List.Item>
                <List.Content>
                  <List.Header as='a'>{todo.name}</List.Header>
                  <p>{todo.email}</p>
                </List.Content>
              </List.Item>
            )
          })}
          </>
          }
          
        </List>

      </Container>
    )
  }
}
