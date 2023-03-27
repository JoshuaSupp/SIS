import React , {useState, useEffect} from "react";
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Admin.css'
import axios from "axios"
import { Link } from 'react-router-dom'
import {toast} from "react-toastify"
import {useParams,  useNavigate} from "react-router-dom"

const initialState = {
  username:"",
  password: "",
  role:""
}


const Admin = () => {
  //view data from admin table
  const[data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  

  //delete admin data
  const deleteContact = (admin_id) => {
    if(window.confirm("Are you sure that you want to a admin?")){
      axios.delete(`http://localhost:5000/api/remove/${admin_id}`)
      
      toast.success("Admin Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  }



  return (
    <div class="admin">
        <Sidebar>
    <h2 class='admintext'>Admin Details</h2>

    <div id='admintable'>
    <table id="customers">
  <tr>
    <th>Admin ID</th>
    <th>Username</th>
    <th>Password</th>
    <th>Job Role</th>
    <th></th>

  </tr>
  {data.map((item, index)=> {
    return(
      <tr>
      <td>{item.admin_id}</td>
      <td>{item.username}</td>
      <td >{item.password}</td>
      <td>{item.role}</td>
      <td>
      <button id="delbtn" onClick={() => deleteContact(item.admin_id)}>Delete</button>
      </td>
      
      </tr>
    )
  })}
 
 
</table>

</div>
    <div class='adminbuttons'>
    <a href='/CreateAdmin'>
    <button class='btncreate' >
      Create Admin
    </button>
    </a>
 
    
   

    </div>

    </Sidebar>
    </div>
  )
}

export default Admin