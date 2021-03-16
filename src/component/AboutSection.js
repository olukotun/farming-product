import React from 'react'
import home1 from '../img/home1.png'



 const AboutSection=()=> {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2> we work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </div>
                    <div className="hide">
                        <h2> through</h2>
                    </div>

                </div>
                <p>contact us for any delivery of farm produce nation wide. Our prompt delivery are highly reliable</p>
                <button>Contact us</button>
            </div>
             <div className="image">
                 <img src ={home1} alt="the guy ont he camera"/>
             </div>
        </div>
    )
}
export default AboutSection;