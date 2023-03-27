import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Dashboard.css';



const Dashboard = () => {
  return (
   
    <div class="dashboard">
       <Sidebar>
        <div>
            <img class='logo' src='./images/MeuLogo.png' alt='Meulabs Logo' width='200px'  />
            <h2 class='title'>Student Information System</h2>
        </div>

        
       

        <div>
            <h2 class='events'>Meu Labs Paths</h2>
        </div>

        <div class="row">
  <div class="kxcolumn">
    <h2 class='kxtext'>KX (Knowledge Explorers)</h2>
    <br/>
 <a href='/KXRegistry'>   <img  src="/images/kxpic.jpg"  alt="kx" style={{width:'75%', height:'200%'}}/> </a>
  </div>
  <div class="column">
  <h2 class='antext'>AN (Analytics)</h2>
  <br/>
 <a href='/ANRegistry'>   <img src="/images/anpic.png" alt="an" style={{width:'80%'}}/> </a>
  </div>
  <div class="column">
  <h2 class='pdtext'>PD (Product Design)</h2>
  <br/>
  <a href='/PDRegistry'>   <img src="/images/pdpic.png" alt="pd"style={{width:'80%'}}/> </a>
  </div>
</div>

        </Sidebar>
        
    </div>
  )
}

export default Dashboard