// 

//CSS AND SCSS
const path = require('path')
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    backendURL: 'https://socketio-todo-server.vercel.app/api',
    socket: 'https://socketio-todo-server.vercel.app'
    // backendURL: 'http://localhost:5000/api',
    // socket: 'http://localhost:5000'
  }
}