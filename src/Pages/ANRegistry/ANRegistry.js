import Sidebar from '../../Components/Sidebar/Sidebar'
import './ANRegistry.css'
import React , {useState, useEffect} from "react";
import {useParams,  useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'
import {toast} from "react-toastify"
import axios from "axios"

const initialState = {
  index_no:"",
  full_name: "",
  age:"",
  dob:"",
  school:"",
  student_contact:"",
  parent_name:"",
  parent_email:"",
  parent_contact:"",
  address:"",
  comments:"",
  payments:""
}

const ANRegistry = () => {

   //view data from an1e01_registry table
   const[data, setData] = useState([]);

   const loadData = async () => {
     const response = await axios.get("http://localhost:5002/api/get");
     setData(response.data);
   };
 
   useEffect(() => {
     loadData();
   }, []);
   
   //delete kx1e01_registry data
   const deleteContact = (id) => {
     if(window.confirm("Are you sure that you want to delete a AN Student?")){
       axios.delete(`http://localhost:5002/api/remove/${id}`)
       
       toast.success("AN Student Deleted Successfully");
       setTimeout(() => loadData(), 500);
     }
   }
  return (
    <div class='anregistry'>
        <Sidebar>
      <h2>AN1E01</h2>
      <div id='kxtable'>
    <table id="customers">
  <tr id="headings">
    <th>ID</th>
    <th>Index No</th>
    <th>Full Name</th>
    <th> Age </th>
    <th>DOB</th>
    <th>School</th>
    <th>Student Contact</th>
    <th>Parent Name</th>
    <th>Parent Email</th>
    <th>Parent Contact</th>
    <th>Address</th>
    <th>Comments</th>
    <th>Payments</th>
    <th id='attendance'>Attendance
     <br/>
     <th>Week 01</th>
     <th>Week 02</th>
     <th>Week 03</th>
     <th>Week 04</th>
     <th>Week 05</th>
     <th>Week 06</th>
     <th>Week 07</th>
     <th>Week 08</th>
     <th>Week 09</th>
     <th>Week 10</th>
     <th>Week 11</th>
     <th>Week 12</th>
     <th>Week 13</th>
     <th>Week 14</th>
     <th>Week 15</th>
     <th>Week 16</th>
    </th>
    <th id='attendance'>Puzzles
     <br/>
     <th>Puzzle 01</th>
     <th>Puzzle 02</th>
     <th>Puzzle 03</th>
     <th>Puzzle 04</th>
     <th>Puzzle 05</th>
     <th>Puzzle 06</th>
     </th>
     <th>Total Grade</th>
     <th>Generate Certificate</th>
     <th>Update Changes</th>
     <th>Delete Student </th>
  </tr>
  {data.map((item, index)=> {
    return(
  <tr>
    <td>{item.id}</td>
    <td>{item.index_no}</td>
    <td>{item.full_name}</td>
    <td>{item.age}</td>
    <td>{new Date(item.dob).toLocaleDateString("en-GB")}</td>
    <td>{item.school}</td>
    <td>{item.student_contact}</td>
    <td>{item.parent_name}</td>
    <td>{item.parent_email}</td>
    <td>{item.parent_contact}</td>
    <td>{item.address}</td>
    <td>{item.comments}</td>
    <td>{item.payments}</td>

    <td><input id='check1' type="checkbox" /> <input id='checkbox'type="checkbox"/>
    <input id='checkbox'type="checkbox"/> <input id='checkbox'type="checkbox"/> 
    <input id='checkbox'type="checkbox"/> <input id='checkbox'type="checkbox"/>
    <input id='checkbox'type="checkbox"/> <input id='checkbox'type="checkbox"/>
    <input id='checkbox'type="checkbox"/> <input id='checkbox'type="checkbox"/>
    <input id='checkbox'type="checkbox"/> <input id='checkbox'type="checkbox"/>
    <input id='checkbox'type="checkbox"/> <input id='checkbox'type="checkbox"/>
    <input id='checkbox'type="checkbox"/> <input id='checkbox'type="checkbox"/>  
    </td> 
    <td>
      <select name="Progress" id="progress">
      <option  value="E">E</option>
      <option  value="C">C</option>
      <option  value="B">B</option>
      <option  value="A">A</option>
      <option  value="A*">A*</option>
    </select>

    <select name="Progress" id="progress">
      <option  value="E">E</option>
      <option  value="C">C</option>
      <option  value="B">B</option>
      <option  value="A">A</option>
      <option  value="A*">A*</option>
    </select>

    <select name="Progress" id="progress">
      <option  value="E">E</option>
      <option  value="C">C</option>
      <option  value="B">B</option>
      <option  value="A">A</option>
      <option  value="A*">A*</option>
    </select>

    <select name="Progress" id="progress">
      <option  value="E">E</option>
      <option  value="C">C</option>
      <option  value="B">B</option>
      <option  value="A">A</option>
      <option  value="A*">A*</option>
    </select>

    <select name="Progress" id="progress">
      <option  value="E">E</option>
      <option  value="C">C</option>
      <option  value="B">B</option>
      <option  value="A">A</option>
      <option  value="A*">A*</option>
    </select>

    <select name="Progress" id="progress">
      <option  value="E">E</option>
      <option  value="C">C</option>
      <option  value="B">B</option>
      <option  value="A">A</option>
      <option  value="A*">A*</option>
    </select>
    </td>
     
    <td>
    <select name="Progress" id="progress">
      <option  value="E">E</option>
      <option  value="C">C</option>
      <option  value="B">B</option>
      <option  value="A">A</option>
      <option  value="A*">A*</option>
    </select>
    </td>
    <td><img src='./images/plusicon.png' id='plus' width='50px' height='50px' alt='plus'/></td>
   <td> <input  type="submit" name="save" value="Save" /></td> 
    <td><button id="delbtn" onClick={() => deleteContact(item.id)} >Delete</button></td>
  </tr>
    )
  })}
  </table>
  </div>
  <div class='kxbuttons'>
    <a href='/CreateAN'>
    <button class='btncreatekx' >
      Create Student
    </button>
    </a>
    <br/>
   
    </div>
    </Sidebar>
    </div>
  )
}

export default ANRegistry