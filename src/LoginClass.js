import React from "react";
import Navbar from "./Navbar";



class LoginClass extends React.Component {

    render() {
        return (
        <><Navbar/>
            <div className="card">
                <div className="text-left">
                    <img src="https://i.imgur.com/k8jHuy2.png" width="200" />
                    <br />
                    <span className="abt">New Here? <a href="#">Create an account.</a></span>
                </div>


                <div>
                    <div className="inputbox">
                        <span>Email</span>
                        <input type="text" name="name" className="form-control" required="required" />
                    </div>
                    <div className="inputbox">
                        <div className="d-flex justify-content-between align-items-center">
                            <span>Phone</span>
                            <a href="#">Forgot your password?</a>
                        </div>
                        <input type="text" name="name" className="form-control" required="required" />
                    </div>
                </div>

                <div className="mt-2 proceed">
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault"> I have read and agree to the <a href="#">Terms of service</a> </label>
                    </div>

                    <button className="btn btn-primary btn-block">
                        Signin
                    </button>
                </div>


                <div className="mt-2">
                    <button className="btn btn-outline-primary btn-block"><i className="fa fa-google"></i> Google</button>
                </div>

            </div>
            </>
        );
    }
}

export default LoginClass;