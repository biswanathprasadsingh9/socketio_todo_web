import axios from 'axios'
import socketIoClient from 'socket.io-client'

const socket = socketIoClient(process.env.socket)
console.log(socket)


export const fetchAllPosts = () => async dispatch => {
    // const response = await socket.on('all_todos');
    // dispatch({type:'FETCH_POSTS', payload:response})
    socket.on('all_todos',data=>{
        dispatch({type:'FETCH_POSTS', payload:data})
    })
}
