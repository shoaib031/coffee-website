import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='headings'>
          <h1>COFFEE</h1>
          <p>Scelerisque felis imperdiet proin <br />fermentum leo.</p>
          <img src='./images/icon.png' />
          <img src='./images/icon1.png' />
          <img src='./images/icon2.webp' />
        </div>
        <div className='headingss'>
          <h1>MENU</h1>
          <div className='kyun'>
            <a>Home</a>
            <a>Products</a>
            <a>The Store</a>
            <a>Contact</a>
            <a>News</a>
          </div>
        </div>
        <div className='headingsss'>
          <h1>VISIT US</h1>
          <div className='lorem'>
            <span>Lorem-Ip</span> <br />
            <span>City-District</span> <br />
            <span>+00 1234 5678</span> <br />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer