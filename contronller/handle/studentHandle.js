const fs=  require('fs');
const qs= require('qs')
const url = require('url');
const studentService= require('../../service/studentService')
class StudentHandle {
    static showHome(req,res){
        fs.readFile('./views/home.html','utf8',(err, homeHtml)=>{
            if (err){
                console.log(err)
            } else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(homeHtml)
                res.end()
            }
        })

    }
    static getList(studentHtml, students){
        let tbody='';
        students.forEach((student, index)=>{

            tbody+= `
                <tr>
        <th scope="row">${index+1}</th>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.address}</td>
        <td>${student.phoneNumber}</td>
        <td><a class="btn btn-primary" href="/edit/${student.IDStudent}" type="button">Edit</a></td>
        <td><a class="btn btn-primary" href="/delete/${student.IDStudent}" type="button">Delete</a></td>
    </tr>
            `
        })
        studentHtml= studentHtml.replace('{students}', tbody)
        return studentHtml;

    }
    static listStudent (req,res){
        fs.readFile('./views/crud/student.html','utf-8',async (err, data)=>{
            if(err){
                console.log(err.message)
            } else {
                let show= await studentService.show()
                 data = StudentHandle.getList(data,show);
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end()
            }
        })

    }
  static create(req,res){
        if (req.method==="GET"){
            fs.readFile('./views/crud/create.html','utf-8',(err, createHtml)=>{
                if (err){
                    console.log(err.message)
                } else {
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.write(createHtml);
                    res.end()
                }
            })
        } else {

                let data='';
                req.on('data', chunk => {
                    data += chunk
                })
                console.log(data)
                req.on('end', async (err)=>{
                    if (err){
                        console.log(err)
                    } else {
                        let student= qs.parse(data)
                        console.log(student)
                        let students= await studentService.create(student)
                        console.log(students)
                        res.writeHead(301,{'location':'/student'});
                        res.end()
                    }


            })


        }


    }
    static async remove(req,res,id){
        if (req.method==="GET"){
            fs.readFile('./views/crud/delete.html','utf-8',async (err, deleteHtml) => {
                if (err){
                    console.log(err)
                } else {
                    res.writeHead(200,{'Content-Type':'text/html'})
                    deleteHtml = deleteHtml.replace('{id}',id)
                    console.log(deleteHtml)
                    res.write(deleteHtml)
                    res.end()
                }

            })

        } else {

             await studentService.removeStudent(id)
            res.writeHead(301,{'location':'/student'})
            res.end()

        }

    }
}
module.exports= StudentHandle