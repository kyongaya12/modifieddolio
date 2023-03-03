import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ContainerLeft extends Component {
    render() {
        return (
            <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                <div className="flat-title t1">
                    <h4 className="sub-title mb-2">We like to hear from you</h4>
                    <h2 className="title-section color-d12 mg-b34">  A doctor’s office designed especially for seniors </h2>
                    <div className="description">
                        <p className="lt-sp01">
                      
                        </p>
                        <p className="lt-sp01">
                        We reward our doctors for keeping you healthy. We go above and beyond to personalize our care for you and your specific needs. And we deliver all of this with respect, honor, and kindness because, well, you deserve it! 
                        </p>
                    </div>
                    <div className="fl-btn btn-general btn-hv-border">
                        <Link to="#" className="f-w500 text-one color-1 lt-sp1 border-corner2">View Case Study</Link>
                    </div>
                </div>
          </div>
        );
    }
}

export default ContainerLeft;
