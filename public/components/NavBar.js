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
          {/* <Link to="/about" className={currentLocation ==='/about'?"active":""}>
            <i className="fa fa-user "></i>
            <p>ABOUT</p>
          </Link> */}
         
          <Link to="/Skills" className={currentLocation ==='/Skills'?"active":""}>
            <i className="fas fa-laptop-code"></i>
            <p>Skills</p>
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
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              <i class="fas fa-bars"></i>
            </DropdownToggle>
            <DropdownMenu color="black" >
              <DropdownItem >
                <Link  to ="/">
                 <p>Über mich</p> 
                </Link>
              </DropdownItem>
              <DropdownItem divider/>
              <DropdownItem>
                  <Link to="/Education"  >
                    <p>Education</p>
                  </Link></DropdownItem>
              <DropdownItem divider/>
              <DropdownItem>
                  <Link to="/Skills"  >
                    <p>Kompetenzen</p>
                  </Link></DropdownItem>
              <DropdownItem divider/>
              <DropdownItem>
                  <Link to="/Experience"  >
                    <p>Erfahrung</p>
                  </Link></DropdownItem>
              <DropdownItem divider/>
              <DropdownItem>
                  <Link to="/Contact"  >
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