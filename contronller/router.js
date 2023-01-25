const studentHandle= require('./handle/studentHandle');
const router= {
    '/home': studentHandle.showHome,
    '/student':studentHandle.listStudent
}
module.exports= router