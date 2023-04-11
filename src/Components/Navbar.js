import React from 'react'
import Logo from '../imgs/Logo-removebg-preview1.png';

const Navbar = () => {
    return (
        <>
            {/* <!--Start Header--> */}
            <header>
                <nav>
                    <div class="logo">
                        <a href="/"><img src={Logo} alt="Rosa Logo"/></a>
                    </div>
                    <div class="toggle">
                        <span class="first"></span>
                        <span class="middle"></span>
                        <span class="last"></span>
                    </div>
                    <div class="navigation-bar">
                        <ul>
                            <li class="active"><a href="/">Home<span class="underline"></span></a></li>
                            <li><a href="/">Applications<span class="underline"></span></a></li>
                            <li><a href="/">Menu<span class="underline"></span></a></li>
                            <li><a href="/">Blog<span class="underline"></span></a></li>
                            <li><a href="/categories">Categories<span class="underline"></span></a></li>
                            <li><a href="/">Shop<span class="underline"></span></a></li>
                            <li><a href="/">Contact<span class="underline"></span></a></li>
                        </ul>
                    </div>
                </nav>
                <div class="text">
                    <h2>Welcome</h2>
                    <h1>Sanvee Flavours</h1>
                    <div class="arrow">
                        <span class="left"></span>
                        <i class="fas fa-asterisk"></i>
                        <span class="right"></span>
                    </div>
                    <span>Ready To Be Opened</span>
                    <div class="button"><button>Explore</button></div>
                </div>
                <svg class="svg-down" width="192" height="61" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 160.7 61.5" enable-background="new 0 0 160.7 61.5" xmlSpace="preserve">
                    <path fill="currentColor" d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z">
                    </path>
                </svg>
                <div class="arrow-down">
                </div>
            </header>
            {/* <!--End Header--> */}
        </>

    )
}

export default Navbar