import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import  '../index.css';


class LoginBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    

    render() {
        return(
            <div className="container-login">
                <div className="login-wrap Wrapper border-shadow">
                    <div className="login-header mb-2">
                        <h5>Login</h5>
                    </div>
                    <div className="form-group">
                        <input type="email" className="login-form form-control" placeholder="Username" required/>
                    </div>

                    <div className="form-group">
                        <input type="password" className="login-form form-control" placeholder="Password" required/>
                    </div>
                    
                    <button type="submit" className="login-btn btn btn-success rounded mt-5">SIGN IN</button>
                   
                    <div class="text-right p-b-23">
                        <span class="txt1 mr-2">
                            Forgot
                        </span>
                        <a href="/" className="txt1 mr-4">
                            Username / Password?
                        </a>
                </div>
             </div>           
         </div>

        )
    }
}


export default LoginBox;