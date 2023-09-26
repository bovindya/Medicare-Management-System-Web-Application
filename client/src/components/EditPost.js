import React , {Component} from 'react'

import axios from 'axios';

export default class EditPost extends Component{

  
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

     const id= this.props.match.params.id;

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
  
     axios.put(`http://localhost:8000/post/update/${id}`, data).then((res)=>{
       if(res.data.success){
         alert("post updated successfully")
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
  
   }

  componentDidMount(){
    const id= this.props.match.params.id;

    axios.get(`http://localhost:8000/post/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          PatientName:res.data.post.PatientName,
          Age:res.data.post.Age,
          Gender:res.data.post.Gender,
          nic:res.data.post.nic,
          Address:res.data.post.Address,
          Mobile:res.data.post.Mobile
        });
        console.log(this.state.post);
      }
    });
  }


  render(){
    return(
      <div style={{ 
        backgroundImage:  `url("https://image.shutterstock.com/z/stock-photo-stethoscope-on-blue-background-medical-background-doctor-equipment-medicine-medical-examination-1039069411.jpg")` 
        }}>
      <div className="col-md-8 mt-4 mx-auto" >
        <h1 > <p  align ="center" style={{color:"brown"}}class="p-3 mb-2 bg-green text-red"  >Edit Patient Details</p></h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}><h4>PatientName</h4></label>
                   <input type="text"
                   className="form-control"
                   name="PatientName"
                   placeholder="enter name"
                   value={this.state.PatientName}
                   onChange={this.handleInputChange}/>
                  </div>     
  
         <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}><h4>Age</h4></label>
                   <input type="text"
                   className="form-control"
                   name="Age"
                   placeholder="enter age"
                   value={this.state.Age}
                   onChange={this.handleInputChange}/>
                  </div>  
  
  
  
          
        <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}><h4>Gender</h4></label>
                   <input type="text"
                   className="form-control"
                   name="Gender"
                   placeholder="enter gender"
                   value={this.state.Gender}
                   onChange={this.handleInputChange}/>
                  </div> 
  
  
         <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}><h4>nic</h4></label>
                   <input type="text"
                   className="form-control"
                   name="nic"
                   placeholder="enter nic"
                   value={this.state.nic}
                   onChange={this.handleInputChange}/>
                  </div>  
  
  
  
          
        <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}><h4>Address</h4></label>
                   <input type="text"
                   className="form-control"
                   name="Address"
                   placeholder="enter address"
                   value={this.state.Address}
                   onChange={this.handleInputChange}/>
                  </div>             
  
  
          <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}><h4>Mobile</h4></label>
                   <input type="text"
                   className="form-control"
                   name="Mobile"
                   placeholder="enter mobile"
                   value={this.state.Mobile}
                   onChange={this.handleInputChange}/>
                  </div>                          
  
                  <button className="btn btn-success "   type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    < i className ="far fa-check-square ">
                     </i>
                     &nbsp;Update
                    </button> 
   </form>
      
        </div></div>
  
    )
  }}