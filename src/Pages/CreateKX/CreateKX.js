import React, {useState, useEffect}  from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './CreateKX.css'
import {useParams, Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import {toast} from 'react-toastify'


const initialState = {
  indexno:"",
  full_name:"",
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


const CreateKX = () => {

  const [state, setState] = useState(initialState);

  const {index_no,full_name,age,dob,school,student_contact,parent_name,parent_email,parent_contact,address,comments,payments} = state;

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!index_no || !full_name || !age || !dob || !school || !student_contact ){
      toast.error("Please provide value into each field")
    }else{
      axios.post("http://localhost:5001/api/post", {
        index_no,full_name,age,dob,school,student_contact,parent_name,parent_email,parent_contact,address,comments,payments
      }).then(() => {
        setState({
        index_no:"",
        full_name:"",
        age:"",
        dob:"",
        school:"",
        student_contact:"",
        parent_name:"",
        parent_email:"",
        parent_contact:"",
        address:"",
        comments:"",
        payments:""})
      })
      .catch((error) => toast.error(error.response.data));
      setTimeout(() => navigate("../KXRegistry"), 500);
    }
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setState({ ...state, [name]: value });
  }

  return (
    <div class='createkx'>
         <Sidebar>
    

    <div class="login-box">
  <h2>Create KX1E01 Student</h2>
  <form  onSubmit={handleSubmit}>
    <div class="user-box">
      <input type="text" id="index_no" name="index_no" required 
      value={index_no} 
      onChange={handleInputChange}
      />
      <label style={{color:"orange"}}>Index No</label>
    </div>
    <div class="user-box">
      <input type="text" name="full_name" required 
       value={full_name} 
       onChange={handleInputChange}
      />
      <label  style={{color:"orange"}}>Full Name</label>
    </div>
    <div class="user-box">
      <input type="number" id="age" name="age" required
      value={age} 
      onChange={handleInputChange}
      />
      <label style={{color:"orange"}}>Age</label>
    </div>
    <div class="user-box">
      <input type="date" id="dob" name="dob" required="" 
      value={dob} 
      onChange={handleInputChange}
      />
      <label style={{color:"orange"}}>DOB</label>
    </div>
    <div class="user-box">
      <input type="text" id="school" name="school" required
        value={school} 
        onChange={handleInputChange}
      />
      <label style={{color:"orange"}}>School</label>
    </div>
    <div class="user-box">
      <input type="number" id="student_contact" name="student_contact" required
       value={student_contact} 
       onChange={handleInputChange}
      />
      <label style={{color:"orange"}}>Student Contact</label>
    </div>
    <div class="user-box">
      <input type="text" id="parent_name"name="parent_name" required
      value={parent_name} 
      onChange={handleInputChange}
      />
      <label style={{color:"orange"}}>Parent Name</label>
    </div>
    <div class="user-box">
      <input type="email" id="parent_email" name="parent_email" required
      value={parent_email} 
      onChange={handleInputChange}
      />
      <label style={{color:"orange"}}>Parent Email</label>
    </div>
    <div class="user-box">
      <input type="number" id="parent_contact" name="parent_contact" required
      value={parent_contact} 
      onChange={handleInputChange}
      />
      <label style={{color:"orange"}}>Parent Contact</label>
    </div>
    <div class="user-box">
      <input type="text" id="address" name="address" required
       value={address} 
       onChange={handleInputChange}
      />
      <label style={{color:"orange"}}>Address</label>
    </div>
    <div class="user-box">
      <input type="text" id="comments" name="comments" required
      value={comments} 
      onChange={handleInputChange}
      />
      <label style={{color:"orange"}}>Comments</label>
    </div>
    <div class="user-box">
      <input type="text" id="payments" name="payments" required
      value={payments} 
      onChange={handleInputChange}
      />
      <label style={{color:"orange"}}>Payments</label>
    </div>

    <div>
    <a href="#">
    <span></span>
      <span></span>
      <span></span>
      <span></span>
    <input type="submit" value="Create KX Student"/>
    </a>
    </div>
    
  </form>
</div>
    </Sidebar>
    </div>
  )
}

export default CreateKX