const express = require("express");
const app = express();
const studentRegistration = require('./routes/studentRegistration');
const studetLogin = require('./routes/studentLogin');
const studentProfile = require('./routes/studentProfile');
const teacherRegistration = require('./routes/teacherRegisteration');
const teacherLogin = require('./routes/teacherLogin');
const addQuestion = require('./routes/question/addQuestion');
const updateQuestion = require('./routes/question/updateQuestion');
const deleteQuestion = require('./routes/question/deleteQuestion');
const getQuestion = require('./routes/question/getQuestion');
const addSubject = require('./routes/subject/addSubject');
const getSubject = require('./routes/subject/getSubject');
const getSubjectById = require('./routes/subject/getSubjectById');
const deleteSubject = require('./routes/subject/deleteSubject');
const generatePaper = require('./routes/question/generateQP');
const getTeacherList = require('./routes/teacher/getTeacherList');
const getTeacherProfile = require('./routes/teacher/teacherProfile');
const getStudenttList = require('./routes/student/getStudentList');
const getStudentReport = require('./routes/report/getReport');
const updateTeacherProfile = require('./routes/teacher/updateTeacher');
const addMark = require('./routes/ia/addIaMarks');
const getEvent = require('./routes/event/getEvent');
const addEvent = require('./routes/event/addEvent');
const config = require('config');
const cors = require('cors');
const PORT = process.env.PORT||3000;
require('./controller/dbConnection');

if(!config.get('jwtPrivateKey')){
    console.log("JWT Key is not defined");
    process.exit(1);
}
app.use(cors());
app.use(express.json());

app.use('/studentRegistration',studentRegistration);
app.use("/studentLogin",studetLogin);
app.use('/getStudentList',getStudenttList);
app.use("/teacherRegistration",teacherRegistration);
app.use('/getStudentReport',getStudentReport);
app.use("/teacherLogin",teacherLogin);
app.use('/teacherList',getTeacherList);
app.use("/profile",studentProfile);
app.use("/addQuestion",addQuestion);
app.use("/updateQuestion",updateQuestion);
app.use("/deleteQuestion",deleteQuestion);
app.use("/getQuestion",getQuestion);
app.use("/addSubject",addSubject);
app.use('/getSubject',getSubject);
app.use('/getSubjectById',getSubjectById);
app.use('/deleteSubject',deleteSubject);
app.use('/generateQP',generatePaper);
app.use('/addMark',addMark);
app.use('/getTeacherProfile',getTeacherProfile);
app.use('/updateTeacherProfile',updateTeacherProfile);
app.use('/addEvent',addEvent);
app.use('/getEvent',getEvent);
app.listen(PORT, function () {
    console.log("Server Started and Running",PORT);
})