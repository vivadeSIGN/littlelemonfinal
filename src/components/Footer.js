import React from "react"
import small_logo from "../images/Logo .svg"

const Footer = () => {
    return(
        <footer className="">
            <section>
            <div className="company-info">
                <img src={small_logo} alt=""/>
                <p>Little Lemon © 2024</p>
            </div>
            <div>
                <h3>Important Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/booking">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
            <li>Address: <br/> 789 Big Apple Avenue, Chicago</li>
                <li>Phone: <br/> +1 987 590 9908</li>
                <li>Email: <br/> info@littlelemon.com</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Tik Tok</a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;