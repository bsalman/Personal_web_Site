import React from 'react';
import {allMyInfosPost} from '../service/api'

class Home extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
       myInfo:[]
    }
    //to get the data from data base every time open the age or update
    componentDidMount(){
      allMyInfosPost().then(data=>{
        if(data != 2){
         this.setState({...this.state,myInfo:data})}
      })
    }
    
    
  render() {
    return (
      <React.Fragment>
        <header className="header" id="home">
          <p className="the_Name">Bashar Salman </p>
          <h3>Junior Web Developer</h3>
          <div className="myImage"><img src="/images/bs.jpg" className="my-image" alt="Bashar"/>
          </div>

          <p className="h4">
           ich bin Junior-Fullstack-Webentwickler mit juristischem Hintergrund. Den Bereich der
            Software- und Webentwicklung habe ich betreten, weil ich denke, dass dies die
            Zukunft ist. Mir macht es Spaß, mich in Prozesse hineinzudenken und Lösungen zu
            finden. Zu Beginn war es ein Hobby für mich, jetzt ist es Realität geworden. Als
            ich nach Deutschland gekommen bin, entschied ich mich, meinen Beruf zu wechseln.
            Nachdem ich der deutschen Sprache mächtiger wurde, nahm ich an einer
            Weiterbildung am Digital Career Institut als Webprogrammierer teil. Es hat mir
            nicht nur geholfen, meine Programmierfähigkeiten zu verbessern, sondern auch
            mein Durchhaltevermögen, meine Fähigkeit logisch zu denken, aber vor allem hat
            es mir Spaß am Lernen gebracht. Ich habe das Bedürfniss mich stetig
            weiterzuentwickeln und dieser Berufszweig bietet mir die Möglichkeit dazu.
          </p>
        </header>

        <div className="aboutMe"></div>
        <br/>
      </React.Fragment>
    )
  }
}

export default Home