import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import verifiedCheck from '../../../images/favicons/verify-check.png';
import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { EmptyLayout, Progress } from './../../../components';
import { Tabs, Tab } from 'react-bootstrap';
import { InputArr1, InputArr2, InputArr3, InputArr4, InputArr5 } from './InputArray';

function Welcome() {
    const [activeTab, setActiveTab] = useState(0);
    const [buttonData, setButtonData] = useState([]);
    const handleOptionSelect = (key) => {
        setActiveTab(key);
    };

    const OnButtonClick = (data) => {
        setButtonData(prevData => [...prevData, data]); // Append new data to buttonData array
    }
    console.log(buttonData)

    return (
        <EmptyLayout>
            <EmptyLayout.Section>
                <div className='d-flex flex-column my-5 pb-5 mx-5 px-5'>
                    <HeaderAuth title={<span className='mt-md-0 mt-5 ' style={{ fontWeight: '700', fontSize: '2rem', display: 'flex', flexDirection: 'flex-start' }}>Welcome</span>} />
                    <div className='d-flex div2 flex-column'>
                        <style>{
                            `
                            @media only screen and (max-width: 768px){
                                .div2{
                                    margin-top:-4rem !important;
                                }
                            
                            `
                        }</style>
                        <div className='d-none d-md-block' >
                            <div className='d-flex flex-row justify-content-around'>
                                {[0, 1, 2, 3, 4].map((index) => (
                                    <div key={index}>
                                        <Progress color={index <= activeTab ? 'primary' : 'secondary'} value={100} style={{ height: "6px", width: "8rem" }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Tabs activeKey={activeTab} onSelect={handleOptionSelect} className="d-none  text-decoration-none border-none">
                            <Tab eventKey={0} title={<span >Tab 1</span>}>
                                <h6 className='mt-5' style={{ fontWeight: '650' }}>Your role</h6>
                                <p className='mb-4'>Which of the following best describes your role?</p>
                                <div>
                                    <form action={OnButtonClick}>
                                        <div className="row">
                                            {InputArr1.map((input, index) => (
                                                <div className="col-md-4 col-sm-6 col-12 mb-3" key={`button${index}`}>
                                                    <input className="form-control bg-white text-wrap" style={{ whiteSpace: 'normal', height: 'auto', overflowWrap: 'break-word' }} type="button" name={input.name} id={input.id} value={input.value} onClick={() => { handleOptionSelect(1); OnButtonClick(input.value) }} />
                                                </div>
                                            ))}
                                        </div>
                                    </form>
                                </div>
                            </Tab>
                            <Tab eventKey={1} title={<span >Tab 2</span>}>
                                <h6 className='mt-5' style={{ fontWeight: '650' }}>Your Goal</h6>
                                <p className='mb-4'>What do you want to automate?</p>
                                <form>
                                    <div className="row">
                                        {InputArr2.map((input, index) => (
                                            <div className="col-md-4 col-sm-6 col-12 mb-3" key={`button${index}`}>
                                                <input className="form-control bg-white text-wrap" style={{ whiteSpace: 'normal', height: 'auto', overflowWrap: 'break-word' }} type="button" name={input.name} id={input.id} value={input.value} onClick={() => { handleOptionSelect(2); OnButtonClick(input.value) }} />
                                            </div>
                                        ))}
                                    </div>
                                </form>
                            </Tab>
                            <Tab eventKey={2} title={<span >Tab 3</span>}>
                                <h6 className='mt-5' style={{ fontWeight: '650' }}>Automation experience</h6>
                                <p className='mb-4'>How would you describe your experience with automating workflows?</p>
                                <form>
                                    <div className="row">
                                        {InputArr3.map((input, index) => (
                                            <div className="col-md-4 col-sm-6 col-12 mb-3" key={`button${index}`}>
                                                <input className="form-control bg-white text-wrap" style={{ whiteSpace: 'normal', height: 'auto', overflowWrap: 'break-word' }} type="button" name={input.name} id={input.id} value={input.value} onClick={() => { handleOptionSelect(3); OnButtonClick(input.value) }} />
                                            </div>
                                        ))}
                                    </div>
                                </form>
                            </Tab>
                            <Tab eventKey={3} title={<span >Tab 4</span>}>
                                <h6 className='mt-5' style={{ fontWeight: '650' }}>Company size</h6>
                                <p className='mb-4'>What size is your organization?</p>
                                <form>
                                    <div className="row">
                                        {InputArr4.map((input, index) => (
                                            <div className="col-md-4 col-sm-6 col-12 mb-3" key={`button${index}`}>
                                                <input className="form-control bg-white " type="button" name={input.name} id={input.id} value={input.value} onClick={() => { handleOptionSelect(4); OnButtonClick(input.value) }} />
                                            </div>
                                        ))}
                                    </div>
                                </form>
                            </Tab>
                            <Tab eventKey={4} title={<span >Tab 5</span>}>
                                <h6 className='mt-5' style={{ fontWeight: '650' }}>Discovery</h6>
                                <p className='mb-4'>How did you hear about Make?</p>
                                <form>
                                    <div className="row">
                                        {InputArr5.map((input, index) => (
                                            <div className="col-md-4 col-sm-6 col-12 mb-3" key={`button${index}`}>
                                                <input className="form-control bg-white text-wrap" style={{ whiteSpace: 'normal', height: 'auto', overflowWrap: 'break-word' }} type="button" name={input.name} id={input.id} value={input.value} onClick={() => { handleOptionSelect(5); OnButtonClick(input.value) }} />
                                            </div>
                                        ))}
                                    </div>
                                </form>
                            </Tab>
                            <Tab eventKey={5} title={<span >Tab 6</span>}>
                                <h6 className='mt-5' style={{ fontWeight: '650' }}>
                                    <img src={verifiedCheck} className='mr-1' width='20px' height='20px '/>
                                    Thank you for response
                                    </h6>
                                <p className='mb-4 '> Please continue to explore </p>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className='mt-5 d-flex flex-row justify-content-between'>
                            <div>
                                <Link to='' className=" text-secondary">Sign Out</Link>
                            </div>
                    {activeTab === 5 && (
                            <div>
                                <Link to='/layouts/sidebar-with-navbar' className="btn btn-primary">Continue</Link>
                            </div>
                    )}
                        </div>
                </div>
            </EmptyLayout.Section>
        </EmptyLayout>
    );
}

export default Welcome;
