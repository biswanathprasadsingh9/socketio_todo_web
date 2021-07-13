import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sidebar from './includes/Sidebar'
import {Container,Grid,List,Button,Loader} from 'semantic-ui-react'
import Link from 'next/link'
import socketIoClient from 'socket.io-client'
import axios from 'axios'

const socket = socketIoClient(process.env.socket)
console.log(socket)

export class index extends Component {

    constructor(props){
        super(props)
        this.state={
            pageLoading:true,
            datas:null
        }
    }

    componentDidMount(){
        // socket.on('all_todos',data=>{
        //   console.log(data)
        //   this.setState({
        //     pageLoading:false,
        //     datas:data
        //   })
        // })
        console.log(socket.Socket)
        
       
    }

    handleDelete=e=>{
        axios.get(`${process.env.backendURL}/todosocket/delete/${e}`)
        .then(response=>{
            console.log(response)
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

                    {this.props.posts===null
                    ?
                    <Loader active inline='centered' />
                    :
                    <>
                    {this.props.posts.map((data)=>{
                        return(
                            <List divided verticalAlign='middle' key={data._id}>
                                <List.Item>
                                    <List.Content floated='right'>
                                        <Link href={`/view/${data._id}`}><Button size='mini'>View</Button></Link>
                                        <Button size='mini' onClick={()=>this.handleDelete(data._id)}>Delete</Button>

                                    </List.Content>
                                    <List.Content> {data.status ? <><p className="mylistfont">{data.subject}</p></> : <><span className="mbatch">NEW</span> <b><p className="mylistfont" style={{color:'red'}}>{data.subject}</p></b></>}  </List.Content>
                                </List.Item>
                            </List>
                        )
                    })}
                    
                    </>
                    }

                    
                    
                    
                    </Grid.Column>
                </Grid>

                
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    posts:state.posts
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
