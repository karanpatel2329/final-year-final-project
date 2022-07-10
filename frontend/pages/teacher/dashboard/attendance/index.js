
import style from './report.module.css';
import React, { Fragment, useState,useEffect } from 'react';

import { Dialog, TableRow, TableCell, Button,Grid,FormControl,InputLabel,MenuItem,Select,TextField } from '@material-ui/core'
import axios from 'axios';
import { FaTrashAlt,FaPencilAlt } from 'react-icons/fa';

function index() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const getData=()=>{
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "localhost:300",
          }
        };
      
      axios.get('http://localhost:3000/getStudentReport', {},axiosConfig)
        .then(res => {
          console.log(res);
          setData(res.data);
          setLoading(false);
      })};
    useEffect(() => {
        getData();
        
        },[]);
  return (
    <main className={style.main}>
      
    <h1 className={style.marginZero}>Students Attendance Report</h1>
  
   { loading?<></>:
    <div>
    <Fragment key={0}>
        <TableRow className='firstRow'>
          <TableCell className='index' align="left"><b> USN</b></TableCell>
          <TableCell className='subjectCode' align="center"><b>Subject</b></TableCell>
          <TableCell className='subjectCode' align="center"><b>IA1</b></TableCell>
          <TableCell className='marks' align="center"><b>IA2</b></TableCell>
          <TableCell className='marks' align="center"><b>IA3</b></TableCell>
          <TableCell className='marks' align="center"><b>External</b></TableCell>
          <TableCell></TableCell>
        </TableRow>
        
      </Fragment>
    {
        data!=undefined?data.map((ques,index)=>(

          <Fragment key={ques._id}>
            <TableRow key={ques._id}  justify="space-between">
              <TableCell className='index' align="left" >{ ques.usn}</TableCell>
              <TableCell className='subjectCode' align="center" >{ ques.marks[0].subjectName}</TableCell>
              <TableCell className='subjectCode' align="center" >{ ques.marks[0].IA1}</TableCell>
              <TableCell className='subjectCode' align="center" >{ ques.marks[0].IA2}</TableCell>
              <TableCell className='subjectCode' align="center" >{ ques.marks[0].IA3}</TableCell>
              <TableCell className='subjectCode' align="center" >{ ques.marks[0].External}</TableCell>
              {/* <TableCell className='marks' align="center">{ ques.marks }</TableCell>
              <TableCell className='delete' align='center'><Button className='deleteBtn' onClick={()=>console.log(ques.id)}><FaTrashAlt className='color' /></Button><Button className='deleteBtn' onClick={()=>setOpen(true)}><FaPencilAlt className='color' /></Button></TableCell> */}
            
            </TableRow>
          </Fragment>
          
          )):<></>
    }
    </div>
}
</main>
  );
}

export default index
