import React from 'react'
import img1 from '../imgs/choco-cake-min.jpg'
import img2 from '../imgs/foodie-flavour.jpg'

const AboutUs = () => {
    return (
        <>
            <div class="about-us">
                <div class="text">
                    <h2>Discover</h2>
                    <h3>Our Story</h3>
                    <div><i class="fas fa-asterisk"></i></div>
                    <p>Rosa is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection.</p>
                    <div><a class="a-CTA" href="#">About Us</a></div>
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

export default AboutUs