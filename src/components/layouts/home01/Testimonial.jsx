import React, { Component } from 'react';

class Testimonial extends Component {
    constructor(props){
        super(props);
        this.state = {
            testimonial: [
                {
                    id: 1,
                    img: './images/testimonial/01.png',
                    alt: 'images',
                    text01: 'This includes comments on the professionalism, competence, ',
                     text02: 'and bedside manner of the staff and physicians at the clinic. ',
                    // text03: 'aimproved upon it substantially. Recommended!',
                     name: 'Stacy',
                    classname: 'testimonial-t1 text-center'
                },
                {
                    id: 2,
                    img: './images/testimonial/07.jpg',
                    alt: 'images',
                    text01: ' The staff was friendly and helpful, and the doctor was very knowledgeable and attentive to my needs. ',
                    text02: 'I was able to get the answers I needed quickly, and the office was well-organized. Overall, it was a great experience, and I would recommend this office to anyone looking for medical care  ',
                    name: 'Alex ',
                    classname: 'testimonial-t1 text-center'
                },
                {
                    id: 3,
                    img: './images/testimonial/07.jpg',
                    alt: 'images',
                    text01: 'I felt like I was part of a family while I was there,  ',
                    text02: 'which made my experience even more enjoyable.',
                    name: 'Danna',
                    classname: 'testimonial-t1 text-center'
                }
            ]
        }
    }
    render() {
        return (
            <div className="container">
                <div className="custom-dot dot-t1 dot-s1 none-nav-default mg-dots-s1">
                    <div className="flat-carousel-box data-effect clearfix" data-gap={0} data-column={1} data-column2={1} data-column3={1} data-column4={1} data-column5={1} data-dots="true" data-auto="false" data-nav="false" data-loop="true">
                        <div className="owl-carousel">
                            {
                                this.state.testimonial.map(data => (
                                    
                                    <div className={data.classname} key={data.id}>
                                                    <div className="avatar mg-b29"><img src={data.img} alt={data.alt} /></div>
                                                    <p className="lt-sp03 mg-b25">
                                                        {data.text01}<br /> {data.text02} <br/>{data.text03}
                                                    </p>
                                        <h3 className="name f-w600">{data.name}</h3>
                                    </div> 
                                ))
                            }
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Testimonial;
