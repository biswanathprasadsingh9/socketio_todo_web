import React, { Component } from 'react'
import {Container,Form,Grid} from 'semantic-ui-react'
import Sidebar from '../includes/Sidebar'
import Router from 'next/router'


export default class View extends Component {

    

    static async getInitialProps({query}) {
        
        var data ={query};

        const res = await fetch(`${process.env.backendURL}/todosocket/${data.query.id}`)
        const json = await res.json()
        return { data: json.data }

    }


    render() {
    console.log(this.props.data)

        return (
            <Container>
                <br /><br /><br />
                <Grid stackable>
                    <Grid.Column  computer={4}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column  computer={12}>
                    
                        <h3>{this.props.data.subject}</h3>
                        <p>{this.props.data.message}</p>
                        <h5>Name: {this.props.data.name}</h5>
                    </Grid.Column>
                </Grid>

                
            </Container>
        )
    }
}
