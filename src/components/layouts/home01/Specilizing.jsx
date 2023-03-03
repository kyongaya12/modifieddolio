import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Design, NumberCount} from './specilizing/index';

class Specilizing extends Component {
    constructor(props){
        super(props);
        this.state = {
            design : [
                {
                    id: 1,
                    iconbox: 'iconbox-s1 d-sm-flex align-items-center',
                    iconcolor: 'iconbox-icon color1',
                    spanicon: 'icon-designer',
                    title: 'Dementia',
                    text01: "Dementia is a term used to describe a decline in cognitive function, including memory, language, and problem-solving abilities.",
                    text02: "It can be caused by a variety of factors, including Alzheimer's disease, stroke, and head injury.."
                },
                {
                    id: 2,
                    iconbox: 'iconbox-s1 d-sm-flex justify-content-lg-center align-items-center mgl-iconbox-s1',
                    iconcolor: 'iconbox-icon color2 color1',
                    spanicon: 'icon-designer',
                    title: 'Osteoporosis',
                    text01: 'Osteoporosis is a condition in which the bones become weak and brittle, making them more prone to fractures.',
                    text02: 'It is often seen in older adults and can be caused by a number of factors, including hormonal imbalances, low calcium intake, and a lack of exercise. '
                   
                },
                {
                    id: 3,
                    iconbox: 'iconbox-s1 d-sm-flex justify-content-lg-end align-items-center mgr-iconbox-s1',
                    iconcolor: 'iconbox-icon color3',
                    spanicon: 'icon-brand',
                    title: 'Brain Wave',
                    text01: 'Brain waves are electrical activity that can be measured on the scalp. ',
                    text02: 'Different types of brain waves are associated with different states of consciousness, including wakefulness, sleep, and deep relaxation.,'
                },
                {
                    id: 4,
                    iconbox: 'iconbox-s1 d-sm-flex justify-content-lg-end align-items-center mgr-iconbox-s1',
                    iconcolor: 'iconbox-icon color3',
                    spanicon: 'icon-brand',
                    title: 'Blood circulation',
                    text01: 'Blood circulation is the movement of blood through the body. It is essential for the delivery of oxygen and ',
                    text02: 'nutrients to the bodys tissues and the removal of waste products. ',
                },
                {
                    id: 5,
                    iconbox: 'iconbox-s1 d-sm-flex justify-content-lg-end align-items-center mgr-iconbox-s1',
                    iconcolor: 'iconbox-icon color3',
                    spanicon: 'icon-brand',
                    title: 'Allergy Test',
                    text01: 'An allergy test is a diagnostic procedure used to determine if a person has an allergic reaction to a particular substance.',
                    text02: 'This can be done through a skin test or a blood test. '
                }
               
            ]
        }
    }
    render() {
        return (
            <div className="section slide-personal-Intro-third slide-dark bg-white">
                <section className="specilizing-in s1" id="services">
                    <div className="container">
                        <div className="flat-title">
                            <h2 className="title-section color-d12 animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">We are Specialized in</h2>
                        </div>
                        <div className="row position-relative z-index1">
                            {
                                this.state.design.map(data => (
                                    <Design key={data.id} data={data}/>
                                ))
                            }
                            <div className="flat-spacer" data-desktop="0" data-mobile="0" data-smobile="0"></div>
                            <div className="fact">
                                {/* <NumberCount /> */}
                                {/* <div className="btn-contact bg-s1 text-center">
                                    <h4 className="title color-d12">Get a project? Let’s talk.</h4>
                                    <Link to="#" className="email color-s1 color-d14">yourmail@email.com</Link>
                                </div> */}
                            </div>
                            
                        </div>
                    </div>
                    <div className="featured-post animate-element wow delay5 fadeInRight" data-wow-delay="0.5s">
                        <img src="images/section/09.png" alt="images" />
                    </div>
                </section>
            </div>
        );
    }
}

export default Specilizing;
