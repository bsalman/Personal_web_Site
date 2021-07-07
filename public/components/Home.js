import React from 'react';
import {allMyInfosPost} from '../service/api'

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          myInfo:[]
       }
     
    }
    
    //to get the data from data base every time open the age or update
    componentDidMount(){
      allMyInfosPost().then(data=>{
        if(data != 2){
         this.setState({...this.state,myInfo:data[0]})}
        // console.log(data[0]);
      })
      
    }
    
    
  render() {
    return (
      <React.Fragment>
        <header className="header" id="home">
          <p className="the_Name">{this.state.myInfo.name}  </p>
          <h3>{this.state.myInfo.title}</h3>
          <div className="myImage"><img src="/images/bs.jpg" className="my-image" alt="Bashar"/>
          </div>

          <p className="h4">
          {this.state.myInfo.deskription}
          </p>
        </header>

        
       
      </React.Fragment>
    )
  }
}

export default Home