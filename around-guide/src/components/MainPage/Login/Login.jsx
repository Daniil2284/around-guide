import "./Login.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import button_back from "../../../assets/register/back.svg"

import TravelSlider from "./TravelSlider";

function Login(){
    

    return (
        <div className="login">
            <div className="login__image">
                <TravelSlider />
            </div>
            <div className="login__content">
                <div className="login__headline">
                    <div className="login__back">
                        <Link to="/"><img src={button_back} alt="button_back" /></Link>
                    </div>
                    <h1 className="login__text">Welcome!</h1>
                </div>
                <div className="login__form">
                    <p className="login__title">Please enter your details login</p>
                    <div className="login__button-sign">
                        <button>sign in</button>
                        <button>sign up</button>
                    </div>
                    <div className="login__form-write">
                        <div className="login__form-headline">

                        </div>
                        <input className="login__forum-number" type="number" />
                    </div>

                    <div className="login__form-write">
                        <div className="login__form-headline">

                        </div>
                        <input className="login__forum-password" type="password" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;