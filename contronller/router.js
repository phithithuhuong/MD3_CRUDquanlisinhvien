const studentHandle = require('./handle/studentHandle');
const router = {
    '/home': studentHandle.showHome,
    '/student': studentHandle.listStudent,
    '/create': studentHandle.create,
    '/delete/:id': studentHandle.remove
}
module.exports = router