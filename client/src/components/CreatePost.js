import React , {Component} from 'react';

import axios from 'axios';

export default class CreatePost extends Component{
  constructor(props){
    super(props);

    
    this.state={
      PatientName:"",
      Age:"",
      Gender:"",
      nic:"",
      Address:"",
      Mobile:"",

    }
  }
 handleInputChange = (e) =>{
   const {name,value} =e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
 }

 onSubmit = (e) =>{
   e.preventDefault();
   const {PatientName,Age,Gender,nic,Address, Mobile}=this.state;
   const data={
    PatientName:PatientName,  
    Age:Age,
    Gender:Gender,
    nic:nic,
    Address:Address,
    Mobile:Mobile
   }



   console.log(data)
   if(Mobile.trim().length!=10){
    alert("invalid:mobile number must include only 10 characters");
    return
  }else{
   axios.post("http://localhost:8000/post/save", data).then((res)=>{
     if(res.data.success){
      alert("patient added successfully");
       this.setState(
         {
          PatientName:"",
          Age:"",
          Gender:"",
          nic:"",
          Address:"",
          Mobile:""
         }
       )
     }
   })

 }}

render(){
  return(
    <div style={{ 
      backgroundImage: `url("https://media.istockphoto.com/photos/black-stethoscope-on-blue-background-picture-id1179610553?s=612x612")` 
    }}   >
    
    <div className="col-md-8 mt-4 mx-auto"
    >
     <h2><p  style={{color:"brown"}}class="p-3 mb-2 bg-green text-red"  > Enter patient Details</p></h2>
      <form className="needs-validation" Validate>
        <div className="form-group" style={{marginBottom:'15px'}}>
        <label for="name" align="left"style={{fontWeight: "bold"}}  ><h4>Patient Name</h4> </label>
                 <input type="text"
                 className="form-control"
                 name="PatientName"
                 placeholder="enter name"
                 value={this.state.PatientName}
                 onChange={this.handleInputChange} required/>
                </div>     

       <div className="form-group" style={{marginBottom:'15px'}}>
       <label for="address"style={{fontWeight: "bold"}} ><h4>Age </h4></label>
                 <input type="text"
                 className="form-control"
                 name="Age"
                 placeholder="enter age"
                 value={this.state.Age}
                 onChange={this.handleInputChange}/>
                </div>  



        
      <div className="form-group" style={{marginBottom:'15px'}}>
      <label for="nic" style={{fontWeight: "bold"}}><h4>Gender</h4></label>
                 <input type="text"
                 className="form-control"
                 name="Gender"
                 placeholder="enter gender"
                 value={this.state.Gender}
                 onChange={this.handleInputChange} />
                </div> 


       <div className="form-group" style={{marginBottom:'15px'}}>
       <label for="nic" style={{fontWeight: "bold"}}><h4>NIC Of Patient</h4></label>
                 <input type="text"
                 className="form-control"
                 name="nic"
                 placeholder="enter nic"
                 value={this.state.nic}
                 onChange={this.handleInputChange}/>
                </div>  



        
      <div className="form-group" style={{marginBottom:'15px'}}>
      <label for="address"style={{fontWeight: "bold"}} ><h4>Address of the Patient</h4></label>
                 <input type="text"
                 className="form-control"
                 name="Address"
                 placeholder="enter address"
                 value={this.state.Address}
                 onChange={this.handleInputChange}/>
                </div>             


        <div className="form-group" style={{marginBottom:'15px'}}>
        <label for="mobile" style={{fontWeight: "bold"}} ><h4>Mobile No</h4></label> 
                 <input type="text"
                 className="form-control"
                 name="Mobile"
                 placeholder="enter mobile"
                 value={this.state.Mobile}
                 onChange={this.handleInputChange}/>
                </div>                          

                <button className="btn btn-success " align="center"  type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                  < i className ="far fa-check-square ">
                   </i>
                   &nbsp;   Save
                  </button> 
 </form>
    
      </div></div>

  )
}}
