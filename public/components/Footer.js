import React from 'react';
import {Link, withRouter} from 'react-router-dom';
class Footer extends React.Component{

    downloadPdf=(e)=>{
        e.preventDefault()

    }
    render(){
        return(
            <div className="social_media">
                <div type="button" className=" ing">
                    <a href="https://www.xing.com/profile/Bashar_Salman/cv" target="_blank">
                        <i className="fab fa-xing"></i>
                    </a>
                </div>
                <div className="githup">
                    <a href="https://github.com/bsalman?tab=repositories"  target="_blank">
                        <i className="fab fa-github-square"></i>
                    </a>
                </div>
                <div className="in">
                    <a href="https://www.linkedin.com/in/bashar-salman-9a2a931b4/">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <div className="cv_download" >
                    <a href="/downloadFiles/lebenslauf.pdf" target="_blank">
                        <i className="fas fa-file-download"></i>
                    </a>
                </div>
            </div>
        )
    }
}
export default Footer