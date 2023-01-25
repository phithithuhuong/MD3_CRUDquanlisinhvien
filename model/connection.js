const mysql= require('mysql');

class Connection{
    static configToMysql ={
        host: 'localhost',
        user: 'root',
        password: '123456',
        database : 'studentManagement',
        charset : 'utf8_general_ci'

    }
    static getConnection (){
    return mysql.createConnection(this.configToMysql)

    }
    static connecting (){
        return new Promise((resolve, reject) => {
            Connection.getConnection().connect(err=>{
                if (err){
                    reject(err)
                } else {
                    resolve('connection success !')
                }
            })
        })

    }
}
Connection.connecting().then((result)=>{
    console.log(result)
}).catch(err=>{
    console.log(err)
})
module.exports = Connection