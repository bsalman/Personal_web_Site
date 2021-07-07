import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class NavBar extends React.Component {
    state={
        string:'',
        Active:false,
        dropdownOpen:false
    }
    addClass=()=>{
        this.setState({
            classActive:!this.state.classActive 
        })
        
    }
    toggle=()=>{
      this.setState({
        dropdownOpen:!this.state.dropdownOpen
      })
    }
  render() {
    let currentLocation = this.props.location.pathname
    return (
      <React.Fragment>
        <div className="navBar">
           <div>
                    <img src="/images/bs.jpg" alt="Bashar"/>
                </div> 
          <Link  to ="/"  className={currentLocation ==='/'?"active":""}>
            <i className="fa fa-home"></i>
            <p>HOME</p>
          </Link>
          <Link to="/Skills" className={currentLocation ==='/Skills'?"active":""}>
            <i className="fas fa-laptop-code"></i>
            <p>Skills</p>
          </Link>
          <Link to="/Education" className={currentLocation ==='/Education'?"active":""}>
          <i class="fas fa-graduation-cap"></i>
            <p>Education</p>
          </Link>
          <Link to="/Experience" className={currentLocation ==='/Experience'?"active":""}>
            <i className="fa fa-eye "></i>
            <p>Experience</p>
          </Link>
          <Link
            to="/Contact"
            className={currentLocation ==='/Contact'?"active":""}>
            <i className="fa fa-envelope w3-xxlarge"></i>
            <p>CONTACT</p>
          </Link>

        </div>
        <div  className="navBar_small">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
            <DropdownToggle caret style={{backgroundColor:"rgb(37, 36, 36)"}}>
              <i className="fas fa-bars"></i>
            </DropdownToggle>
            <DropdownMenu style={{backgroundColor:"rgb(37, 36, 36)"}} >
              <DropdownItem >
                <Link  to ="/" style ={{color:"white"}}>
                 <p>Über mich</p> 
                </Link>
              </DropdownItem>
              <DropdownItem divider/>
              <DropdownItem>
                  <Link to="/Education" style ={{color:"white"}} >
                    <p>Education</p>
                  </Link></DropdownItem>
              <DropdownItem divider/>
              <DropdownItem>
                  <Link to="/Skills" style ={{color:"white"}} >
                    <p>Kompetenzen</p>
                  </Link></DropdownItem>
              <DropdownItem divider/>
              <DropdownItem>
                  <Link to="/Experience" style ={{color:"white"}} >
                    <p>Erfahrung</p>
                  </Link></DropdownItem>
              <DropdownItem divider/>
              <DropdownItem>
                  <Link to="/Contact" style ={{color:"white"}} >
                    <p>Kontakt</p>
                  </Link></DropdownItem>
            </DropdownMenu>
    </Dropdown>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(NavBar)