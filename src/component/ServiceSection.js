
import React from 'react'
import clock from '../img/clock.svg'
import diaphram from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'

const ServiceSection= () =>{
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>

                <div className="cards">
                    <div className="cards">
                        <div className="icon">
                            <img src={clock} alt="efficient"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>   
                    </div>

                    <div className="cards">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>   
                    </div>

                    <div className="cards">
                        <div className="icon">
                            <img src={diaphram} alt="icon"/>
                            <h3>Diaphram</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>   
                    </div>

                    <div className="cards">
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>money</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>   
                    </div>

                </div>
                <div className="image">
                    <img src={home2} alt="home image"/>
                </div>
            
            </div>
            
        </div>
    )
}

export default ServiceSection
