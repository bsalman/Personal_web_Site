import React from 'react';
import {Progress} from 'reactstrap';
import {allMyInfosPost} from '../service/api'


class Skills extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          myInfo:[]
       }
     
    }
    componentDidMount(){
        allMyInfosPost().then(data1=>{
          if(data1 != 2){
           this.setState({...this.state,myInfo:data1[0]})}
            console.log('skills',data1[0]);
        })
        
      }
  render() {
    return (
      <div className="aboutMe">
        {/*  Main skills */}
        <h2> Meine Fähigkeiten</h2>
        <hr/>
        
        <h4>HTML5 <i className="fab fa-html5" style={{fontSize:"30px"}}></i></h4>
        <div className="progress">
            <div className="progress-bar bg-secondary" role="progressbar" style={{width:`${this.state.myInfo.html}%`}} aria-valuenow="100"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <br/>
          <h4>CSS3 <i className="fab fa-css3-alt" style={{fontSize:"30px"}}></i></h4>
        <div className="progress">
            <div className="progress-bar bg-secondary" role="progressbar" style={{width:`${this.state.myInfo.css}%`}} aria-valuenow="100"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <br/>
          <h4>Java Script <i class="fab fa-js" style={{fontSize:"30px"}}></i></h4>
        <div class="progress">
            <div class="progress-bar bg-secondary" role="progressbar" style={{width:`${this.state.myInfo.javaScript}%`}} aria-valuenow="100"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <br/>
          <h4>React <i className="fab fa-react" style={{fontSize:"30px"}}></i></h4>
          <div className="progress">
            <div className="progress-bar bg-secondary" role="progressbar" style={{width:`${this.state.myInfo.react}%`}} aria-valuenow="100"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <br/>
          <h4>Nodejs <i className="fab fa-node-js" style={{fontSize:"30px"}}></i></h4>
          <div className="progress">
            <div className="progress-bar bg-secondary" role="progressbar" style={{width:`${this.state.myInfo.nodejs}%`}} aria-valuenow="100"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <br/>
          <h2 >Another Skills</h2>
          <div className="morSkills">
                <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">MySQL</span>
                    <br/>
                    <span><i className="fas fa-database"  style={{fontSize:"30px"}}></i></span>
                </div>
                <div className="w3-quarter w3-section">
                    <span >Sass</span>
                    <br/>
                    <span><i className="fab fa-sass"  style={{fontSize:"30px"}}></i></span>
                </div>
                <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">bootstrap</span>
                    <br/>
                    <span><i className="fab fa-bootstrap"  style={{fontSize:"30px"}}></i></span>
                </div>
                <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">git</span>
                    <br/>
                    <span><i className="fab fa-git"  style={{fontSize:"30px"}}></i></span>
                </div>
                <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">Githup</span>
                    <br/>
                    <span><i className="fab fa-github-square "  style={{fontSize:"30px"}}></i></span>
                </div>
                <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">Redux</span>
                    <br/>
                    <span><img src="/images/icons8-redux-50.png" style={{width:"25px"}} alt=""/></span>
                </div>
            </div>
          
      </div>
                            )}}
export default Skills
    
       