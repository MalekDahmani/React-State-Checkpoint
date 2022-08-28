import React from 'react'
import './App.css';
import Image from "./images/Photo.jpg"
import TimeInterval from './timeInterval';



class App extends React.Component{

  
  
  state={
  Person:{
    fullName:"Malek Dahmani",
    bio:"Hello Everyone, This a React State Checkpoint",
    imgSrc:Image,
    profession:"Student",
   },
   show:false
 } 
 
showProfile=()=>{
  this.setState({
    ...this.setState,
    show: !this.state.show
  })
}

 render(){
    return(
      <div>
        
        <div>
        { this.state.show && (
          <div>
            <h1 style={{color:"red"}}>{this.state.Person.fullName}</h1>
            <p>{this.state.Person.bio}</p>
            <img style={{width:"200px"}} src={this.state.Person.imgSrc} alt="image" />
            <h3>{this.state.Person.profession}</h3>
          </div>
         )
         }
         <button style={{color:"white",backgroundColor:"red",padding:"10px",margin:"20px"}} onClick={this.showProfile}>Click</button>
        </div>
        <br />
        <TimeInterval/>
        </div>
      
    )
   }
}
  export default App

