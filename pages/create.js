import React, { Component } from 'react'
import {Container,Form,Grid} from 'semantic-ui-react'
import Sidebar from './includes/Sidebar'
import axios from 'axios'
import Router from 'next/router'

export default class create extends Component {

    constructor(props){
        super(props)
        this.state={
            loading:false,
            name:'',
            subject:'',
            message:'',

        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=e=>{
        this.setState({
            loading:true
        })
        axios.post(`${process.env.backendURL}/todosocket`,this.state)
        .then(response=>{
            console.log(response.data)
            if(response.data.response){
                this.setState({
                    loading:false,
                    name:'',
                    subject:'',
                    message:'',
                })
                Router.push('/',null)
            }else{
                this.setState({
                    loading:false
                })

            }
        })
    }

    render() {
        return (
            <Container>
                <br /><br /><br />
                <Grid stackable>
                    <Grid.Column  computer={4}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column  computer={12}>
                    
                        <Form onSubmit={this.handleSubmit} loading={this.state.loading}>
                
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='Name' placeholder='First' name="name" value={this.state.name} onChange={this.handleChange} />
                                <Form.Input fluid label='Subject' placeholder='Subject' name="subject" value={this.state.subject} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.TextArea label='Message' placeholder='Message...' name="message" value={this.state.message} onChange={this.handleChange} />
                            <Form.Button>Submit</Form.Button>
                        </Form>
                    
                    </Grid.Column>
                </Grid>

                
            </Container>
        )
    }
}

