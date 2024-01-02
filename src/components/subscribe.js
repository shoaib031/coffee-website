import React from 'react'

const subscribe = () => {
    return (
        <div className='top'>
            <div className='best'>
                <h2>
                    Quis hendrerit <br />dolor magna
                </h2>
                {/* <img src='./images/data.png' className='data' /> */}
            </div>
            <div className='input'>
                <input type='text' placeholder='your email here' />
                <button>subscribe</button>
            </div>
        </div>
    )
}

export default subscribe