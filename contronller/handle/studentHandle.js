const fs=  require('fs');
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
        console.log(typeof students )
        students.map((student, index)=>{
            tbody+= `
                <tr>
        <th scope="row">${index+1}</th>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.address}</td>
        <td>${student.phoneNumber}</td>
        <td><a class="btn btn-primary" href="/edit/${student.idStudent}" role="button">Edit</a></td>
        <td><a class="btn btn-primary" href="/delete/${student.idStudent}" role="button">Delete</a></td>
    </tr>
            `
        })
        studentHtml= studentHtml.replace('{students}', tbody)
        return studentHtml;

    }
    static listStudent(req,res){
        fs.readFile('./views/crud/student.html','utf8',async (err, studentHtml)=>{
            if(err){
                console.log(err.message)
            } else {
                let show= await studentService.show()
                console.log(show)
                studentHtml = StudentHandle.getList(studentHtml,show);
                console.log(typeof show)
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(studentHtml);
                res.end()
            }
        })

    }
}
module.exports= StudentHandle