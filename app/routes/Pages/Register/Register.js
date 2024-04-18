import React from 'react';
import { Link } from 'react-router-dom';
import GoogleSVG from '../../../images/logos/google-color-icon.svg';
import MicrosoftSVG from '../../../images/logos/microsoft-icon.svg';
import {
    Form,
    FormGroup,
    FormText,
    Input,
    Button,
    EmptyLayout,
} from './../../../components';
import { HeaderAuth } from "../../components/Pages/HeaderAuth";



// Define function outside of the return statement
const handleGoogleSignIn = () => {
    // Redirect user to the backend route for Google OAuth2 authentication
    window.location.href = 'http://localhost:5000/auth/google';
};

const handleMicrosoftSignIn = () => {
    // Redirect user to the backend route for Microsoft OAuth2 authentication
    window.location.href = 'http://localhost:5000/auth/microsoft';
}

const Register = () => {
    return (
        <>
            <EmptyLayout>
                <EmptyLayout.Section center width={420}>
                    <div className='bg-white shadow'>
                        <div className='m-5 py-5'>
                            <HeaderAuth
                                title={<span style={{ fontWeight: '600' }}>Create Account</span>}
                            />
                            <Form className="mb-3">
                                <FormGroup>
                                    <Input type="email" name="email" placeholder="Enter Your email" class="email white form-control" id="email" pattern="^^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required/>
                                    <div class="valid-feedback feedback-pos">
                                        Looks good!
                                    </div>
                                    <div class="invalid-feedback feedback-pos"> 
                                        Please input valid email ID
                                    </div>
                                    <FormText color="muted">
                                        By signing up, I accept the Airframe Cloud <a href='/' className='text-primary'>Terms of Service</a> and acknowledge the <a href='/' className='text-primary'>Privacy Policy</a>.
                                    </FormText>
                                </FormGroup>
                                <Button color="primary" block>
                                    Sign Up 
                                </Button>
                            </Form>
                            <div className=' text-center mb-3'>
                                <p className=''>or continue with: </p>
                                <div className='d-flex flex-column '>
                                    <Button onClick={handleGoogleSignIn} className='text-black bg-white border border-box  mb-2 ' block>
                                        <img src={GoogleSVG} alt="Google" width='20px' height='20px ' className="mr-2 col-sm-row" />
                                        <span style={{ fontWeight: '600' }}>Google</span>
                                    </Button>
                                    <Button onClick={handleMicrosoftSignIn} className='text-black bg-white border border-box' block>
                                        <img src={MicrosoftSVG} alt="Microsoft" width='20px' height='20px ' className="mr-2" />
                                        <span style={{ fontWeight: '600' }}>Microsoft</span>
                                    </Button>
                                </div>
                            </div>
                            <div className="d-flex flex-column  mb-4 text-center ">
                                <Link to="/pages/login" className="text-primary">
                                    Already have an Airframe account? Log in
                                </Link>
                            </div>
                            <hr />
                            <div className='d-flex flex-column text-center text-sm'>
                                <p className='text-muted' style={{ fontSize: '0.8rem' }}>This page is protected by reCAPTCHA and the Google <a href='/' className='text-primary'>Privacy Policy</a> and <a href='/' className='text-primary'>Terms of Service</a> apply.</p>
                                <p className='text-muted' style={{ fontSize: '0.8rem' }}>(C) 2018 All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </EmptyLayout.Section>
            </EmptyLayout>
        </>
    );
}

export default Register;
