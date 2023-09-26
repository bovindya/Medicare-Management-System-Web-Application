import React , {Component} from 'react'

import axios from 'axios';

export default class Home extends Component{

constructor(props){
  super(props);
  this.state={
     post:[]
  };
}

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
axios.get("/post").then(res=>{
  if(res.data.success){
 this.setState({
   post:res.data.existingPost
 });

 console.log(this.state.post);
 
  }
});
}


onDelete = (id) =>{
  axios.delete(`http://localhost:8000/post/delete/${id}`).then((res) =>{
    alert("patient deleted successfully");
    this.retrievePosts();
  })
}

filterData(post,searchKey){
  const result=post.filter((post) =>
  post.PatientName.toLowerCase().includes(searchKey)||
  post.nic.includes(searchKey)
  )

  this.setState({post:result})
}


handleSearchArea =(e) =>{
  const searchkey = e.currentTarget.value;
  axios.get("/post").then(res=>{
    if(res.data.success){

    this.filterData(res.data.existingPost,searchkey)
    }
  });


}



  render(){
    return (
      <div  style={{ 
        backgroundImage: `url("https://thumbs.dreamstime.com/z/magnifier-word-medicare-over-yellow-background-225849191.jpg")` 
      }}>  
      <div className="container" >
        <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
        <h3> <p class="text-uppercase" style={{color:"purple"}}>ALL PATIENTS</p></h3>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input 
          className="form-control"
          type="search"
           placeholder="Search"
           name="searchQuery"
           onChange={this.handleSearchArea}>

           </input>
        </div>
     </div>
        <table className ="table">
          <thead>
            <tr>
              <th scope ="col">#</th>
              <th scope ="col">PatientName</th>
              <th scope ="col">Age</th>
              <th scope ="col">Gender</th>
              <th scope ="col">nic</th>
              <th scope ="col">Address</th>
              <th scope ="col">Mobile</th>
              <th scope ="col">Action</th>
            </tr>
          </thead>


          <tbody>
            
          {this.state.post.map((post,index) =>(
       <tr key={index+1}>

         <th scope="row">{index+1}</th>
         <td>
           <a href ={`/post/${post._id}`} style={{textDecoration:'none'}}>
               {post.PatientName}
            </a>

         </td>
        
         <td>{post.Age}</td>
         <td>{post.Gender}</td>
         <td>{post.nic}</td>
         <td>{post.Address}</td>
         <td>{post.Mobile}</td>
         <td > <a className="btn btn-warning"  href={`/edit/${post._id}`}>
           <i className="fas fa-edit"></i>&nbsp;Edit </a>
           &nbsp;
           <a className="btn btn-danger" href="#" onClick={()=> this.onDelete(post._id)}>
           <i className="far fa-trash-alt"></i>&nbsp;Delete </a>
           </td>
       </tr>
))}
          </tbody>
        </table>
            <button className="btn btn-success" ><a href="/add" style ={{textDecoration:'none', color:'white'}}> add new patients</a></button>
          
    </div></div>
    )
}}