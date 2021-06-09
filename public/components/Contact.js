import React from 'react';
import PopUpModal from './PopUpModal'
import { Button, Form, FormGroup, Input, FormText } from 'reactstrap';
import validator from 'validator';
import {sendEmail}from '../service/api';

class Contact extends React.Component{
  state = {
    name:'',
    email:'',
    text:'',
    showErrorModal: false,
    errorContent:null,
    resultElement:null
    
  }
  
  onSendBtnClick=(e)=>{
    if(this.state.name.trim()===''||this.state.email.trim()===''){
      // const errorElement=(
        //validator.isEmail(this.state.email)
      //   <ul>
      //     {this.state.name.trim() === ''? <li>Name should not be empty</li>: null}
      //     {!validator.isEmail(this.state.email.trim())? <li>you have to enter a valid email</li>: null}
      //     {this.state.email === ''? <li>email should not be empty</li>: null}
      //   </ul>
      // )
      // this.setState({
      //   errorContent:errorElement,showErrorModal:true
      // })
     alert("your data is not complete")
    }else{
      sendEmail(this.state.name,this.state.email,this.state.text).then(BackData=>{
      console.log('backData',BackData);
      if(BackData){alert("sending success")}
        
      }).catch(error=>{
        console.log(error);
        alert("server side error")
      })
    }
  }

  closeModal = () => {
    this.setState({showErrorModal: false})
  }
    render(){
        return(
        <React.Fragment>
          {/* <PopUpModal
                  show={this.state.showErrorModal}
                  close={this.closeModal}
                  className="bg-danger"
                  title="Entries Error">
                 {this.state.errorContent}
        </PopUpModal> */}
            {/* // Contact Section//  */}
        <div className="contactContainer">
          <h2 >Kontaktieren Sie mich</h2>
          <hr/>

          <div>
            <p><i className="fa fa-map-marker"></i> 21614 Buxtehude
              Deutschland</p>
            <p><i className="fas fa-mobile-alt"></i> Handy Nummer:+4915750469819</p>
            <p><i className="fa fa-envelope"></i>
            &nbsp; Email:bsalman395850@gmail.com</p>
          </div>
          <br/>
          <p>Nehmen wir Kontakt auf. Schick mir eine Nachricht:</p>
          <Form>
            <FormGroup>
              <Input  type="name"  name="name" id="name" placeholder="Name"
                placeholder="ENTER NAME"
                onChange={(e)=>{
                  this.setState({
                    name:e.target.value
                  })
                }}/>
              <FormText color="muted">Wir werden Ihren Namen niemals mit anderen teilen.</FormText>
            </FormGroup>
            <FormGroup>
                <Input type="email" name="email" id="exampleEmail" placeholder="ENTER EMAIL"
                onChange={(e)=>{
                  this.setState({
                    email:e.target.value
                  })
                }} />
                <FormText color="muted">Wir werden Ihren Namen niemals mit anderen teilen.</FormText>
            </FormGroup>
            <FormGroup>
                 <Input type="textarea" name="text" id="exampleText"  placeholder="WRITE MESSAGE" 
                 onChange={(e)=>{
                  this.setState({
                    text:e.target.value
                  })
                 }} />
            </FormGroup>
            <Button  onClick={this.onSendBtnClick}> <i className="fa fa-paper-plane"></i> NACHRICHT SENDEN</Button>
          </Form>
          
          
        </div>
        </React.Fragment>
        )
    }
}

export default Contact
