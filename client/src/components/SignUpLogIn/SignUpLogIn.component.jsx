import React, { Component } from "react";
import "./SignUpLogIn.css";

export default class SignUpLogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
        document.getElementById('signup-button').addEventListener('click', () => {
            document.querySelector('.user_options-forms').classList.remove('bounceRight')
            document.querySelector('.user_options-forms').classList.add('bounceLeft')
        }, false);

        document.getElementById('login-button').addEventListener('click', () => {
            document.querySelector('.user_options-forms').classList.remove('bounceLeft')
            document.querySelector('.user_options-forms').classList.add('bounceRight')
        }, false);
    }

    render() {
        return (
            <div className="user">
                <div class="user_options-container">
                    <div class="user_options-text">
                        <div class="user_options">
                            <h2 class="user-title">Don't have an account?</h2>
                            <p class="user-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
                            <button class="user-signup-login" id="signup-button">Sign up</button>
                        </div>

                        <div class="user_options">
                            <h2 class="user-title">Have an account?</h2>
                            <p class="user-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
                            <button class="user-signup-login" id="login-button">Login</button>
                        </div>
                    </div>

                    <div class="user_options-forms">
                        <div class="user_forms-login">
                            <h2 class="forms_title">Login</h2>
                            <form class="forms_form">
                                <fieldset class="forms_fieldset">
                                    <div class="forms_field">
                                        <input type="email" placeholder="Email" class="forms_field-input" required autofocus />
                                    </div>
                                    <div class="forms_field">
                                        <input type="password" placeholder="Password" class="forms_field-input" required />
                                    </div>
                                </fieldset>
                                <div class="forms_buttons">
                                    <button type="button" class="forms_buttons-forgot">Forgot password?</button>
                                    <input type="submit" value="Log In" class="forms_buttons-action" />
                                </div>
                            </form>
                        </div>
                        <div class="user_forms-signup">
                            <h2 class="forms_title">Sign Up</h2>
                            <form class="forms_form">
                                <fieldset class="forms_fieldset">
                                    <div class="forms_field">
                                        <input type="text" placeholder="Full Name" class="forms_field-input" required />
                                    </div>
                                    <div class="forms_field">
                                        <input type="email" placeholder="Email" class="forms_field-input" required />
                                    </div>
                                    <div class="forms_field">
                                        <input type="password" placeholder="Password" class="forms_field-input" required />
                                    </div>
                                </fieldset>
                                <div class="forms_buttons">
                                    <input type="submit" value="Sign up" class="forms_buttons-action" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
