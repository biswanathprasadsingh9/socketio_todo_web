// 

//CSS AND SCSS
const path = require('path')
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    // backendURL: 'http://localhost:5000/api',
    backendURL: 'http://localhost:5000/api',
    socket: 'http://localhost:5000'
  }
}