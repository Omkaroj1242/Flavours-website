import React from 'react'
import img1 from '../imgs/1.jpg'
import img2 from '../imgs/2.jpg'
import img3 from '../imgs/3.jpg'
import img4 from '../imgs/4.jpg'

const Menu = () => {
    return (
        <>
            <div class="menu">
                <div class="box-model">
                    <i class="fas fa-times fa-2x close"></i>
                    <div class="arrow">
                        <div class="arrow arrow-right"></div>
                        <div class="arrow arrow-left"></div>
                    </div>
                    <div class="box-image-container">
                        <div class="box-image">
                            <img src="" alt="Food Photo"/>
                        </div>
                    </div>
                </div>
                <div class="menu-image-container">
                    <div class="image active">
                        <img src={img1} alt="Food Photo"/>
                    </div>
                    <div class="image">
                        <img src={img2} alt="Food Photo"/>
                    </div>
                    <div class="image">
                        <img src={img3} alt="Food Photo"/>
                    </div>
                    <div class="image">
                        <img src={img4} alt="Food Photo"/>
                    </div>
                </div>
                <div class="text">
                    <h2>Discover</h2>
                    <h3>Menu</h3>
                    <div><i class="fas fa-asterisk"></i></div>
                    <p>For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates.  We love food, lots of different food, just like you.</p>
                    <div><a class="a-CTA" href="#">View The Full Menu</a></div>
                </div>
            </div>

        </>
    )
}

export default Menu