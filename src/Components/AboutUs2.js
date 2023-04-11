import React from 'react'
import img1 from '../imgs/icream-min1.jpg'
import img2 from '../imgs/orange-juice-min1.jpg'



const AboutUs2 = () => {
    return (
        <>
            <div class="reservation">
                <div class="text">
                    <h2>Culinary</h2>
                    <h3>Delight</h3>
                    <div><i class="fas fa-asterisk"></i></div>
                    <p>We promise an intimate and relaxed dining experience that offers something different to local and foreign patrons and ensures you enjoy a memorable food experience every time.</p>
                    <div><a class="a-CTA" href="#">Make a Reservation</a></div>
                </div>
                <div class="image-container">
                    <div class="image image1">
                        <img src={img1} alt="Food Photo"/>
                    </div>
                    <div class="image image2">
                        <img src={img2} alt="Food Photo"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs2