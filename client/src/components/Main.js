import React ,{useState}  from "react"

import axios from 'axios';

import jsPDF from 'jspdf';
import 'jspdf-autotable'

const generatePDF = post => {
  const doc = new jsPDF();
  const tableColumn = ["PatientName","Age","Gender","nic","Address"," Mobile"]
  const tableRows = [];

  post.map(post => {
    const checkupData = [
       post.PatientName,
      post.Age,
      post.Gender,
      post.nic,
      post.Address,
      post.Mobile,
      
    ];
    tableRows.push(checkupData);
  })
  doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
  doc.save("monthly patients .pdf")
}

function Main(){
  return(
    <div style={{ 
      backgroundImage: `url("https://thumbs.dreamstime.com/z/medical-stethoscope-red-heart-blue-background-top-view-healthcare-pulse-heartbeat-medicare-cardiology-concept-medical-113061532.jpg")` 
    }}>
         <div align="center" class="container"  >
         <h1> <p class="text-uppercase" style={{color:"purple"}}>WELCOME TO FAMILY CLINIC</p></h1>
          <h3><p style={{color:"red"}}class="p-3 mb-2 bg-yellow text-green" >Role of the receptionist</p></h3>
          <ul align ="left"><h4><li><p>The receptionist plays a major in this medicare center . She is the on who meets the patients ath the medical center. </p></li><li><p>When a patient comes to the medical center his/her details are taken by the receptionist at the 
            Receptionist desk.</p></li>
            <li><p>And also her major roles arwe to Register pateints , Search for patients , Do patient settings and  to generate the pID.
          </p></li>
          <li><p>At the end of the month the receptionist has to create a report of patients who came to the medical center monthly.
          </p></li>
          </h4></ul>
           < a class="btn btn-primary btn-lg active" role="button" aria-pressed="true"
           href="/add">Register Patient</a>

<a href="/ad"  class="btn btn-secondary btn-lg active" role="button" aria-pressed="true"

           > All Patients settings</a>

<a href="/pdf" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"
          >  Generate Report
          <div>
                    <button type="button" class="btn btn-secondary btn-sm" onClick={() => generatePDF(this.state.post)}>Generate Report</button>
                  </div>
                </a>


</div>
</div>
     )
 }
 export default Main;