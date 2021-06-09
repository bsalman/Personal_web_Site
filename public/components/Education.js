import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';



class Education extends React.Component{
    render(){
        return(
            // <!-- Education section -->
            <div className="education-container">
                <h1>Education</h1>
                <hr/>
                <br/>
                <div className="cardContainer">
                    <Card className="card">
                        <CardBody>
                            <CardTitle tag="h2">2019-2021</CardTitle>
                            <CardTitle tag="h3">FULL STACK WEB DEVELOPMENT</CardTitle>
                            
                            <CardText>
                                     Digital Career Institutes in Hamburg.
                                 <br/>
                                Further training in the digital economy,
                                Web Programmer.</CardText>
                   
                        </CardBody>
                    </Card>
                    <Card  className="card" >
                        
                        <CardBody>
                            <CardTitle tag="h2">2017-2019</CardTitle>
                            <CardTitle tag="h3">German language as a foreign language</CardTitle>
                            <CardText>
                                VHS from A1 to B1
                                <br/>
                                Grone-Schule B2 
                                <br/>
                                WBs Institute C1 
                                <br/>in Hamburg.
                            </CardText>
                        </CardBody>
                        
                    </Card>
                    <Card  className="card">
                        <CardBody>
                            <CardTitle tag="h2">2002-2008</CardTitle>
                            <CardTitle tag="h3">University degree in Law</CardTitle>
                            <CardText style={{fontSize:"20px"}}>Law degree at Damascus University 
                            in Damascus</CardText>
                        </CardBody>
                    </Card>
               
                </div>
            </div>

           
            
        )
    }
}

export default Education