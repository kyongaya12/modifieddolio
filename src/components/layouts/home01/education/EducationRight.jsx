import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class EducationRight extends Component {
    constructor(props){
        super(props);
        this.state = {
            skill: [
                {
                    id: 1,
                    timeline: 'timeline-inverted color1',
                    info: 'Empire BlueCross BlueSheld',
                    title: 'Low or no cost health insurance with Empire',
                    text: 'Empire offers these benefits to kids, families, ',
                    text: 'and adults in New York through Medicaid, Child Health Plus (CHPlus), and the Essential Plan.',
                },
                {
                    id: 2,
                    timeline: 'timeline-inverted color2',
                    info: 'United Healthcare',
                    title: 'UnitedHealthcare insurance plans.',
                    text: 'UnitedHealth Group Incorporated is an American multinational managed healthcare and  ',
                    text:'insurance company based in Minnetonka, Minnesota. It offers health care products and insurance services..'
                },
                {
                    id: 3,
                    timeline: 'timeline-inverted color2',
                    info: 'Ask about more insurance',
                    title: 'UnitedHealthcare insurance plans.',
                    text: "It's best to check with your insurance provider  ",
                    text:'or review the policy document to understand the benefits it covers. '
                },
               
            ]
        }
    }
    render() {
        return (
            <div className="col-right">
                <div className="flat-spacer" data-desktop={0} data-mobile={70} data-smobile={70} />
                <div className="flat-title t1 animate-element wow delay5 fadeInDown">
                    <h4 className="sub-title mg-b13">Affordable Care Act</h4>
                    <h2 className="title-section color-d12">Health Insurance</h2>
                </div>
                <div className="timelines position-relative animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                    <ul className="timeline">
                        {
                            this.state.skill.map(data => (
                                <li className={data.timeline} key={data.id}>
                                    <div className="timeline-badge" />
                                    <div className="timeline-panel">
                                        <h3 className="f-info">{data.info}</h3>
                                        <div className="s-info">{data.title}</div>
                                        <p>
                                            {data.text}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                        
                    </ul>
                    <div className="fl-btn btn-general btn-hv-border">
                        <Link to="#" className="f-w500 lt-sp1 border-corner2 text-one">Make Reservation</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default EducationRight;
