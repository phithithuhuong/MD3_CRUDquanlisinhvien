const connection = require('../model/connection');

class StudentService {
    static show() {
        return new Promise((resolve, reject) => {
                let connect = connection.getConnection();
                let sql = `select *
                           from students`
                connect.query(sql, (err, value) => {
                    if (err) {
                       reject( err)
                    } else {
                       resolve('success', value);
                    }

                })
            }
        )

    }
}
// StudentService.show()


module.exports = StudentService