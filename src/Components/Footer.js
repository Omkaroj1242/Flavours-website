import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div class="text">
                    <h2>ABOUT ROSA</h2>
                    <div><i class="fas fa-asterisk"></i></div>
                    <p>ROSA is an enchanting and easy-to-use parallax Restaurant WordPress theme that allows you to tell your story in a dynamic, narrative and enjoyable way, making it perfect for restaurants, bakeries, bars or coffee shops.</p>
                </div>
                <div class="contact-container">
                    <div class="social-media">
                        <h3>Follow Along</h3>
                        <div class="links">
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-facebook-square"></i></a>
                            <a href="#"><i class="fab fa-pinterest"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="newsletter">
                        <h3>NewsLetter</h3>
                        <form method="post">
                            <input type="email" name="email" placeholder="Type Your Email"/>
                                <i class="fas fa-envelope"></i>
                        </form>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer