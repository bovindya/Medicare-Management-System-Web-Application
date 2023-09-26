import React , {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import EditPost from './components/EditPost';
import CreatePost from './components/CreatePost';
import Home from './components/Home';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
///import pdf from './components/pdf';
import PostDetails from './components/PostDetails';
export default class App extends Component{
render(){
  return(
    <BrowserRouter>
    <div className="container">
      <NavBar/>
      <Route path="/" exact component={Main}></Route>
      <Route path="/ad" component={Home}></Route>
      
      <Route path="/add" component={CreatePost}></Route>
      <Route path="/edit/:id" component={EditPost}></Route>
      <Route path="/post/:id" component={PostDetails}></Route>
      <Footer/>
    </div>
    </BrowserRouter>

  )
}}