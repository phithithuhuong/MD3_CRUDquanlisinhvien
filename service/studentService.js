const connection = require('../model/connection');
connection.connecting()

class StudentService {
    static show() {
        let connect = connection.getConnection();
        return new Promise((resolve, reject) => {
                let sql = `select *
                           from students`
                connect.query(sql, (err, value) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(value);


                    }

                })
            }
        )

    }


    static create(student) {
        let connect = connection.getConnection();
        return new Promise((resolve, reject) => {
            let sql = `INSERT INTO studentmanagement.students (name, age, address, phoneNumber)
                       VALUES ('${student.name}', ${student.age}, '${student.address}', '${student.phoneNumber}')`
            connect.query(sql, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('result true')
                }
            })
        })
    }
    static removeStudent(id){
        let connect = connection.getConnection();
        return new Promise((resolve, reject) => {
            let sql= `DELETE FROM students WHERE IDStudent = ${id}`
            connect.query(sql,(err,value)=>{
                if (err){
                    reject(err)
                } else {
                    resolve(value)
                }
            })
        })

    }
}

module.exports = StudentService