import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Label, Menu } from 'semantic-ui-react'
import Link from 'next/link'
import {fetchAllPosts} from '../../store/actions'
import _ from 'lodash';

export class Sidebar extends Component {

    componentDidMount(){
        this.props.fetchAllPosts();
    }

    render() {
        if(this.props.posts===null){

        }

        var b = _.filter(this.props.posts, function(o) { if (o.status === false) return o }).length;
        // console.log(b)

        return (
            <Menu vertical>
                <Menu.Item
                name='inbox'
                >
                
                {b>0
                ?<Label style={{backgroundColor:'red',color:'white'}}>{b}</Label>
                :<></>
                }
                
                
                <Link href='/'>
                    <a className="sideNavLink">List</a>      
                </Link>
                
                </Menu.Item>

                <Menu.Item
                name='spam'
                >
                <Link href='/create'>
                <a className="sideNavLink">Create</a> 
                </Link>
                </Menu.Item>

             
            </Menu>
        )
    }
}

const mapStateToProps = (state) => ({
    posts:state.posts
})


export default connect(mapStateToProps, {fetchAllPosts})(Sidebar)

