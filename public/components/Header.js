import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
            <header className="header" id="home">
                <p className="the_Name">Bashar Salman</p>
                <h3>Junior Web Developer</h3>
             <div className="myImage"><img src="/images/bs.jpg" className="my-image"alt="Bashar"/> </div>
             
             <p className="h4">Junior Full-stack Programmer mit  einem Jahr Erfaeung durch einen Kurs Bei Digital Career
                    Institute.
                    Ich bin ein Quereinsteiger im Web Development mit einem juristischen Background. Einer meiner
                    Stärken ist meine schnelle Auffassungsgabe. Mit ihr ist es mir möglich gewesen mich schnell meinen
                    Umgebungen anzupassen und meine Aufgaben und neue Verantwortungen zu meistern.
                </p>
          </header>
          
          <div className="aboutMe">
                 
          </div>
            <br/>
          </React.Fragment>
        )
    }
}

export default Header