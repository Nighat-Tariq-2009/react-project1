import React from 'react'
import "../style/hero.css"

function Hero() {
  return (
    
    <div className="header-container">
    <div className="header-box">
        {/* left */}
        <div>
            <img src="heroImage.avif" alt="my-pic" className="hero-image" />
        </div>
        {/* right */}
        <div className="hero-content">
    <h1 className="hero-title">
        Welcome to ShopEase
        <div>Your One-Stop Online Store</div>
    </h1>
    <p className="hero-des">
        Discover a wide range of premium products at unbeatable prices. From the latest tech gadgets to everyday essentials, we bring you the best deals with seamless shopping and fast delivery.
    </p>
    <button className="hero-btn">Shop Now</button>
</div>


    </div>
</div>
  )
}

export default Hero
