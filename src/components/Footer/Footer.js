import React from 'react';
import {SignUpBtn} from './SignUpBtn';


function Footer(){
    return(
         <div>
            <footer className="fixed-bottom badge-dark lighten-4">
                <div className="footer-copyright text-center text-white-75 p-3">
                    <a className="fb-ic text-white" href="https://www.facebook.com" target="_blank">
                        <i className="fa fa-facebook-f fa-lg  mr-4"> </i>
                    </a>
                    <a className="tw-ic text-white" href="https://www.twitter.com" target="_blank">
                        <i className="fa fa-twitter fa-lg mr-4"> </i>
                    </a>
                    <a className="yt-ic text-white" href="https://www.linkedin.com" target="_blank" >
                        <i className="fa fa-linkedin fa-lg mr-4"> </i>
                    </a>
                    <a className="ins-ic text-white" href="https://www.youtube.com" target="_blank">
                        <i className="fa fa-youtube fa-lg "> </i>
                    </a>
                    {SignUpBtn}               
                    <a className="footer-copyright ml-5 py-3">v1.1 |  ©2020 copyright ashraf madina </a>
                </div>
            </footer>
         </div>
       );
   }
    
export default Footer;