import React from 'react';
import { Link } from 'react-router-dom';

import {
    Form,
    FormGroup,
    FormText,
    Input,
    Button,
    Label,
    EmptyLayout,
    ThemeConsumer
} from './../../../components';

import { HeaderAuth } from "../../components/Pages/HeaderAuth";

const ForgotPassword = () => (
    <EmptyLayout>
        <EmptyLayout.Section center width={420}>
            <div className='bg-white shadow'>
                <div className='m-5 py-5'>
                    { /* START Header */}
                    <HeaderAuth
                        title={<span style={{ fontWeight: '600' }}>Can't log in? Reset Password</span>}
                    />
                    { /* END Header */}
                    { /* START Form */}
                    <Form className="mb-3">
                        <FormGroup>
                            <FormText color="muted">
                                We'll send a recovery link to
                            </FormText>
                            <Input type="email" name="email" placeholder="Enter Your email" class="email white form-control" id="email" pattern="^^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required />
                            <div class="valid-feedback feedback-pos">
                                Looks good!
                            </div>
                            <div class="invalid-feedback feedback-pos">
                                Please input valid email ID
                            </div>
                        </FormGroup>
                        <div className="d-flex">
                        <Button color="primary" block>
                           Send recovery link
                        </Button>
                        </div>
                    </Form>
                    { /* END Form */}
                    { /* START Bottom Links */}
                    <div className="d-flex mb-4 text-center justify-content-center" >
                        <style>
                            {`
                                .link-primary:hover {
                                    text-decoration: underline;
                                }
                            `}
                        </style>
                        <Link to="/pages/login" className="text-primary link-primary">
                            Return to log in
                        </Link>
                    </div>
                    <hr />
                    <div className='d-flex flex-column text-center text-sm'>
                        <p className='text-muted' style={{ fontSize: '0.7rem' }}>This page is protected by reCAPTCHA and the Google <a href='/' className='text-primary'>Privacy Policy</a> and <a href='/' className='text-primary'>Terms of Service</a> apply.</p>
                        <div className="d-flex mb-4 text-center justify-content-center" >
                        <style>
                            {`
                                .link-primary:hover {
                                    text-decoration: underline;
                                
                                }
                            `}
                        </style>
                        <Link to="/" style={{fontSize:'12px'}} className="text-primary text-sm link-primary">
                            login help
                        </Link><span className='mx-2'>• </span>
                        <Link to="/" style={{fontSize:'12px'}} className="text-primary link-primary">
                            Contact Support 
                        </Link>
                    </div>
                    </div>
                </div>
            </div>

        </EmptyLayout.Section>
    </EmptyLayout>
);

export default ForgotPassword;
