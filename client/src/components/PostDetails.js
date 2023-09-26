import React , {Component} from 'react';
import axios from 'axios';

export default class PostDetails extends Component{

  constructor(props){
    super(props);

    
    this.state={
      post:{}
    };
  }

  componentDidMount(){


    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/post/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
            post:res.data.post
        });
        console.log(this.state.post);
      }
    });
  }
render(){

  const{PatientName,Age,Gender,nic,Address, Mobile}=this.state.post;
  return(
    <div style={{ 
      backgroundImage:  `url("https://image.shutterstock.com/z/stock-photo-stethoscope-on-blue-background-medical-background-doctor-equipment-medicine-medical-examination-1039069411.jpg")` 
      }}>
       
        
    <div style={{marginTop:'20px'}} >  
   <h2><p  align ="center" style={{color:"brown"}}class="p-3 mb-2 bg-green text-red"  >{PatientName}</p></h2>
  <hr/>
  <dl className="row">
    <dt className="col-sm-3"><h4>Age of the patient</h4></dt>
    <dd className="col-sm-9"><h4>{Age}</h4></dd>
    <dt className="col-sm-3"><h4>Gender</h4></dt>
    <dd className="col-sm-9"><h4>{Gender}</h4></dd>
    <dt className="col-sm-3"><h4>nic</h4></dt>
    <dd className="col-sm-9"><h4>{nic}</h4></dd>
    <dt className="col-sm-3"><h4>Address</h4></dt>
    <dd className="col-sm-9"><h4>{Address}</h4></dd>
    <dt className="col-sm-3"><h4>Mobile</h4></dt>
    <dd className="col-sm-9"><h4>{Mobile}</h4></dd>
  </dl>
    </div>
    </div>

  )
}}